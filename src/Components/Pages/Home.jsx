import React from "react";
import "./Home.css";

import Navbar from "./fragment/Navbar/Navbar";
import Header from "./fragment/Header/Header";
import Banner from "./fragment/Banner/Banner";
import Skills from "./fragment/Skills/Skills";
import Experience from "./fragment/Experience/Experience";
import Qualification from "./fragment/Qualification/Qualification";
import Links from "./fragment/Links/Links";
import Footer from "./fragment/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Experience />
      <Qualification />
      <Links />
      <Header />
      <div className="footer_bg">
        <Footer />
      </div>
    </>
  );
};

export default Home;
