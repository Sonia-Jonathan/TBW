import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Sound from "./pages/Sound";
import Talents from "./pages/Talents";
import Vision from "./pages/Vision";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="sound" element={<Sound />} />
        <Route path="talents" element={<Talents />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
