/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Section from "../components/Section";
import SEO from "../components/SEO";
import { Mail, Phone, Clock, Shield, Scale, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    // Add access key if not already in form
    if (!formData.has("access_key")) {
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "");
    }

    // Add subject
    formData.append("subject", `New Quote Request from ${formData.get("name")} at ${formData.get("firm")}`);
    formData.append("from_name", "Imperial Document Services Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Request a Confidential Quote"
        description="Get a custom estimate for your litigation support needs. Secure, confidential, and professional document services for attorneys."
        keywords="contact legal support, request quote, litigation support quote, secure document services"
      />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-legal-navy mb-8">Request a Confidential Quote</h1>
            <p className="text-xl text-legal-charcoal/60 mb-12 leading-relaxed">
              Every litigation project is unique. Share your requirements and deadlines with us for a custom turnaround estimate.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-legal-navy/5 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-legal-navy" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-legal-navy mb-2">Secure & Confidential</h4>
                  <p className="text-legal-charcoal/60 leading-relaxed">Your case documents are handled with strict NDA protocols and secure storage standards.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-legal-navy/5 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-legal-navy" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-legal-navy mb-2">Fast Turnaround</h4>
                  <p className="text-legal-charcoal/60 leading-relaxed">Quotes are typically delivered within 4 business hours. Rush support available.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-legal-navy/5 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-7 h-7 text-legal-navy" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-legal-navy mb-2">National Support</h4>
                  <p className="text-legal-charcoal/60 leading-relaxed">We support attorneys across all US jurisdictions and trial levels.</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-8 bg-legal-muted rounded-2xl border border-legal-border">
              <h4 className="font-bold mb-6 text-legal-navy flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Direct Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-medium">
                  <Mail className="w-4 h-4 text-legal-navy/60" />
                  <span>contact@imperialdocs.com</span>
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <Phone className="w-4 h-4 text-legal-navy/60" />
                  <span>(727) 624-9085</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-3xl border border-legal-border shadow-2xl relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-legal-navy/5 -mr-16 -mt-16 rounded-full" />
             
             {!submitted ? (
               <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                 <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-legal-charcoal/60">Full Name</label>
                     <input required name="name" type="text" className="w-full px-6 py-4 rounded-xl border border-legal-border focus:border-legal-navy focus:outline-none transition-all" placeholder="Attorney Name" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-legal-charcoal/60">Law Firm</label>
                     <input required name="firm" type="text" className="w-full px-6 py-4 rounded-xl border border-legal-border focus:border-legal-navy focus:outline-none transition-all" placeholder="Firm Name" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-legal-charcoal/60">Work Email</label>
                   <input required name="email" type="email" className="w-full px-6 py-4 rounded-xl border border-legal-border focus:border-legal-navy focus:outline-none transition-all" placeholder="email@firm.com" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-legal-charcoal/60">Primary Service Needed</label>
                   <select name="service" className="w-full px-6 py-4 rounded-xl border border-legal-border focus:border-legal-navy focus:outline-none transition-all bg-white">
                     <option>Litigation Document Formatting</option>
                     <option>TOCs / TOAs</option>
                     <option>Exhibit Preparation</option>
                     <option>PDF Cleanup & Filing Prep</option>
                     <option>Trial Support</option>
                     <option>Other / Not Sure</option>
                   </select>
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-legal-charcoal/60">Project Deadline</label>
                   <input required name="deadline" type="date" className="w-full px-6 py-4 rounded-xl border border-legal-border focus:border-legal-navy focus:outline-none transition-all" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-legal-charcoal/60">Message / Scope Details</label>
                   <textarea name="message" rows={4} className="w-full px-6 py-4 rounded-xl border border-legal-border focus:border-legal-navy focus:outline-none transition-all resize-none" placeholder="Briefly describe your document needs and volume..."></textarea>
                 </div>

                 {error && (
                   <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 font-medium">
                     {error}
                   </div>
                 )}

                 <div className="flex items-center gap-3 p-4 bg-legal-navy/5 rounded-xl border border-legal-navy/10 text-xs text-legal-charcoal/70 leading-relaxed">
                   <Shield className="w-4 h-4 flex-shrink-0 text-legal-navy" />
                   <span>By submitting, you agree to our privacy policy. Your information is encrypted and confidential.</span>
                 </div>

                 <button 
                  disabled={loading}
                  className="w-full py-5 bg-legal-navy text-white font-bold rounded-xl hover:bg-legal-charcoal transition-all shadow-xl shadow-legal-navy/20 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                 >
                   {loading ? (
                     <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                     </>
                   ) : (
                     "Request Secure Quote"
                   )}
                 </button>
               </form>
             ) : (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="flex flex-col items-center justify-center h-full text-center py-20 relative z-10"
               >
                 <div className="w-20 h-20 bg-legal-navy text-white rounded-full flex items-center justify-center mb-8 shadow-xl shadow-legal-navy/20">
                   <Shield className="w-10 h-10" />
                 </div>
                 <h2 className="text-3xl font-bold text-legal-navy mb-4">Request Received</h2>
                 <p className="text-legal-charcoal/60 mb-10 max-w-sm">
                   A specialist has been notified. You will receive a secure quote at your firm email address within 4 business hours.
                 </p>
                 <button 
                  onClick={() => setSubmitted(false)}
                  className="text-legal-navy font-bold hover:underline"
                 >
                   Send another request
                 </button>
               </motion.div>
             )}
          </div>
        </div>
      </Section>
    </div>
  );
}
