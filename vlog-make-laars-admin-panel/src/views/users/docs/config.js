// THIS IS SAMPLE CODE ONLY - NOT MEANT FOR PRODUCTION USE
import { BlobServiceClient } from '@azure/storage-blob';

const sasToken = localStorage.getItem('sasToken');
const containerName = `${process.env.REACT_APP_USER_DOCS_CONTAINER}`;
const storageAccountName = 'vlogmakelaarsstorage';

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

const stopLoader = (index, setIsDocumentSubmitting) => {
  switch (index) {
    case 1:
      setIsDocumentSubmitting({
        doc1: false
      });
      break;
    case 2:
      setIsDocumentSubmitting({
        doc2: false
      });
      break;
    case 3:
      setIsDocumentSubmitting({
        doc3: false
      });
      break;
    case 4:
      setIsDocumentSubmitting({
        doc4: false
      });
      break;
    case 5:
      setIsDocumentSubmitting({
        doc5: false
      });
      break;
    case 6:
      setIsDocumentSubmitting({
        doc6: false
      });
      break;
    case 7:
      setIsDocumentSubmitting({
        doc7: false
      });
      break;
    case 8:
      setIsDocumentSubmitting({
        doc8: false
      });
      break;
    case 9:
      setIsDocumentSubmitting({
        doc9: false
      });
      break;
    case 10:
      setIsDocumentSubmitting({
        doc10: false
      });
      break;
    case 11:
      setIsDocumentSubmitting({
        doc11: false
      });
      break;
    case 12:
      setIsDocumentSubmitting({
        doc12: false
      });
      break;
    case 13:
      setIsDocumentSubmitting({
        doc13: false
      });
      break;
  }
};

const createBlobInContainer = async (
  containerClient,
  file,
  currentDocument,
  index,
  setIsDocumentSubmitting,
  setSendTempDocumentMutation
) => {
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(currentDocument);

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  // upload file
  const res = await blobClient.uploadBrowserData(file, options);

  if (res?._response?.status === 201) {
    setSendTempDocumentMutation(true);
    stopLoader(index, setIsDocumentSubmitting);
  }

  await blobClient.setMetadata({ UserName: 'shubham' });
};

const uploadFileToBlob = async (
  file,
  currentDocument,
  index,
  setIsDocumentSubmitting,
  setSendTempDocumentMutation
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
    currentDocument,
    index,
    setIsDocumentSubmitting,
    setSendTempDocumentMutation
  );

  // get list of blobs in container
  return getBlobsInContainer(containerClient);
};
// </snippet_uploadFileToBlob>

// </snippet_uploadFileToBlob>

export default uploadFileToBlob;
