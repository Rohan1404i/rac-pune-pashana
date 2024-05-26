import React, { useEffect, useRef, useState } from 'react';
import './CarouselContainer.css'; 
import carousel1 from '../../assets/carousel1.jpg'
import VID4 from '../../assets/VID4.mp4';
import VID3 from '../../assets/VID3.mp4';
import {Carousel} from 'antd';

export default function CarouselContainer (){

  const curRef = useRef();

  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  console.log(curRef)

  return (
  <Carousel ref={curRef} afterChange={onChange} className='carouselWholeCont'>
      <div className='eachCont'>
        <video src={VID4} className='video' autoPlay muted/>
      </div>
      <div className='eachCont'>
        <img src={carousel1} style={{width:'100%'}}/>
      </div>
      <div className='eachCont'>
        <video src={VID3} className='video' autoPlay muted/>
      </div>
    </Carousel>  
  );
};