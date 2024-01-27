import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./pages/home/Home";
import Page404 from "./pages/page404/Page404";
import Sound from "./pages/sound/Sound";
import Talents from "./pages/talents/Talents";
import Vision from "./pages/vision/Vision";
import Clips from "./pages/vision/clips/Clips";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UniqueTitles from "./pages/sound/UniqueTitles/UniqueTitles";


function App() {
  return (
    <BrowserRouter>
      {window.location.pathname === '/vision/clips' ? null : <Header />}      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vision" element={<Vision />} />
        <Route path="vision/clips" element={<Clips />} />
        <Route path="sound" element={<Sound />} />
        <Route path="talents" element={<Talents />} />
        <Route path="sound/UniqueTitles" element={<UniqueTitles />} />
        <Route path="*" element={<Page404 />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
