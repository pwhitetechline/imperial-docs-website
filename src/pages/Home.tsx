/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FileText, Table, Layers, FileCheck, Clock, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import Section from "../components/Section";
import SEO from "../components/SEO";
import Logo from "../components/Logo";
import Hyperframe from "../components/Hyperframe";

export default function Home() {
  return (
    <div className="pt-20">
      <SEO 
        title="Court-Ready Litigation Document Support"
        description="Professional litigation document support for attorneys. Motion formatting, pleadings, exhibits, and TOCs/TOAs backed by AmLaw 100 experienced professionals."
        keywords="litigation support, legal document formatting, court-ready documents, motion formatting, table of authorities, exhibit preparation"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-legal-offwhite min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-legal-navy/5 -skew-x-12 translate-x-20" />
          <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-legal-green/5 blur-3xl rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-legal-navy/10 text-legal-navy text-xs font-semibold uppercase tracking-widest mb-6">
              <Shield className="w-3 h-3" />
              <span>Court-Ready Documentation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-legal-navy mb-8">
              Litigation Document Support for Attorneys & Legal Teams
            </h1>
            <p className="text-xl text-legal-charcoal/70 leading-relaxed mb-10 max-w-xl">
              Motion formatting, pleadings, exhibits, TOCs/TOAs, PDF remediation, and overflow litigation support backed by legal operations and AmLaw 100 document experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-legal-navy text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-legal-charcoal transition-all shadow-lg shadow-legal-navy/20 flex items-center justify-center gap-2 group"
              >
                Request a Confidential Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/legal-services"
                className="flex items-center justify-center gap-2 px-10 py-4 rounded-full text-lg font-medium border border-legal-navy/20 hover:border-legal-navy transition-all"
              >
                View Legal Services
              </Link>
            </div>
          </motion.div>

          <div className="hidden lg:block relative">
            <Hyperframe delay={0.4}>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full aspect-[4/5] p-12 bg-white"
              >
                {/* Decorative document-like elements */}
                <div className="w-full h-4 bg-legal-navy/10 mb-8 rounded" />
                <div className="w-3/4 h-3 bg-legal-charcoal/5 mb-4 rounded" />
                <div className="w-full h-3 bg-legal-charcoal/5 mb-4 rounded" />
                <div className="w-5/6 h-3 bg-legal-charcoal/5 mb-4 rounded" />
                <div className="grid grid-cols-2 gap-4 mt-12 mb-12">
                  <div className="h-40 bg-legal-navy/5 rounded border border-legal-navy/10 border-dashed flex items-center justify-center">
                    <span className="text-[10px] uppercase tracking-widest text-legal-navy/40 font-bold">Exhibit A</span>
                  </div>
                  <div className="h-40 bg-legal-navy/5 rounded border border-legal-navy/10 border-dashed flex items-center justify-center">
                     <span className="text-[10px] uppercase tracking-widest text-legal-navy/40 font-bold">Exhibit B</span>
                  </div>
                </div>
                <div className="w-full h-3 bg-legal-charcoal/5 mb-4 rounded" />
                <div className="w-3/4 h-3 bg-legal-charcoal/5 mb-4 rounded" />
                
                <motion.div 
                  animate={{ rotate: [12, 15, 12], scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-1/4 w-32 h-32 bg-legal-green text-white flex items-center justify-center rounded-xl rotate-12 shadow-xl border-4 border-white"
                >
                  <FileCheck className="w-12 h-12" />
                </motion.div>
              </motion.div>
            </Hyperframe>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 shadow-xl rounded-lg border border-legal-border max-w-[240px] z-20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm font-bold">AmLaw 100 Standards</span>
              </div>
              <p className="text-xs text-legal-charcoal/60">Expert formatting meeting the highest professional levels.</p>
            </motion.div>

            {/* Subtle Parallax Background Elements */}
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-20 w-32 h-32 bg-legal-navy/5 rounded-full blur-2xl"
            />
          </div>
        </div>
      </section>


      {/* Who I Support Section */}
      <Section variant="muted" id="who-i-support">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-legal-navy mb-4">Precision Support for Dynamic Practices</h2>
          <div className="w-24 h-1 bg-legal-navy mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Solo Attorneys", desc: "Independent counsel who need AmLaw 100 quality without the high overhead of full-time staff." },
            { title: "Small Litigation Firms", desc: "Agile teams scaling their support during critical filing periods or major cases." },
            { title: "Paralegals & Staff", desc: "Expert backup for legal teams facing heavy deadlines or high-volume exhibit management." },
            { title: "High-Volume Teams", desc: "Scalable support for teams with constant filing needs across multiple jurisdictions." },
            { title: "Overflow Support", desc: "Flexible, on-demand assistance for firms experiencing temporary spikes in litigation work." },
            { title: "Deadline-Driven Orgs", desc: "Reliable support for organizations where accuracy and timing are non-negotiable." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl border border-legal-border shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-legal-navy mb-4">{item.title}</h3>
              <p className="text-legal-charcoal/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Core Legal Services */}
      <Section id="services">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-legal-navy mb-4">Core Legal Document Services</h2>
            <p className="text-lg text-legal-charcoal/60 leading-relaxed">
              Every document matters. We ensure your filings are meticulous, consistent, and ready for the court's review.
            </p>
          </div>
          <Link to="/legal-services" className="text-legal-navy font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Explore All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FileText className="w-10 h-10" />,
              title: "Litigation Formatting",
              desc: "Motions, pleadings, briefs, and captions. Meticulous pagination and court-ready styling."
            },
            {
              icon: <Table className="w-10 h-10" />,
              title: "TOCs / TOAs",
              desc: "Comprehensive Table of Contents and Table of Authorities preparation and formatting."
            },
            {
              icon: <Layers className="w-10 h-10" />,
              title: "Exhibit Preparation",
              desc: "Organization, labeling, bookmarking, and structuring for digital or physical filing."
            },
            {
              icon: <FileCheck className="w-10 h-10" />,
              title: "PDF Cleanup",
              desc: "OCR, redactions, Bates numbering, and final filing optimization for e-filing systems."
            },
            {
              icon: <Clock className="w-10 h-10" />,
              title: "Overflow Support",
              desc: "Immediate on-call document support during trial prep or heavy filing deadlines."
            }
          ].map((service, idx) => (
            <div key={idx} className="group p-10 border-r border-b border-legal-border hover:bg-legal-navy hover:text-white transition-all duration-500 flex flex-col items-start gap-8">
              <div className="text-legal-navy group-hover:text-white transition-colors">{service.icon}</div>
              <h3 className="text-2xl font-bold group-hover:text-white">{service.title}</h3>
              <p className="opacity-70 leading-relaxed group-hover:text-white/80">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Attorneys Work With Me */}
      <Section variant="dark" id="why-us">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-white/60 font-bold uppercase tracking-widest text-xs mb-4 block">Our Advantage</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Why Law Firms Trust Imperial Document Services</h2>
            <div className="space-y-8">
               {[
                 { title: "AmLaw 100 Excellence", desc: "Experience in elite legal environments where documentation is held to the highest global standards." },
                 { title: "Relentless Accuracy", desc: "A fundamental understanding that a single error can compromise a filing. We audit every page." },
                 { title: "Absolute Confidentiality", desc: "Rigorous data security and non-disclosure standards for sensitive litigation materials." },
                 { title: "Scalable Speed", desc: "The flexibility to handle urgent rush requests during high-pressure litigation cycles." }
               ].map((benefit, idx) => (
                 <div key={idx} className="flex gap-6">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                     <CheckCircle2 className="w-6 h-6 text-white" />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold mb-2 font-sans">{benefit.title}</h4>
                     <p className="text-white/60 leading-relaxed">{benefit.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000" 
                alt="Law Library" 
                className="w-full h-[600px] object-cover opacity-60"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-legal-green flex flex-col items-center justify-center text-center p-6 border-8 border-legal-navy shadow-2xl">
               <span className="text-5xl font-bold text-white">100%</span>
               <span className="text-[10px] uppercase font-bold tracking-widest text-white/80 mt-2">Accuracy Guarantee</span>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section variant="muted" id="how-it-works">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-legal-navy mb-4">A Seamless Workflow</h2>
          <p className="text-lg text-legal-charcoal/60">From intake to delivery, we prioritize efficiency and security.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-legal-navy/10 z-0" />
          
          {[
            { step: "01", title: "Submit", desc: "Send your documents, scope, and deadline via secure portal." },
            { step: "02", title: "Quote", desc: "Receive a transparent quote and turnaround estimate within hours." },
            { step: "03", title: "Review", desc: "Approves scope and schedule to lock in your project." },
            { step: "04", title: "Process", desc: "Documents are meticulously formatted and prepared." },
            { step: "05", title: "Delivery", desc: "Final files are delivered securely, ready for court filing." }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-legal-border flex items-center justify-center mb-6 text-xl font-bold text-legal-navy shadow-sm group-hover:border-legal-navy transition-colors">
                {item.step}
              </div>
              <h4 className="text-lg font-bold text-legal-navy mb-3">{item.title}</h4>
              <p className="text-sm text-legal-charcoal/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center italic text-sm text-legal-charcoal/40">
           Note: Scope changes or additional requests may require a revised quote.
        </div>
      </Section>

      {/* Pricing Section Teaser */}
      <Section id="pricing">
        <div className="max-w-4xl mx-auto bg-white p-12 lg:p-20 rounded-3xl border border-legal-border shadow-sm text-center">
          <h2 className="text-4xl font-bold text-legal-navy mb-6">Investment in Professionalism</h2>
          <p className="text-lg text-legal-charcoal/70 mb-12">
            Pricing is based on document complexity, scope, and turnaround time. Each project is customized to your specific litigation needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
            {[
              "Litigation formatting: from $100+",
              "TOCs / TOAs: from $95+",
              "Exhibit preparation: from $100+",
              "PDF cleanup & filing prep: from $75+"
            ].map((p, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-legal-offwhite rounded-xl border border-legal-border">
                <CheckCircle2 className="w-5 h-5 text-legal-navy" />
                <span className="font-medium text-legal-charcoal">{p}</span>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex bg-legal-navy text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-legal-charcoal transition-all shadow-md"
          >
            Request a Custom Quote
          </Link>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-legal-navy py-24 px-6 text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <Logo variant="white" className="w-96 h-96 absolute -bottom-20 -left-20 rotate-12 opacity-20" />
           <Logo variant="white" className="w-96 h-96 absolute -top-20 -right-20 -rotate-12 opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Professionalize Your Court Filings?</h2>
          <p className="text-xl text-white/60 mb-12">
            Focus on your legal strategy. We'll handle the document complexity.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-white text-legal-navy px-12 py-5 rounded-full text-xl font-bold hover:bg-legal-muted transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
