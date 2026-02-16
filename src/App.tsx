import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Solutions } from './pages/Solutions';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { Compliance } from './pages/Compliance';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Admin } from './pages/Admin';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


