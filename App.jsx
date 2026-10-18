import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './views/Home';
import About from './views/About';
import SignUp from './views/Signup';
import Profile from './views/Profile';
import Feed from './views/Feed';
import NotFound from './views/NotFound';

// Separate component so useLocation works inside BrowserRouter
function AppRoutes() {
  const location = useLocation();

  return (
    // key changes on every route, which replays the fade-in animation
    <main key={location.pathname} className="page">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;