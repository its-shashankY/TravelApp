import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled } from '@mui/system';
import AppAppBar from '../HomePage/AppBar';
import MainContent from '../HomePage/MainContent';
import Footer from '../HomePage/Footer';
import { Typography } from '@mui/material';

const StyledImageList = styled(ImageList)({
  transition: 'opacity 1s ease-in-out',
  opacity: 0,
  animation: 'fadeIn 1s forwards',
  '@keyframes fadeIn': {
    to: { opacity: 1 },
  },
});

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontFamily: 'DM Sans, sans-serif', // Add DM Sans font here
  });
  

const StyledImageListItem = styled(ImageListItem)(({ expanded }) => ({
  transition: 'transform 0.5s ease-in-out',
  transform: expanded ? 'scale(1.2)' : 'scale(1)',
  cursor: 'pointer',
  zIndex: expanded ? 1 : 0, // bring the expanded image to the front
  fontFamily: 'DM Sans, sans-serif', // Add DM Sans font here
}));

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleImageClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // toggle the expanded state
  };

  return (
    <div>
    <StyledTypography>
    <StyledImageList
      sx={{
        width: window.innerWidth>1000?window.innerWidth-300:window.innerWidth-10,
        left: window.innerWidth>1000?150:5,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        overflow:'hidden', 
        position:'absolute'
      }}
    >
    <AppAppBar/>
    <MainContent/>
      {itemData.map((item, index) => (
        <StyledImageListItem
          key={item.img}
          expanded={expandedIndex === index}
          onMouseOver={() => handleImageClick(index)}
        >
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=358&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{
              width: '360px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: expandedIndex === index ? '0 8px 16px rgba(0, 0, 0, 0.3)' : 'none',
            }}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </StyledImageListItem>
      ))}
      <Footer/>
    </StyledImageList>
    </StyledTypography>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];
