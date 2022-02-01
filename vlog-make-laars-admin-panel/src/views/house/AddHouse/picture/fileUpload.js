import React, { useState } from 'react';
import Path from 'path';
import uploadFileToBlob, { isStorageConfigured } from './Test';

const storageConfigured = isStorageConfigured();

const FileUpload = props => {
  // all blobs in container
  const [blobList, setBlobList] = useState([]);

  // current file to upload into container
  const [fileSelected, setFileSelected] = useState(null);

  const { file, up, success, temp, setUp } = props;


  const [dont, setDont] = useState(true);
  // UI/form manaslgement
  const [uploading, setUploading] = useState(false);
  const [inputKey, setInputKey] = useState(Math.random().toString(36));

  const onFileChange = event => {
    // capture file into state
    setFileSelected(event.target.files);
  };

  const onFileUpload = async () => {
    // prepare UI
    success(true);
    setUploading(true);

    // *** UPLOAD TO AZURE STORAGE ***
    for (let i = 0; i < temp.length; ++i) {
      const tmp = temp[i].blobIdImage;

      var blobsInContainer = await uploadFileToBlob(
        file[i] || fileSelected,
        tmp
      );
    }

    // prepare UI for results
    setBlobList(blobsInContainer);

    // reset state/form
    setFileSelected(null);
    setUploading(false);
    success(false);
    setInputKey(Math.random().toString(36));
    setDont(true);
    setUp(false);
  };

  if (up && dont) {
    onFileUpload();

    setDont(false);
  }

  // display form
  const DisplayForm = () => (
    <div>
      <input type="file" onChange={onFileChange} key={inputKey || ''} />
      <button type="submit" onClick={onFileUpload}>
        Upload!
      </button>
    </div>
  );

  // display file name and image
  const DisplayImagesFromContainer = () => (
    <div>
      <h2>Container items</h2>
      <ul>
        {blobList.map(item => {
          return (
            <li key={item}>
              <div>
                {Path.basename(item)}
                <br />
                {/* <img src={item} alt={item} height="200" /> */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <></>
    // <div>
    //   <h1>Upload file to Azure Blob Storage</h1>
    //   {storageConfigured && !uploading && DisplayForm()}
    //   {storageConfigured && uploading && <div>Uploading</div>}
    //   <hr />
    //   {storageConfigured && blobList.length > 0 && DisplayImagesFromContainer()}
    //   {!storageConfigured && <div>Storage is not configured.</div>}
    // </div>
  );
};

export default FileUpload;
