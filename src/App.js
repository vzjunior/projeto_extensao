import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Historia from "./components/pages/Historia";
import EventosOficinas from "./components/pages/EventosOficinas";
import ComoSeVoluntariar from "./components/pages/ComoSeVoluntariar";
import Parceiros from "./components/pages/Parceiros";
import Contatos from "./components/pages/Contatos";
import "./styles.css";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/eventos-oficinas" element={<EventosOficinas />} />
        <Route path="/como-se-voluntariar" element={<ComoSeVoluntariar />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
