import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrolltoTop from './components/ScrollToTop';
import Home from './pages/Home';
import Francais from './pages/Francais';
import Anglais from './pages/Anglais';
import Mecanique from './pages/Mecanique';
import Electronique from './pages/Electronique';
import Boutique from './pages/Boutique';
import Contact from './pages/Contact';
import About from './pages/About';
import Confection from './pages/Confection';
import Informatique from './pages/Informatique';
import Footer from './components/Footer';
import AssistantIA from './components/AssistantIA';
import './i18n/i18n';
import './App.css';

function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {

  const [darkMode, setDarkMode] = useState(()=>{
    return localStorage.getItem('hopeness_theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('hopeness_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('hopeness_theme', 'light');
    }

  }, [darkMode])

  return (
    <Router>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300'>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/activites/francais" element={<PageTransition><Francais/></PageTransition>} />
          <Route path="/activites/anglais" element={<PageTransition><Anglais/></PageTransition>} />
          <Route path="/activites/informatique" element={<PageTransition><Informatique/></PageTransition>} />
          <Route path="/activites/mecanique" element={<PageTransition><Mecanique/></PageTransition>} />
          <Route path="/activites/electronique" element={<PageTransition><Electronique/></PageTransition>} />
          <Route path="/activites/confection" element={<PageTransition><Confection/></PageTransition>} />
          <Route path="/a-propos" element={<PageTransition><About/></PageTransition>} />
          <Route path="/boutique" element={<Boutique/>} />
          <Route path="/contact" element={<PageTransition><Contact/></PageTransition>} />
        </Routes>

      </div>

      <Footer />
      <AssistantIA/>
      <ScrolltoTop/>
    </Router>
  )
}

export default App
