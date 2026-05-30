/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Section from "../components/Section";
import SEO from "../components/SEO";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Mastering the Digital Docket: The Ultimate E-Filing Guide for Paralegals",
      excerpt: "Navigating e-filing requirements can be complex. To help, we've created a straightforward guide covering essential technical, formatting, and procedural standards.",
      category: "Guide",
      date: "May 30, 2026",
      author: "Legal Ops Team",
      slug: "/blog/paralegal-efiling-guide"
    },
    {
      title: "Common Formatting Issues That Delay Filings",
      excerpt: "Technical errors in document formatting can lead to court rejections. Learn how to avoid these common pitfalls.",
      category: "Process",
      date: "May 10, 2026",
      author: "Legal Ops Team",
      slug: "/blog/formatting-issues-delay-filings"
    },
    {
      title: "What Makes a Motion Court-Ready?",
      excerpt: "Beyond legal strategy, the technical precision of your filing determines its acceptance. We break down the court-ready standard.",
      category: "Standards",
      date: "May 19, 2026",
      author: "Legal Ops Team",
      slug: "/blog/what-makes-a-motion-court-ready"
    },
    {
      title: "Filing Prep Checklist for Litigation Teams",
      excerpt: "A comprehensive 10-point roadmap for the final 48 hours before a major court deadline. Ensure nothing is missed.",
      category: "Guide",
      date: "May 19, 2026",
      author: "Legal Ops Team",
      slug: "/blog/filing-prep-checklist-for-litigation-teams"
    },
    {
      title: "Why Exhibit Organization Matters in Complex Litigation",
      excerpt: "Professional exhibit preparation is more than just an administrative task—it is a critical component of professional advocacy.",
      category: "Strategy",
      date: "May 19, 2026",
      author: "Legal Ops Team",
      slug: "/blog/why-exhibit-organization-matters"
    },
    {
      title: "TOC/TOA Cleanup Basics",
      excerpt: "Mastering the technical pillar of legal briefing. A deep dive into citation hygiene and database organization for court tables.",
      category: "Technical",
      date: "May 19, 2026",
      author: "Legal Ops Team",
      slug: "/blog/toc-toa-cleanup-basics"
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Legal Insights & Document Standards"
        description="Expert advice on court-ready formatting, filing prep checklists, and litigation support strategies for legal professionals."
        keywords="legal blog, document standards, filing checklists, motion criteria, litigation insights"
      />
      <Section>
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-legal-navy mb-8 leading-tight">Legal Document Insights</h1>
          <p className="text-xl text-legal-charcoal/60 leading-relaxed">
            Resources for attorneys and legal teams focused on efficiency, accuracy, and court-ready documentation standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <Link 
              key={i} 
              to={post.slug || "#"} 
              className="block flex flex-col h-full"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-white p-10 rounded-3xl border border-legal-border shadow-sm hover:shadow-2xl transition-all flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                   <span className="bg-legal-muted text-legal-navy px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                     {post.category}
                   </span>
                   <div className="flex items-center gap-2 text-xs text-legal-charcoal/40 font-medium">
                     <Calendar className="w-3 h-3" />
                     {post.date}
                   </div>
                </div>
                <h2 className="text-3xl font-bold text-legal-navy mb-6 group-hover:text-legal-green transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-lg text-legal-charcoal/60 mb-8 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-8 border-t border-legal-border">
                  <div className="flex items-center gap-2 text-xs font-bold text-legal-navy">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="text-legal-navy font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Insights</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Get professional document standards and litigation support tips delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Attorney Email Address" 
              className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all"
            />
            <button className="px-10 py-4 bg-white text-legal-navy font-bold rounded-full hover:bg-legal-muted transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
