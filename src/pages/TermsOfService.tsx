/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Section from "../components/Section";
import SEO from "../components/SEO";

export default function TermsOfService() {
  const lastUpdated = "May 19, 2026";

  return (
    <div className="pt-20">
      <SEO 
        title="Terms of Service"
        description="The terms and conditions governing the professional litigation support services provided by Imperial Document Services."
      />
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-legal-navy mb-8">Terms of Service</h1>
          <p className="text-legal-charcoal/60 mb-12">Last Updated: {lastUpdated}</p>

          <div className="prose prose-legal max-w-none space-y-8 text-legal-charcoal/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing our website or engaging the services of Imperial Document Services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">2. Description of Services</h2>
              <p>
                Imperial Document Services provides specialized litigation document support, including but not limited to document formatting, Table of Contents (TOC) and Table of Authorities (TOA) preparation, exhibit organization, and PDF remediation.
              </p>
              <p className="mt-4 font-bold border-l-4 border-legal-navy pl-4 bg-legal-muted py-2">
                Important: We are not a law firm. We do not provide legal advice, legal opinions, or legal representation. Our services are administrative and technical in nature, designed to support licensed attorneys and their legal teams.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">3. Professional Responsibility</h2>
              <p>
                Attorneys engaging our services retain full professional responsibility for the accuracy, content, and timely filing of all documents. While we strive for 100% accuracy in formatting and organization, the final review and approval of all work product remains the responsibility of the engaging attorney.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">4. Quotes and Engagement</h2>
              <p>
                Projects are initiated through a formal quote process. Engagement begins only after the client approves the scope of work, turnaround time, and pricing in writing. Scope changes or additional requests made after the project has started may require a revised quote and updated timeline.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">5. Deadlines and Delivery</h2>
              <p>
                We prioritize meeting all agreed-upon deadlines. However, delivery is contingent upon the timely receipt of all necessary materials and instructions from the client. We are not responsible for delays caused by incomplete intake or technical issues beyond our reasonable control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">6. Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding all client materials. We are prepared to execute standard non-disclosure agreements (NDAs) as required by our clients' professional obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall Imperial Document Services be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, whether in an action in contract or tort, arising out of or in any way connected with the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">8. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Imperial Document Services operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-legal-navy mb-4">9. Contact</h2>
              <p>
                For questions regarding these Terms of Service, please contact <strong>legal@imperialdocs.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
}
