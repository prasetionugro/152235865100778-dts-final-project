import React from "react";
import Popular from "../components/Popular";
import Vegan from "../components/Vegan";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Popular />
      <Vegan />
      <Footer />
    </div>
  );
};
export default Home;
