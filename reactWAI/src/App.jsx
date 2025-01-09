import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Helmet from "react-helmet";
import Navbar from "./Navbar";
import PageHome from "./PageHome";
import BigLogo from "./assets/waibiglogo.png";
import PageFAQ from "./PageFAQ";
import LastYear from "./LastYear";

function Dataquest() {
  return (
    <div className="home-container">
      <PageHome />;
      <img className="big-logo" src={BigLogo} />
    </div>
  );
}

function FAQ() {
  return <PageFAQ />;
}

function Sponsors() {
  return <div>Meet our sponsors!</div>;
}

function App() {
  return (
    <>
      <Helmet
        bodyAttributes={{
          style: "background-image: linear-gradient(90deg, purple, blue)",
        }}
      />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/dataquest" element={<Dataquest />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/last-year" element={<LastYear />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
