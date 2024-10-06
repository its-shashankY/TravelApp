// src/api/pinata.js
import axios from 'axios';


export const pinFileToIPFS = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  let data = new FormData();
  data.append('file', file);

  const res = await axios.post(url, data, {
    headers: {
      pinata_api_key: API_KEY,
      pinata_secret_api_key: API_SECRET,
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data.IpfsHash;
};

export const getFileFromIPFS = (hash) => {
  return `https://gateway.pinata.cloud/ipfs/${hash}`;
};
