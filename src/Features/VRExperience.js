// src/components/VR360Viewer.js
import React, { useState } from 'react';
import { Pannellum } from 'pannellum-react';
import { StepForward,StepBack } from 'lucide-react';

const places = [
  {
    name: 'Golden Temple, Amritsar',
    image: 'https://plus.unsplash.com/premium_photo-1697730331435-92e07494db43?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVuJTIwdGVtcGxlfGVufDB8fDB8fHww',
    description: 'The Golden Temple, located in Amritsar, is a holy site for Sikhs and a stunning piece of architecture.',
  },
  {
    name: 'Wagah Border, Amritsar',
    image: 'https://assets.zeezest.com/blogs/PROD_ZZ%20SEO%20Image%20Resizing%203%20(12)_1682683508598_thumb_1200.png?w=3840&q=75',
    description: 'Badshahi Mosque is one of the largest mosques in Pakistan, showcasing Mughal architecture.',
  },
  {
    name: 'Jallianwala Bagh',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ae/70/63/memorial.jpg?w=1200&h=-1&s=1',
    description: 'The Shalimar Gardens are a beautiful and historic garden complex built during the Mughal era.',
  }
];

const VR360Viewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % places.length);
  };

  const handleBack = () => {
    setCurrentIndex((currentIndex - 1 + places.length) % places.length);
  };

  const currentPlace = places[currentIndex];

  return (
    <div>
      <Pannellum
        width={window.innerWidth-2}
        height={window.innerHeight-2}
        image={currentPlace.image}
        pitch={10}
        yaw={30}
        hfov={110}
        autoLoad
        onLoad={() => {
          console.log(`${currentPlace.name} loaded`);
        }}
        transitionDuration={1000} // Image transition effect
      >
        <Pannellum.Hotspot
          type="info"
          pitch={11}
          yaw={-107}
          text={currentPlace.description}
        />
      </Pannellum>
      
      <div style={{marginTop: '20px', position:'absolute', top:'2%',right:'5%', width:"270px", backgroundColor:'white', padding:'10px 10px', borderRadius:'30px'}}>
        <h3 style={{backgroundColor:'red', padding:'10px 10px', fontSize:'24px', letterSpacing:'-1px', borderRadius:'10px', color:'white'}}>{currentPlace.name}</h3>
        <button onClick={handleBack} style={{ padding: '10px 20px', border:'none',borderRadius:'30px', backgroundColor:'blue', color:'white' }}><StepBack/></button>
        <button onClick={handleNext} style={{ padding: '10px 20px', border:'none',borderRadius:'30px', backgroundColor:'blue', color:'white', right:'10px', position:'absolute'   }}><StepForward/></button>
      </div>
    </div>
  );
};

export default VR360Viewer;
