/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Section from "../components/Section";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  const lastUpdated = "May 19, 2026";

  return (
    <div className="pt-20">
      <SEO 
        title="Privacy Policy"
        description="Our commitment to protecting your privacy and the confidentiality of your litigation documents."
      />
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-legal-navy mb-8">Privacy Policy</h1>
          <p className="text-legal-charcoal/60 mb-12">Last Updated: {lastUpdated}</p>

          <div className="prose prose-legal max-w-none space-y-8 text-legal-charcoal/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">1. Introduction</h2>
              <p>
                Imperial Document Services ("we," "us," or "our") is committed to protecting the privacy and confidentiality of the information entrusted to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">2. Confidentiality of Legal Documents</h2>
              <p>
                As a specialized litigation support provider, we understand the sensitive nature of legal documentation. All client documents provided for formatting, exhibit preparation, or other services are handled with the highest level of professional confidentiality. We do not review the legal substance of documents except as necessary to perform the requested formatting and organization services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">3. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you request a quote, contact us, or engage our services. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Name and contact information (email, phone number, firm name).</li>
                <li>Case-related documentation and instructions.</li>
                <li>Payment and billing information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">4. How We Use Your Information</h2>
              <p>
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide, maintain, and improve our litigation support services.</li>
                <li>Generate accurate quotes and turnaround estimates.</li>
                <li>Communicate with you regarding your projects.</li>
                <li>Process payments and maintain professional records.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">5. Data Security</h2>
              <p>
                We implement robust security measures designed to protect your information from unauthorized access, loss, or disclosure. This includes encrypted file transfers and secure local storage protocols consistent with professional legal support standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">6. Third-Party Disclosures</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information or client documentation to outside parties, except as required by law or to trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data handling practices, please contact us at <strong>privacy@imperialdocs.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
}
