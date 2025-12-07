import { memo, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const PrivacyPolicy = memo(() => {
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
          <section className="relative w-full py-6 sm:py-8" aria-labelledby="privacy-heading">
            <div className="mx-auto max-w-4xl">
              <Card variant="glass" size="large">
                <div className="text-center space-y-4">
                  <h1
                    id="privacy-heading"
                    className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
                  >
                    <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      Privacy Policy
                    </span>
                  </h1>
                  <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                    Last updated: {lastUpdated}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto">
                    This Privacy Policy explains how Van Borg Limited collects, uses and protects your
                    personal data when you visit our website or work with us. We process personal data in
                    accordance with the UK GDPR and applicable data protection laws.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Content */}
          <section className="relative w-full">
            <div className="mx-auto max-w-4xl space-y-6">
              {/* 1. Information We Collect */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">1. Information We Collect</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      We collect information that you voluntarily provide to us as well as data collected
                      automatically when you interact with our website or services.
                    </p>

                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">Information you provide directly:</h3>
                    <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                      <li>Contact details (name, email, phone number)</li>
                      <li>Business information (company name, services, location)</li>
                      <li>Messages sent via forms, email, or live chat</li>
                      <li>Information submitted during consultations or onboarding</li>
                    </ul>

                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 pt-2">
                      Information collected automatically:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                      <li>IP address, browser type, device type and operating system</li>
                      <li>Usage data such as pages visited, time on page and referring URLs</li>
                      <li>Cookies and similar technologies used for analytics, security and performance</li>
                    </ul>

                    <p>
                      We only collect information necessary to provide our services, improve performance and
                      ensure a secure user experience.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 2. How We Use Your Information */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">2. How We Use Your Information</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      Your information is used to operate our business and deliver a high-quality service.
                      This includes:
                    </p>

                    <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                      <li>
                        Providing, managing and improving our Local SEO, Google Ads, website and AI services
                      </li>
                      <li>Responding to enquiries and offering tailored recommendations</li>
                      <li>Managing consultations, onboarding and ongoing service delivery</li>
                      <li>Sending service updates, administrative messages and invoices</li>
                      <li>Sending marketing communications, only where consent has been given</li>
                      <li>Analysing website usage and performance to improve user experience</li>
                      <li>Protecting against fraudulent, abusive or unauthorised activity</li>
                    </ul>

                    <p>
                      We process personal data in accordance with the UK GDPR and only for legitimate
                      business purposes.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 3. Information Sharing & Disclosure */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    3. Information Sharing &amp; Disclosure
                  </h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      We do not sell or rent your personal data. We only share information where necessary
                      to operate our business or where legally required.
                    </p>

                    <p>We may share information with:</p>
                    <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                      <li>
                        Trusted third-party vendors (hosting, email, analytics, payment processing and
                        similar services)
                      </li>
                      <li>
                        Service providers who support our operations under strict confidentiality
                        obligations
                      </li>
                      <li>Government authorities, where required by law or legal process</li>
                      <li>Professional advisors (legal, accounting) under confidentiality agreements</li>
                    </ul>

                    <p>
                      Any data shared with service providers is processed in accordance with the UK GDPR and
                      may only be used for the specific tasks for which it was provided.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 4. Data Security */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">4. Data Security</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      We use industry-standard technical and organisational measures to protect your
                      information, including encryption where appropriate, secure servers, access controls
                      and regular security reviews.
                    </p>

                    <p>
                      While we follow best practices, no method of transmission over the internet or method
                      of electronic storage can be guaranteed 100% secure. We continuously monitor our
                      systems to minimise risks and respond quickly to potential issues.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 5. Your Rights Under UK GDPR */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">5. Your Rights Under UK GDPR</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>As a UK or EU user, you have the following rights in relation to your data:</p>

                    <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                      <li>Right to access your personal data</li>
                      <li>Right to rectify inaccurate or incomplete information</li>
                      <li>Right to request deletion (“right to be forgotten”)</li>
                      <li>Right to restrict or object to certain processing activities</li>
                      <li>Right to data portability</li>
                      <li>Right to withdraw consent at any time, where processing is based on consent</li>
                      <li>
                        Right to lodge a complaint with the UK Information Commissioner’s Office (ICO)
                      </li>
                    </ul>

                    <p>
                      To exercise any of these rights, please contact us using the details below. We aim to
                      respond to all valid requests within 30 days.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 6. Contact Us */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">6. Contact Us</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      If you have any questions about this Privacy Policy or how we handle your personal
                      data, please contact:
                    </p>
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

                    <p>
                      For formal complaints regarding data protection, you may also contact the{' '}
                      <strong>Information Commissioner&apos;s Office (ICO)</strong> at{' '}
                      <a
                        href="https://ico.org.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-600 hover:text-sky-700 underline"
                      >
                        https://ico.org.uk
                      </a>
                      .
                    </p>
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

PrivacyPolicy.displayName = 'PrivacyPolicy';

export default PrivacyPolicy;
