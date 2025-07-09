import React from "react";
import Logo from "../../../svg/logo";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import Banner from "./banner/Banner";
import Race from "./race/Race";
import Winners from "./winners/Winners";

const Home = () => {
  return (
    <>
      <Header/>

      <Banner/>

      <Race/>

      <Winners/>
      
      <Footer/>
      
    </>
  );
};

export default Home;
