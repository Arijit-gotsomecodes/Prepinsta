import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonial from "../components/testimonial/Testimonial";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (
    <>
      {/* hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"know before you go"} />
                  <img src={worldImg} alt="world image" />
                </div>
                <h1>
                  Travelling opens the door for creating{" "}
                  <span className="highlight">MEMORIES</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  facilis est praesentium doloremque doloribus consectetur neque
                  ipsum optio eligendi, accusantium, illo voluptatem,
                  repudiandae delectus.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* hero section end */}
      <section>
        <Container>
          <Row>
            <Col>
              <h5 className="services__subtitle">What we serve ?</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>

            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*=====================Featured==========*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-3">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured Tour</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* ==========EXPERIENCED========= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all Experience <br /> We will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Eos, nostrum quidem similique eveniet magnam culpa corrupti
                  conseq.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Year experiences</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="ex img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==========EXPERIENCED========= */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour Gallery
              </h2>
            </Col>
            <MasonryImagesGallery />
          </Row>
        </Container>
      </section>
      {/* ===========FANS LOVE====================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default Home;
