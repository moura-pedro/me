import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Pics from "./pages/Pics";
import Resume from "./pages/Resume";
import Reading from "./pages/Reading";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/pics" element={<Pics />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/reading" element={<Reading />} />
    </Routes>
  </Router>
);

export default App;
