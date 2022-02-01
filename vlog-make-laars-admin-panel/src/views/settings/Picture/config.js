// THIS IS SAMPLE CODE ONLY - NOT MEANT FOR PRODUCTION USE
import { BlobServiceClient } from '@azure/storage-blob';

const sasToken = localStorage.getItem('sasToken');
const containerName = `adminimages`;
const storageAccountName =
  'vlogmakelaarsstorage' || 'storagename' || 'azeem-azure';

// Feature flag - disable storage feature to app if not configured
export const isStorageConfigured = () => {
  return !(!storageAccountName || !sasToken);
};

// return list of blobs in container to display
const getBlobsInContainer = async containerClient => {
  const returnedBlobUrls = [];

  // get list of blobs in container
  // eslint-disable-next-line
  for await (const blob of containerClient.listBlobsFlat()) {
    // if image is public, just construct URL
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
};

const createBlobInContainer = async (
  containerClient,
  file,
  profilePicturePath,
  setIsProfilePictureUploaded
) => {
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(profilePicturePath);

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  // upload file
  const res = await blobClient.uploadBrowserData(file, options);
  if (res?._response?.status === 201) {
    setIsProfilePictureUploaded(false);
  }

  await blobClient.setMetadata({ UserName: 'shubham' });
};

const uploadFileToBlob = async (
  file,
  profilePicturePath,
  setIsProfilePictureUploaded
) => {
  if (!file) return [];

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );
  // get Container - full public read access
  const containerClient = blobService.getContainerClient(containerName);

  // upload file
  await createBlobInContainer(
    containerClient,
    file,
    profilePicturePath,
    setIsProfilePictureUploaded
  );

  // get list of blobs in container
  return getBlobsInContainer(containerClient);
};
// </snippet_uploadFileToBlob>

// </snippet_uploadFileToBlob>

export default uploadFileToBlob;
