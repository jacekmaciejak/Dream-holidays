import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services/Services";
import FeaturedRooms from "../components/VacationDestination/VacationDestination";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="egzotyczne wakacje"
          subtitle="egzotyczne wakacje od 999 zł"
        >
          <Link to="/rooms" className="btn-primary">
            wycieczki
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
