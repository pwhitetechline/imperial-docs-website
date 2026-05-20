/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-legal-navy text-white/90 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <Logo variant="white" className="w-10 h-10 group-hover:rotate-12 transition-transform" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-white uppercase">
                Imperial
              </span>
              <span className="text-[10px] tracking-[0.2em] font-medium text-white/60 uppercase">
                Document Services
              </span>
            </div>
          </Link>
          <p className="text-sm text-white/60 leading-relaxed max-w-xs">
            Specialized litigation document support for attorneys and legal teams. Accuracy, consistency, and professional turnaround.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-white">Services</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>
              <Link to="/legal-services" className="hover:text-white transition-colors">Litigation Formatting</Link>
            </li>
            <li>
              <Link to="/legal-services" className="hover:text-white transition-colors">TOCs / TOAs</Link>
            </li>
            <li>
              <Link to="/legal-services" className="hover:text-white transition-colors">Exhibit Preparation</Link>
            </li>
            <li>
              <Link to="/legal-services" className="hover:text-white transition-colors">PDF Clean & Filing Prep</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-white">Company</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition-colors">Insights & Blog</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-white">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-white/40" />
              <span>contact@imperialdocs.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-white/40" />
              <span>(727) 624-9085</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-white/40" />
              <span>Remote Support Nationwide</span>
            </li>
            <li className="pt-4 flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/40">
          © {currentYear} Imperial Document Services. All rights reserved.
        </p>
        <p className="text-[10px] text-white/20 uppercase tracking-widest">
          Precision in Every Page
        </p>
      </div>
    </footer>
  );
}
