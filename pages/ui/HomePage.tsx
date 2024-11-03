"use client";
import React from "react";
import Feature from "./pages/Feature";
import Feature2 from "./pages/Feature2";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Newsletter from "./pages/Newsletter";
import Pricing from "./pages/Pricing";
import Products from "./pages/Product";
import Service from "./pages/Service";
import NewsletterSection from "./pages/Newsletter2";
import { TapeSection } from "./pages/Tape";
import Slideshow from "./pages/Slideshow";

const HomePage: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <Header />
      <Products />
      <Feature />
      <Pricing />
      <Gallery />
      <Service />
      <TapeSection />
      <NewsletterSection />
      <Feature2 />
      <Newsletter />
      <Slideshow />
      <Footer />
    </div>
  );
};

export default HomePage;
