import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Historia from "./components/pages/Historia";
import EventosOficinas from "./components/pages/EventosOficinas";
import ComoSeVoluntariar from "./components/pages/ComoSeVoluntariar";
import Parceiros from "./components/pages/Parceiros";
import Contatos from "./components/pages/Contatos";
import NoticiaDetalhada from "./components/NoticiaDetalhada";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./components/pages/Login";
import EventoDetalhado from "./components/EventoDetalhado";
import { AuthProvider } from "./context/AuthContext";
import "./styles.css";
import CadastroNoticia from "./components/CadastroNoticia";
import CadastroEvento from "./components/CadastroEvento";
import CadastroParceiro from "./components/CadastroParceiros";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias/cadastrar" element={<CadastroNoticia />} />
          <Route path="/noticias/editar/:id" element={<CadastroNoticia />} />
          <Route path="/eventos/cadastrar" element={<CadastroEvento />} />
          <Route path="/eventos/editar/:id" element={<CadastroEvento />} />
          <Route path="/parceiros/cadastrar" element={<CadastroParceiro />} />
          <Route path="/parceiros/editar/:id" element={<CadastroParceiro />} />
          <Route path="/noticias/:id" element={<NoticiaDetalhada />} />
          <Route path="/eventos/:id" element={<EventoDetalhado />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/eventos-oficinas" element={<EventosOficinas />} />
         
          <Route path="/como-se-voluntariar" element={<ComoSeVoluntariar />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
