import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
    </div>
  );
}

export default App;
