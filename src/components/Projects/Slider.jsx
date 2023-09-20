import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://i.ibb.co/SR02tZS/6.jpg",
    disc: "Its a Crypto-currency site which allows users to analyze the different Crypto currencies as real time data is fetched through api calls.",
        demo:"https://cryptwire.netlify.app/"
    },
    {
        img : "https://i.ibb.co/SNhC0MM/5.jpg",
      disc: "A song playing angular project using ANGULAR v15, Bootstrap and CSS. The api were manually made and deployed in a json server.",
        demo:"https://waveme-rbn.netlify.app/"
    },
    {
        img : "https://i.ibb.co/4KLPqkZ/3.jpg",
      disc: "A static Dashboard Using ANGULAR v15, Angular Material and CSS This dashboard provides statistical analysis.",
        demo:"https://medicare-dashboard-rbn.netlify.app/"
    },
    {
        img : "https://i.ibb.co/xJqDjqh/4.jpg",
        disc : "A website to search recipes and their ingredients. The user can also create recipes and store them in the global list.",
        demo:"https://real-flavours-roshan.netlify.app/"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color:#01be96;
    cursor: pointer;
    color: white;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`