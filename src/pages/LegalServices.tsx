/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Section from "../components/Section";
import SEO from "../components/SEO";
import { FileText, Table, Layers, FileCheck, Clock, Archive, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function LegalServices() {
  const services = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Litigation Document Formatting",
      desc: "Motions, pleadings, briefs, captions, spacing, pagination, and court-ready formatting. We ensure strict adherence to local and federal rules of procedure.",
      features: ["Local Rule Compliance", "Pagination & Numbering", "Caption Formatting", "Meticulous Spacing"]
    },
    {
      icon: <Table className="w-12 h-12" />,
      title: "TOCs / TOAs",
      desc: "Comprehensive Table of Contents and Table of Authorities preparation, formatting, and cleanup. Reliable citation tracking and linking.",
      features: ["Citation Verification", "Hierarchical Organization", "Automated Linking", "Professional Layout"]
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Exhibit Preparation",
      desc: "Exhibit organization, labeling, bookmarking, PDF structuring, and filing-ready packets. We turn disorganized stacks into structured legal assets.",
      features: ["Index Generation", "Electronic Bookmarking", "Consistent Labeling", "Packet Structuring"]
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "PDF Cleanup & Filing Prep",
      desc: "OCR, redactions, Bates numbering, file optimization, bookmarks, and final filing review to ensure smooth e-filing.",
      features: ["Searchable OCR", "Secure Redaction", "Bates Numbering", "Size Optimization"]
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Overflow Litigation Support",
      desc: "Flexible support for firms during busy litigation periods, rush deadlines, or staff overflow. On-demand expertise when you need it most.",
      features: ["Rush Turnaround", "Scalable Capacity", "Deadline Focus", "Flexible Budgeting"]
    },
    {
      icon: <Archive className="w-12 h-12" />,
      title: "Trial Prep Support",
      desc: "Preparation of trial binders, witness lists, and coordinate evidentiary materials for both digital and physical trials.",
      features: ["Binder Organization", "Witness Folders", "Exhibit Tracking", "Courtroom Ready"]
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Specialized Legal Document Services"
        description="Comprehensive litigation support: motion formatting, Table of Authorities preparation, exhibit organization, and PDF remediation for law firms."
        keywords="legal services, document formatting, litigation documents, TOA prep, exhibit labeling, PDF cleanup"
      />
      <section className="bg-legal-navy text-white pt-24 pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Professional Legal Support</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Eliminate document bottlenecks and ensure every court filing meets the highest professional standards of accuracy and formatting.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Zap className="w-full h-full text-white/5 absolute -bottom-1/2 left-0" />
        </div>
      </section>

      <Section className="-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-12 rounded-3xl border border-legal-border shadow-sm hover:shadow-xl transition-all flex flex-col gap-8">
              <div className="text-legal-navy">{service.icon}</div>
              <h2 className="text-3xl font-bold text-legal-navy">{service.title}</h2>
              <p className="text-lg text-legal-charcoal/70 leading-relaxed">{service.desc}</p>
              <div className="grid grid-cols-2 gap-y-3">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-legal-charcoal/60">
                    <ShieldCheck className="w-4 h-4 text-legal-green" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-4 text-legal-navy font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                Get more info <Zap className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-legal-navy mb-8">Ready to Professionalize Your Documents?</h2>
          <p className="text-xl text-legal-charcoal/60 mb-12">
            Each project is evaluated based on document length, complexity, and turnaround requirements. Contact us today for a custom quote.
          </p>
          <Link
            to="/contact"
            className="bg-legal-navy text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-legal-charcoal transition-all shadow-xl"
          >
            Request a Custom Quote
          </Link>
        </div>
      </Section>
    </div>
  );
}
