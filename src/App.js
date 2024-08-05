import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Aboutus from "./components/Aboutus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar title = "TextUtils" about="Aboutus"/>
      <Routes>
        <Route path="/about" element={<Aboutus />} />
        <Route path="/" element={<TextForm />} />
      </Routes>
    </Router>
  );
}

export default App;
