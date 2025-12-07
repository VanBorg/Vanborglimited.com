import { memo, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const TermsAndPolicies = memo(() => {
  const lastUpdated = useMemo(
    () =>
      new Date().toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 space-y-6 sm:space-y-8">
          {/* Hero Section */}
          <section className="relative w-full py-6 sm:py-8" aria-labelledby="terms-heading">
            <div className="mx-auto max-w-4xl">
              <Card variant="glass" size="large">
                <div className="text-center space-y-4">
                  <h1
                    id="terms-heading"
                    className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
                  >
                    <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      Terms &amp; Conditions
                    </span>
                  </h1>
                  <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                    Last updated: {lastUpdated}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto">
                    These Terms &amp; Conditions govern your use of the services provided by Van Borg
                    Limited. By working with us or using our website, you agree to be bound by these terms.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Content */}
          <section className="relative w-full">
            <div className="mx-auto max-w-4xl space-y-6">
              {/* 1. Acceptance of Terms */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      By accessing our website, booking a consultation, or engaging Van Borg Limited for
                      services, you confirm that you have read, understood and agree to be bound by these
                      Terms &amp; Conditions, together with any written proposal or service agreement issued
                      to you.
                    </p>
                    <p>
                      If you do not agree with these terms, you should not use our website or engage us for
                      services.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 2. Scope of Services */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">2. Scope of Services</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>Van Borg Limited provides digital marketing and automation services, including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                      <li>Local SEO and Google Business Profile optimisation</li>
                      <li>Google Ads strategy, setup, management and optimisation</li>
                      <li>SEO and conversion-focused website design and development</li>
                      <li>AI chatbot design, build and integration</li>
                      <li>Automation workflows (lead handling, follow-up, reporting)</li>
                      <li>Related consultancy, audits and strategic advisory services</li>
                    </ul>
                    <p>
                      The exact scope, deliverables, fees and timelines for each project will be set out in a
                      written proposal, statement of work or service agreement issued to you and agreed in
                      writing (including email) before work begins.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 3. Proposals, Changes & Approvals */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">3. Proposals, Changes &amp; Approvals</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      Any proposal or quotation issued by Van Borg Limited is valid for the period stated on
                      the document (or 30 days if not specified) and is subject to confirmation of scope and
                      timelines.
                    </p>
                    <p>
                      Changes to the agreed scope (for example, additional pages, extra campaigns or new
                      features) may impact fees and timelines. No material changes will be implemented
                      without written confirmation and, where relevant, an updated fee agreement.
                    </p>
                    <p>
                      You are responsible for reviewing and approving key deliverables such as ad copy, landing
                      pages, website content and chatbot flows. Approval (including by email) will be treated
                      as confirmation that the deliverable is ready to go live.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 4. Fees, Payment & Billing */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">4. Fees, Payment &amp; Billing</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>Unless otherwise agreed in writing, our standard commercial terms are:</p>
                    <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                      <li>
                        <strong>Project / setup fees:</strong> A non-refundable deposit is payable upfront,
                        with the balance due on completion or on agreed project milestones.
                      </li>
                      <li>
                        <strong>Retainers and management fees:</strong> Billed monthly in advance and payable
                        on or before the due date stated on the invoice.
                      </li>
                      <li>
                        <strong>Performance or percentage-of-spend fees:</strong> Where applicable, calculated
                        on agreed criteria (for example, a percentage of ad spend).
                      </li>
                      <li>
                        <strong>Ad spend:</strong> Paid directly by you to the platform (e.g. Google Ads) or
                        reimbursed to us if we pay on your behalf.
                      </li>
                    </ul>
                    <p>
                      All fees are quoted in GBP and are exclusive of any applicable taxes unless otherwise
                      stated. Late or non-payment may result in suspension of services and/or interest or
                      late-payment charges as permitted by law.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 5. Client Responsibilities */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">5. Client Responsibilities</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      To enable us to deliver effectively, you agree to provide timely access to the
                      information, approvals and systems we reasonably require, including:
                    </p>

                    <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                      <li>Accurate business information, branding and service details</li>
                      <li>
                        Access to relevant platforms (e.g. Google Business Profile, Google Ads, analytics,
                        website CMS)
                      </li>
                      <li>Prompt review and feedback on deliverables</li>
                      <li>Payment of invoices in line with agreed terms</li>
                    </ul>

                    <p>
                      You are responsible for ensuring that all content, claims and offers related to your
                      business comply with applicable laws and industry regulations. We are not responsible
                      for legal compliance of your underlying products, services or business model.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 6. Performance, Results & Third-Party Platforms */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    6. Performance, Results &amp; Third-Party Platforms
                  </h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      Digital marketing performance depends on many factors, including market conditions,
                      competition, budget levels, your internal sales processes and external platforms such as
                      Google. While we work to maximise results, <strong>no specific ranking, lead volume or
                      revenue level can be guaranteed.</strong>
                    </p>
                    <p>
                      You acknowledge that services may rely on third-party platforms (for example Google,
                      hosting providers, CRM systems and automation tools). We are not responsible for changes
                      made by these platforms, downtime, policy changes or technical issues beyond our direct
                      control, though we will use reasonable efforts to mitigate impact where possible.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 7. Intellectual Property */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">7. Intellectual Property</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      You retain ownership of all pre-existing intellectual property, including your brand,
                      logos, content and data provided to us.
                    </p>
                    <p>
                      Unless otherwise agreed in writing, you are granted a non-exclusive licence to use the
                      deliverables we create for you (such as ad copy, landing pages, chatbot flows and
                      website assets) for your own business purposes, subject to full payment of all fees.
                    </p>
                    <p>
                      Van Borg Limited retains ownership of all underlying frameworks, processes, code
                      libraries, templates and know-how used in delivering the services, and may reuse these
                      in future projects with other clients.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 8. Confidentiality & Data Protection */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">8. Confidentiality &amp; Data Protection</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      Both parties agree to keep confidential any non-public information received from the
                      other party in connection with the services, and to use such information only for the
                      purpose of delivering or receiving those services.
                    </p>
                    <p>
                      We handle personal data in accordance with our{' '}
                      <a
                        href="/privacy"
                        className="text-sky-600 hover:text-sky-700 underline"
                      >
                        Privacy Policy
                      </a>{' '}
                      and the UK GDPR. Where required, a separate Data Processing Agreement (DPA) can be put
                      in place.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 9. Term & Termination */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">9. Term &amp; Termination</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      Unless specified otherwise in a service agreement, either party may terminate an ongoing
                      engagement by giving 30 days&apos; written notice.
                    </p>
                    <p>Upon termination:</p>
                    <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                      <li>All outstanding invoices become immediately due and payable</li>
                      <li>
                        Work completed and time incurred up to the termination date will remain billable
                      </li>
                      <li>
                        We will provide a reasonable export of key data and assets in standard formats, where
                        applicable
                      </li>
                    </ul>
                    <p>
                      We may terminate or suspend services immediately if there is serious breach of these
                      terms, repeated non-payment or use of our work in an unlawful or abusive manner.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 10. Limitation of Liability */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">10. Limitation of Liability</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      To the fullest extent permitted by law, Van Borg Limited shall not be liable for any
                      indirect, incidental, consequential or special loss, including loss of profit, revenue,
                      data or opportunities arising out of or in connection with the services.
                    </p>
                    <p>
                      Our total aggregate liability for any claim arising from a project or ongoing agreement
                      shall not exceed the total fees paid by you to Van Borg Limited for the specific
                      services in the twelve (12) months preceding the event giving rise to the claim.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 11. Changes to These Terms */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">11. Changes to These Terms</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      We may update these Terms &amp; Conditions from time to time to reflect changes in our
                      services, legal requirements or business practices. The latest version will always be
                      available on this page, with the effective date shown at the top.
                    </p>
                    <p>
                      Where changes are material and affect an ongoing agreement, we will notify you by
                      reasonable means (for example, by email).
                    </p>
                  </div>
                </div>
              </Card>

              {/* 12. Governing Law & Jurisdiction */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">12. Governing Law &amp; Jurisdiction</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      These Terms &amp; Conditions, and any dispute or claim arising out of or in connection
                      with them, shall be governed by and construed in accordance with the laws of England and
                      Wales.
                    </p>
                    <p>
                      The courts of England and Wales shall have exclusive jurisdiction to settle any dispute
                      arising from or connected with these terms or the services we provide.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 13. Contact Information */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">13. Contact Information</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>If you have any questions about these Terms &amp; Conditions, please contact:</p>
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-1 text-xs sm:text-sm">
                      <p>
                        <strong>Company:</strong> Van Borg Limited
                      </p>
                      <p>
                        <strong>Email:</strong> info@vanborglimited.com
                      </p>
                      <p>
                        <strong>Phone:</strong> +44 7846 885154
                      </p>
                      <p>
                        <strong>Address:</strong> 71-75 Shelton Street, Covent Garden, London WC2H 9JQ,
                        United Kingdom
                      </p>
                      <p>
                        <strong>Company No:</strong> 16172283
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
});

TermsAndPolicies.displayName = 'TermsAndPolicies';

export default TermsAndPolicies;
