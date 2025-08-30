import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModernHeader from "./components/Header";
import ModernSathaTowingAbout from "./pages/About";
import ModernTowingServices from "./pages/Service";
import TowingGallery from "./pages/Gallary";
import ExpertTeamSection from "./pages/Team";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <ModernHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ModernSathaTowingAbout />} />
        <Route path="/services" element={<ModernTowingServices />} />
        <Route path="/gallery" element={<TowingGallery />} />
        <Route path="/team" element={<ExpertTeamSection />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery-photo" element={<TowingGallery />} />
      </Routes>
    </Router>
  );
}
