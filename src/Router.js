import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./product-list/List";
import Contact from "./contact/Contact";
import Product from "./Product/Product";
import Slider from './slider/Slider';
import Nopath from "./Nopath";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />}>
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-list" element={<List />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="*" element={<Nopath />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
