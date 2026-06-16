import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceProfile from "../pages/ServiceProfile";
import Doctors from "../pages/Doctors";
import DoctorProfile from "../pages/DoctorProfile";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import BookAppointment from "../pages/BookAppointment";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceProfile />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorProfile />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      {/* Fallback route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
