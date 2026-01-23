import { memo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const GDPR = memo(() => {
  const lastUpdated = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 space-y-8">
          {/* Hero Section */}
          <section className="relative w-full py-8" aria-labelledby="gdpr-heading">
            <Card variant="glass" size="large">
              <div className="text-center space-y-4">
                <h1
                  id="gdpr-heading"
                  className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
                >
                  <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    GDPR Compliance
                  </span>
                </h1>
                <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                  General Data Protection Regulation (GDPR) Information
                </p>
                <p className="text-sm text-gray-600">
                  Last updated: {lastUpdated}
                </p>
              </div>
            </Card>
          </section>

          {/* Content */}
          <section className="relative w-full">
            <div className="space-y-6">
              {/* 1. What is GDPR */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">1. What is GDPR?</h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      The General Data Protection Regulation (GDPR) is a comprehensive data
                      protection law that came into effect on 25 May 2018. It applies to
                      organisations that process personal data of individuals in the UK and EU,
                      regardless of where the organisation is located.
                    </p>
                    <p>
                      At Van Borg Limited, we are committed to protecting your privacy and
                      ensuring that all personal data is handled in accordance with GDPR and UK
                      data protection law.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 2. Your Rights */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">2. Your Rights Under GDPR</h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      As an individual, you have several rights regarding your personal data. These
                      include:
                    </p>

                    <div className="space-y-3">
                      <div className="bg-sky-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Right of Access</h3>
                        <p>
                          You can request confirmation that we process your personal data and ask
                          for a copy of the information we hold about you.
                        </p>
                      </div>

                      <div className="bg-emerald-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Right to Rectification</h3>
                        <p>
                          You can ask us to correct or complete any inaccurate or incomplete
                          personal data we hold.
                        </p>
                      </div>

                      <div className="bg-violet-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Right to Erasure</h3>
                        <p>
                          In certain circumstances, you can request that we delete your personal
                          data (the “right to be forgotten”).
                        </p>
                      </div>

                      <div className="bg-amber-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Right to Restrict Processing
                        </h3>
                        <p>
                          You can ask us to limit how we use your personal data in specific
                          situations.
                        </p>
                      </div>

                      <div className="bg-rose-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Right to Data Portability</h3>
                        <p>
                          You can request that we provide your data in a structured, commonly used,
                          machine-readable format, or transfer it to another controller where
                          technically feasible.
                        </p>
                      </div>

                      <div className="bg-indigo-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Right to Object</h3>
                        <p>
                          You can object to certain types of processing, including direct marketing
                          and processing based on legitimate interests.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* 3. Lawful Basis */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">3. Lawful Basis for Processing</h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>We process personal data under one or more of the following lawful bases:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Consent:</strong> Where you have given clear consent for us to
                        process your personal data for a specific purpose.
                      </li>
                      <li>
                        <strong>Contract:</strong> Where processing is necessary to perform a
                        contract with you or to take steps at your request before entering into a
                        contract.
                      </li>
                      <li>
                        <strong>Legal obligation:</strong> Where we must process data to comply
                        with a legal or regulatory requirement.
                      </li>
                      <li>
                        <strong>Legitimate interests:</strong> Where processing is necessary for
                        our legitimate business interests and your interests and fundamental rights
                        do not override those interests.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* 4. Data Retention */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">4. Data Retention</h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      We retain personal data only for as long as necessary to fulfil the purposes
                      for which it was collected or to meet legal, accounting or reporting
                      requirements.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Client and project data:</strong> Retained for the duration of the
                        business relationship plus up to 7 years.
                      </li>
                      <li>
                        <strong>Marketing contacts:</strong> Retained until consent is withdrawn or
                        after a period of sustained inactivity.
                      </li>
                      <li>
                        <strong>Website analytics data:</strong> Retained in line with our
                        analytics tools (typically up to 26 months).
                      </li>
                      <li>
                        <strong>Legal records:</strong> Retained as required under applicable law.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* 5. Data Security */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">5. Data Security Measures</h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      We implement appropriate technical and organisational measures to protect
                      personal data against unauthorised access, loss, alteration or disclosure,
                      including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Encryption of data in transit where appropriate</li>
                      <li>Secure hosting and regular security updates</li>
                      <li>Role-based access controls and authentication</li>
                      <li>Staff awareness and training on data protection</li>
                      <li>Documented incident response and escalation procedures</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* 6. Data Breach Notification */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">6. Data Breach Notification</h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      In the unlikely event of a personal data breach that is likely to result in a
                      risk to your rights and freedoms, we will:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Notify the relevant supervisory authority (such as the ICO) without undue
                        delay and, where feasible, within 72 hours.
                      </li>
                      <li>
                        Inform affected individuals without undue delay where there is a high risk
                        to their rights and freedoms.
                      </li>
                      <li>
                        Provide clear information about the nature of the breach and the steps
                        taken to address it.
                      </li>
                      <li>
                        Review and strengthen our controls to reduce the risk of recurrence.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* 7. Exercising Your Rights */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">7. Exercising Your Rights</h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      To exercise any of your GDPR rights or to ask a question about how we handle
                      personal data, please contact us using the details below. We aim to respond
                      to all valid requests within one month.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-1">
                      <p>
                        <strong>Company:</strong> Van Borg Limited
                      </p>
                      <p>
                        <strong>Data Protection Contact:</strong> info@vanborglimited.com
                      </p>
                      <p>
                        <strong>Phone:</strong> +44 7846 885154
                      </p>
                      <p>
<<<<<<< HEAD
                        <strong>Address:</strong> 71-75 Shelton Street, Covent Garden, London WC2H
                        9JQ, United Kingdom
=======
                        <strong>{t.gdpr.sections.exercisingRights.address}:</strong> Kieler Bocht 104, Veendam, 9642 CE, Nederland
>>>>>>> 43a468f (Configure Netlify deployment settings)
                      </p>
                      <p>
                        <strong>Company No:</strong> 16172283
                      </p>
                    </div>
                    <p className="text-xs text-gray-600">
                      You also have the right to lodge a complaint with the{' '}
                      <strong>Information Commissioner&apos;s Office (ICO)</strong> if you believe
                      your data has not been handled in accordance with data protection law.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 8. Updates to This Notice */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">8. Updates to This Notice</h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      We may update this GDPR notice from time to time to reflect changes in our
                      practices, technology or legal requirements. The latest version will always
                      be available on this page with the updated date shown at the top.
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

GDPR.displayName = 'GDPR';

export default GDPR;
