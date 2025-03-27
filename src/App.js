import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Historia from './components/Historia';
import EventosOficinas from './components/EventosOficinas';
import ComoSeVoluntariar from './components/ComoSeVoluntariar';
import Parceiros from './components/Parceiros';
import Contatos from './components/Contatos';
import'./styles.css';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/historia" element={<Historia />} />
  <Route path="/eventos-oficinas" element={<EventosOficinas />} />
  <Route path="/como-se-voluntariar" element={<ComoSeVoluntariar />} />
  <Route path="/parceiros" element={<Parceiros />} />
  <Route path="/contatos" element={<Contatos />} />
</Routes>

    </Router>
  );
};

export default App;
