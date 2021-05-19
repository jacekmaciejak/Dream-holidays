import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="wycieczki">
        <Link to="/" className="btn-primary">
          powrót
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
