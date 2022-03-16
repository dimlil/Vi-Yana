import React from "react";
import "./Navigation.module.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Footer from "./Components/footer/Footer";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import WhyIsEarlyInterventionImportant from "./Pages/WhyIsEarlyInterventionImportant/WhyIsEarlyInterventionImportantPage";
import AllPosts from './Pages/AllPosts/AllPosts'
import PostPage from './Pages/PostPage/PostPage'
export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/Why-is-early-intervention-important"
            element={<WhyIsEarlyInterventionImportant />}
          />
          <Route path="/contacts" element={<Home />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}
