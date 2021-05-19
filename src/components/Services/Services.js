import React, { Component } from "react";
import './Services.css'
import Title from "../Title/Title.js";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Egzotyczne drinki",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, odio"
      },
      {
        icon: <FaHiking />,
        title: "Zwiedzanie",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, odio"
      },
      {
        icon: <FaShuttleVan />,
        title: "Dowóz do miejsca docelowego",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, odio"
      },
      {
        icon: <FaBeer />,
        title: "napoje w cenie",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, odio"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="gwarantujemy" />
        <div className="services__center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
