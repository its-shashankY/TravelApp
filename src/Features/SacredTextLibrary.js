// src/components/SacredTextLibrary.js
import React, { useState } from 'react';
import { List, ListItem, ListItemText, Typography, Box, TextField, Button } from '@mui/material';
import { pinFileToIPFS, getFileFromIPFS } from '../pinata';

function SacredTextLibrary() {
  const [texts, setTexts] = useState([]);
  const [newText, setNewText] = useState('');
  const [ipfsHash, setIpfsHash] = useState('');

  const uploadTextToIPFS = async () => {
    const hash = await pinFileToIPFS(newText);
    setIpfsHash(hash);
    setTexts([...texts, { text: newText, hash }]);
    setNewText('');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Interactive Sacred Text Library</Typography>
      <TextField
        label="Add Sacred Text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={uploadTextToIPFS} sx={{ mb: 2 }}>
        Upload Text
      </Button>
      <List>
        {texts.map((textItem, index) => (
          <ListItem key={index} sx={{ border: '1px solid #ccc', borderRadius: 1, mb: 1 }}>
            <ListItemText 
              primary={`Text: ${textItem.text}`} 
              secondary={`IPFS URL: ${getFileFromIPFS(textItem.hash)}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SacredTextLibrary;
