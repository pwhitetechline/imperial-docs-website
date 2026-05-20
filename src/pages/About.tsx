/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Section from "../components/Section";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { Award, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      <SEO 
        title="About Our Legal Operations Experience"
        description="Learn about Imperial Document Services and our background in AmLaw 100 environments delivering high-volume, precision litigation support."
        keywords="about imperial document services, litigation support expert, legal ops experience, AmLaw 100 background"
      />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Legal Environment" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-legal-navy text-white p-12 rounded-2xl shadow-2xl max-w-[300px]">
              <p className="text-sm italic font-serif leading-relaxed">
                "Accuracy, consistency, and turnaround time are the pillars of professional legal support."
              </p>
            </div>
          </div>
          
          <div>
            <span className="text-legal-navy font-bold uppercase tracking-widest text-xs mb-4 block">Meet the Specialist</span>
            <h1 className="text-5xl md:text-6xl font-bold text-legal-navy mb-8 leading-tight">Elevating Litigation Support Standards</h1>
            <div className="space-y-6 text-lg text-legal-charcoal/70 leading-relaxed">
              <p>
                My background includes litigation support and AmLaw 100 legal operations environments where accuracy, consistency, and turnaround time are critical. 
              </p>
              <p>
                Imperial Document Services was founded to bring that same level of elite, high-volume document focus to boutique firms, solo practitioners, and overloaded legal teams nationwide.
              </p>
              <p>
                We understand the pressure of trial deadlines and the importance of a meticulously formatted motion. Our goal is to serve as a seamless extension of your firm, providing the specialized document expertise that allows you to focus on your legal strategy.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Briefcase className="w-5 h-5" />, text: "AmLaw 100 Experience" },
                { icon: <Award className="w-5 h-5" />, text: "High-Volume Workflow" },
                { icon: <GraduationCap className="w-5 h-5" />, text: "Litigation Support Focus" },
                { icon: <CheckCircle2 className="w-5 h-5" />, text: "Trial Desk Expertise" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-legal-border shadow-sm">
                  <div className="text-legal-navy">{item.icon}</div>
                  <span className="font-bold text-sm text-legal-navy">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-legal-navy mb-12 text-center">Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { title: "Precision", desc: "No detail is too small. Every spacing, margin, and citation is scrutinized." },
              { title: "Reliability", desc: "A deadline is a contract. We deliver on time, every time." },
              { title: "Discretion", desc: "Confidentiality is at our core. Your data is handled with elite security standards." }
            ].map((p, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold text-legal-navy mb-4">{p.title}</h3>
                <p className="text-legal-charcoal/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="py-24 px-6 border-t border-legal-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-legal-navy mb-8 italic font-serif">
            "We understand litigation documents, deadlines, and court-ready formatting."
          </h2>
          <Link to="/contact" className="text-legal-navy font-bold underline underline-offset-8 hover:text-legal-charcoal transition-colors">
            Collaborate With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
