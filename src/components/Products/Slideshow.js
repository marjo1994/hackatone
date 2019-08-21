import React, {useState} from 'react';
// import styled from 'styled-components'
import images from './Images'
import { Gallery, GalleryImage } from 'react-gesture-gallery'



export const Slider = ({handler}) => {
  const [index, setIndex] = useState(0);

  return(
    <Gallery 
      style={{
        width: '800px',
        height: '50vh'
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i)
      }}
    >
      {images.map(img => (
        <GalleryImage  src={img.url} />
      ))}

    </Gallery>
  )
};
