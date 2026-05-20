/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LegalServices from "./pages/LegalServices";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import BlogPost_FormattingIssues from "./pages/BlogPost_FormattingIssues";
import BlogPost_CourtReady from "./pages/BlogPost_CourtReady";
import BlogPost_FilingChecklist from "./pages/BlogPost_FilingChecklist";
import BlogPost_Exhibits from "./pages/BlogPost_Exhibits";
import BlogPost_TOA from "./pages/BlogPost_TOA";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/legal-services" element={<LegalServices />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/blog/formatting-issues-delay-filings" element={<BlogPost_FormattingIssues />} />
              <Route path="/blog/what-makes-a-motion-court-ready" element={<BlogPost_CourtReady />} />
              <Route path="/blog/filing-prep-checklist-for-litigation-teams" element={<BlogPost_FilingChecklist />} />
              <Route path="/blog/why-exhibit-organization-matters" element={<BlogPost_Exhibits />} />
              <Route path="/blog/toc-toa-cleanup-basics" element={<BlogPost_TOA />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
