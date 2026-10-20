import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Courses from "./components/CareerTracks.jsx";
import Placements from "./pages/Placements.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Admin from "./pages/Admin.jsx";
import CareerFinder from "./pages/CareerFinder.jsx";
import ApplicationStatus from "./pages/Applicationstatus.jsx";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/placements"
          element={<Placements />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />
        <Route
  path="/career-finder"
  element={<CareerFinder />}
/>
<Route
  path="/application-status"
  element={<ApplicationStatus />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;