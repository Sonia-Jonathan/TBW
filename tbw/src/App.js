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
import Store from "./pages/store/Store";
import Articles1 from "./pages/articles/Articles1";
import Articles2 from "./pages/articles/Articles2";
import Articles3 from "./pages/articles/Articles3";
import VideosDetails from "./pages/vision/videosDetails/VideosDetails";


function App() {
  return (
    <BrowserRouter>
      {window.location.pathname === '/vision/clips' ? null : <Header />}      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/article1" element={<Articles1 />} />
        <Route path="/article2" element={<Articles2 />} />
        <Route path="/article3" element={<Articles3 />} />

        <Route path="store" element={<Store />} />
        <Route path="vision" element={<Vision />} />
        <Route path="vision/{:page}/details" element={<VideosDetails />} />
        <Route path="music" element={<Sound />} />
        <Route path="talents" element={<Talents />} />
        <Route path="sound/UniqueTitles" element={<UniqueTitles />} />
        <Route path="*" element={<Page404 />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
