import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Scroll restoration component to reset scroll height on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  const location = useLocation();
  const isBookingPage = location.pathname === "/book-appointment";

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md flex flex-col">

      <ScrollToTop />

      {!isBookingPage && <Navbar />}

      <main className="flex-grow">
        <AppRoutes />
      </main>

      {!isBookingPage && <Footer />}


      {/* Floating WhatsApp Button */}
      {!isBookingPage && (
        <a
          href="https://wa.me/919765432109"
          target="_blank"
          rel="noreferrer"
          className="
            fixed
            bottom-6
            right-6
            z-50
            w-14
            h-14
            rounded-full
            bg-green-500
            text-white
            flex
            items-center
            justify-center
            shadow-xl
            hover:scale-110
            transition-transform
          "
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      )}

    </div>
  );
}

export default App;