"use client"
import React from 'react'
import "./home.css"
import menuitems from "./menuitems.json";
import Carousel from "react-bootstrap/Carousel";
import data from "./carousel.json"

import Card from 'react-bootstrap/Card';
import cardData from "./card.json"


function Home() {
  return (<div>


    <div class="bg-body-secondary m-1 d-flex flex-wrap justify-content-center">
      {
        menuitems.map(({ src, title }, index) => {
          return <div class="m-1 p-1 " key={index}><img class="w-50 h-50" src={src} alt="" /><p class=" fw-bold p-1">{title}</p></div>
        })
      }
    </div>


    <div className='carousel'>
      <Carousel >
        {
          data.map(({ src, alt, title, subTitle }, index) => {
            return <Carousel.Item key={index}>
              <img
                className="d-block w-100 "
                src={src}
                alt={alt}
                height="180vh"
              />
              <Carousel.Caption>
                <h5>{title}</h5>
                <p>{subTitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          })
        }
      </Carousel>
    </div>
    <div className='mt-1 border border-dark-subtle p-3 m-1 position-relative'>
      <div className='m-0 p-1 fs-5 fw-bold'><span>you visited recently!</span><span style={{ position: 'absolute', right: '20px' }} className=" bi bi-arrow-right-circle-fill fs-4 ms-2" ></span></div>
      <div className='cardContainer'>{
        cardData.map(({ src, title, subtitle }, cardind) => {
          return <Card key={cardind} className='cardcontainer' style={{ width: '200px', height: '250px', marginLeft: "10px" }} >
            <Card.Img variant="top" style={{ width: "100%", height: "50%", padding: "5px" }} src={src} />
            <Card.Body>
              <Card.Title style={{ fontSize: "16px", textAlign: 'center' }}>{title}</Card.Title>
              <Card.Title style={{ fontSize: "16px", fontWeight: 'bold', textAlign: 'center' }}>{subtitle}</Card.Title>
            </Card.Body>
          </Card>
        })}
      </div>
    </div>

    <div className='mt-1 border border-dark-subtle p-3 m-1 position-relative'>
      <div className='m-0 p-2 fs-5 fw-bold'><span>Top deals!</span><span style={{ position: 'absolute', right: '20px' }} className=" bi bi-arrow-right-circle-fill fs-4 ms-2" ></span></div>
      <div className='cardContainer'>{
        cardData.map(({ src, title, subtitle }, cardind) => {
          return <Card key={cardind} className='cardcontainer' style={{ width: '200px', height: '250px', marginLeft: "10px" }} >
            <Card.Img variant="top" style={{ width: "100%", height: "50%", padding: "5px" }} src={src} />
            <Card.Body>
              <Card.Title style={{ fontSize: "16px", textAlign: 'center' }}>{title}</Card.Title>
              <Card.Title style={{ fontSize: "16px", fontWeight: 'bold', textAlign: 'center' }}>{subtitle}</Card.Title>
            </Card.Body>
          </Card>
        })}
      </div>
    </div>

  </div>)
}

export default Home
