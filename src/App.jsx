import { useEffect, useState } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { fetchSettings } from "./api/settingsApi";

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

  const validRoutes = [
    "/",
    "/about",
    "/services",
    "/services/:id",
    "/doctors",
    "/doctors/:id",
    "/gallery",
    "/contact",
    "/book-appointment",
    "/privacy-policy",
    "/terms-of-service"
  ];
  const isNotFoundPage = location.pathname === "/404" || !validRoutes.some(route => matchPath({ path: route, end: true }, location.pathname));
  const hideLayout = isBookingPage;
  const [whatsAppNum, setWhatsAppNum] = useState("+92 337 5675083");

  useEffect(() => {
    let isMounted = true;
    const loadSettings = async () => {
      try {
        const data = await fetchSettings();
        if (isMounted && data) {
          const num = data.contact?.whatsApp || data.social?.whatsApp || "+92 337 5675083";
          setWhatsAppNum(num);
        }
      } catch (err) {
        console.error("Failed to load settings in App.jsx:", err);
      }
    };
    loadSettings();
    return () => { isMounted = false; };
  }, []);

  const whatsAppUrl = whatsAppNum.startsWith("http")
    ? whatsAppNum
    : `https://wa.me/${whatsAppNum.replace(/[^0-9]/g, "")}`;

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md flex flex-col">

      <ScrollToTop />

      {!hideLayout && <Navbar />}

      <main className="flex-grow">
        <AppRoutes />
      </main>

      {!hideLayout && <Footer />}

      {/* Floating WhatsApp Button */}
      {!hideLayout && (
        <a
          href={whatsAppUrl}
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