import './index.css'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './styles/colors.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;