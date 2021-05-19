import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="strony nie znaleziono">
        <Link to="/" className="btn-primary">
          strona główna
        </Link>
      </Banner>
    </Hero>
  );
}
