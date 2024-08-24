import React from "react";
import { Container } from "reactstrap";
const About = () => {
  return (
    <>
      <Container>
        <div className="bg-gray-100 min-h-screen p-10">
          <div className="max-w-2xl mx-auto bg-white shadow-md text-center px-5 py-3">
            <h1 className="text-3xl font-bold mb-6 text-center mb-7">
              About Travel World
            </h1>
            <p className="text-gray-700 mb-4">
              Welcome to Travel World, your go-to destination for exploring the
              beauty of the world.
            </p>
            <p className="text-gray-700 mb-4">
              This website is a frontend project developed by Arijit Deb.
              With a passion for travel and technology, Arijit has created this
              platform to inspire and assist you in planning your next
              adventure.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you're a seasoned traveler or someone planning their first
              trip, Travel World is here to provide you with valuable
              information, tips, and inspiration for your journey.
            </p>
            <p className="text-gray-700">
              Thank you for visiting Travel World. Embark on your next travel
              experience with us!
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
