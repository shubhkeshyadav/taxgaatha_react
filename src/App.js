import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import { WebStates } from "./store/WebContaxt";

import Home from "./pages/Home";
import Articles from "./pages/article/Articles";
import Detail from "./pages/article/Detail";
import OurService from "./pages/OurService";
import Contactus from "./pages/Contactus";
import About from "./pages/About";

import GstChapterDetail from "./pages/GstChapterDetail";
import GstScheduleDetail from "./pages/GstScheduleDetail";
import GstPages from "./pages/GstPages";
import GstDetailPages from "./pages/GstDetailPages";

function App() {
  return (
    <WebStates>
      <Header />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="our-services/:slug" element=<OurService /> />
        <Route path="/contactus" element=<Contactus /> />
        <Route path="/aboutus" element=<About /> />
        <Route path="/articles/:category?" element=<Articles /> />
        <Route path="/article/detail/:slug?" element=<Detail /> />

        <Route path="/gst/:type" element=<GstPages /> />
        <Route path="/gst/:type/:slug" element=<GstDetailPages /> />
        <Route path="/gst/chapter-detail/:slug" element=<GstChapterDetail /> />
        <Route
          path="/gst/schedule-detail/:slug"
          element=<GstScheduleDetail />
        />

        <Route path="*" element={<h4>Page Not Found</h4>} />
      </Routes>
      <Footer />
    </WebStates>
  );
}

export default App;
