// src/api/pinata.js
import axios from 'axios';

const API_KEY = '4428f489b49a4c42f873';
const API_SECRET = '89f1cdbb5f92a1f0eb6cecc3cfd77585af50a34b81f2a92af11030b27779589e';
const JWT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3Mjk5ZjM1Mi0xNmI5LTQ0MzMtOWJhNi05MDg0N2NiOWU1MzUiLCJlbWFpbCI6InNoYXNoYW5reWFkYWhhbGxpMDJrMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNDQyOGY0ODliNDlhNGM0MmY4NzMiLCJzY29wZWRLZXlTZWNyZXQiOiI4OWYxY2RiYjVmOTJhMWYwZWI2Y2VjYzNjZmQ3NzU4NWFmNTBhMzRiODFmMmE5MmFmMTEwMzBiMjc3Nzk1ODllIiwiZXhwIjoxNzU5NzcwODQxfQ.M4CRN7pwdvSybo_U5uNJ7RiSG3MmLqt7EiiqrTMolXI"

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
