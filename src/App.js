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

import ActAndRule from "./pages/ActAndRule";
import ActAndRuleDetail from "./pages/ActAndRuleDetail";
import GstChapterDetail from "./pages/GstChapterDetail";
import GstScheduleDetail from "./pages/GstScheduleDetail";

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

        <Route path="/gst/:type" element=<ActAndRule /> />
        <Route path="/gst/:type/:slug" element=<ActAndRuleDetail /> />
        <Route path="/gst/chapter-detail/:slug" element=<GstChapterDetail /> />
        <Route
          path="/gst/schedule-detail/:slug"
          element=<GstScheduleDetail />
        />
      </Routes>
      <Footer />
    </WebStates>
  );
}

export default App;
