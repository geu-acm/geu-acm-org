import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import Certificate from "./pages/Certificate";
import About from "./sections/About";
import Events from "./sections/Events";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="certi" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  )
}
