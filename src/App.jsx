// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "./LayoutWrapper";

import Home from "./pages/Home";
import Volunteers from "./pages/Volunteers";
import Events from "./pages/Events";
import Media from "./pages/Media";
import Contact from "./pages/Contact";

const App = () => (
  <Routes>
    <Route path="/" element={<LayoutWrapper />}>
      <Route index element={<Home />} />
      <Route path="volunteers" element={<Volunteers />} />
      <Route path="events" element={<Events />} />
      <Route path="media" element={<Media />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
);

export default App;
