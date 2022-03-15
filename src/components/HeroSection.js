import React from 'react'

import {Carousel, Container} from 'react-bootstrap'

const HeroSection = () => {
  return (
    <Container id="hero">
      <hr/>
        <Carousel fade>
          <Carousel.Item interval={2000} variant="dark">
          <div id="carouselImg">
          <img
          className="d-block w-100"
          src="https://media.gettyimages.com/photos/luxurious-hawaiian-5-star-resort-picture-id168301497?k=20&m=168301497&s=612x612&w=0&h=j_ftKVqZVwEhv4BlXIgif1JU7ZVHMIsuVol2EITQ0Hs="
          alt="First slide"/>
          </div>
          <Carousel.Caption variant="dark">
          <h3>Let your curiosity do the booking !</h3>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000} variant="dark">
          <div id="carouselImg">
          <img
          className="d-block w-100"
          src="https://media.gettyimages.com/photos/luxury-construction-hotel-with-swimming-pool-at-sunset-picture-id903417402?k=20&m=903417402&s=612x612&w=0&h=a73RID4dpoONgEimlAbtupptZOkGb_ibZ0H5HoJj1iE="
          alt="Second slide"/>
          </div>
          <Carousel.Caption>
          <h3>Discover experiences</h3>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000} variant="dark">
          <div id="carouselImg">
          <img
          className="d-block w-100"
          src="https://media.gettyimages.com/photos/beachfront-swimming-pool-picture-id1208302982?k=20&m=1208302982&s=612x612&w=0&h=CblQvcNbYmGw-qXlKK9jzWHOCJsBg_enQALstp-27KA="
          alt="Third slide"/>
          </div>
          <Carousel.Caption>
          <h3>Need a get-away? No need to wait. </h3>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000} variant="dark">
          <div id="carouselImg">
          <img
          className="d-block w-100"
          src="https://media.gettyimages.com/photos/paradise-beach-holiday-vacations-tourism-concept-tropical-resort-in-picture-id603718454?k=20&m=603718454&s=612x612&w=0&h=tqP0YiMWgFJLthRDZ2DTCQJolVZ7iXiiAhwZ2UVois8="
          alt="Third slide"/>
          </div>
          <Carousel.Caption>
          <h3>Find Apartments for your next trip!</h3>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000} variant="dark">
          <div id="carouselImg">
          <img
          className="d-block w-100"
          src="https://media.gettyimages.com/photos/colorful-houses-in-the-coast-of-spain-with-sunny-day-las-casas-de-en-picture-id1319304224?k=20&m=1319304224&s=612x612&w=0&h=rFYcYrHTjhGAKJTmPLrPW51Nr9iCJqPo5LUGGSu3Qsg="
          alt="Third slide"/>
          </div>
          <Carousel.Caption>
          <h3>Destinations you would love!</h3>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
      <hr/>
      <br/>
    </Container>
  )
}

export default HeroSection
