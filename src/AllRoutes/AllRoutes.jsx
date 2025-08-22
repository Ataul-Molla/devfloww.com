import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Home from "../page/Home/home";
import About from "../page/About/about";
import Layout from "../components/Layouts";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
