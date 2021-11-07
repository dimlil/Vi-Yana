import React from "react";
import "./Navigation.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Footer from "./Components/footer/Footer";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import WhyIsEarlyInterventionImportant from "./Pages/WhyIsEarlyInterventionImportant/WhyIsEarlyInterventionImportantPage";

export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/Why-is-early-intervention-important" component={WhyIsEarlyInterventionImportant} />
          <Route path="/useful" component={Home} />
          <Route path="/contacts" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
