import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AdPage from "./pages/AdPage";
import AddAd  from "./pages/AddAd";

const routes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/ad/:id" element={<AdPage />} />
      <Route exact path="/post-an-ad" element={ <AddAd />} />
      <Route path="*" element={ <NotFound />} />
    </Routes>
  );
};

export default routes;
