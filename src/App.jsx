// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LayoutWrapper from "./LayoutWrapper";
import { useAuth } from "./contexts/AuthContext";

import Home from "./pages/Home";
import Volunteers from "./pages/Volunteers";
import Events from "./pages/Events";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Donate from "./pages/Donate";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/signin" />;
};

const App = () => (
  <Routes>
    <Route path="/" element={<LayoutWrapper />}>
      <Route index element={<Home />} />
      <Route
        path="volunteers"
        element={
          <PrivateRoute>
            <Volunteers />
          </PrivateRoute>
        }
      />
      <Route path="events" element={<Events />} />
      <Route path="media" element={<Media />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="donate" element={<Donate />} />
    </Route>
  </Routes>
);

export default App;
