import { memo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Cookies = memo(() => {
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
          <section className="relative w-full py-8" aria-labelledby="cookies-heading">
            <Card variant="glass" size="large">
              <div className="text-center space-y-4">
                <h1
                  id="cookies-heading"
                  className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
                >
                  <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Cookie Policy
                  </span>
                </h1>
                <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                  This Cookie Policy explains how Van Borg Limited uses cookies and similar
                  technologies on our website.
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
              {/* 1. Introduction */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    1. Introduction
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      This Cookie Policy describes how and why Van Borg Limited (&quot;we&quot;,
                      &quot;us&quot;, &quot;our&quot;) uses cookies and similar technologies when
                      you visit <strong>vanborglimited.com</strong>.
                    </p>
                    <p>
                      This policy should be read together with our{' '}
                      <a
                        href="/privacy"
                        className="text-sky-600 hover:text-sky-700 underline"
                      >
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a
                        href="/gdpr"
                        className="text-sky-600 hover:text-sky-700 underline"
                      >
                        GDPR Notice
                      </a>
                      , which explain how we handle personal data more generally.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 2. What are cookies */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    2. What Are Cookies?
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      Cookies are small text files that are stored on your device (computer,
                      tablet or mobile) when you visit a website. They allow the site to recognise
                      your device, remember your preferences and help us understand how the website
                      is being used.
                    </p>
                    <p>
                      Some cookies are necessary for the site to function, while others help us
                      improve performance, tailor content or measure the effectiveness of our
                      marketing.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 3. Types of cookies */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    3. Types of Cookies We Use
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      We group cookies we use on this website into the categories below.
                      Specific cookies and durations may vary as we update tooling and tracking.
                    </p>

                    <div className="space-y-3">
                      <div className="bg-sky-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-1">Essential Cookies</h3>
                        <p>
                          These cookies are required for the website to function correctly. They
                          enable core features such as page navigation, security and basic
                          accessibility.
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                          <strong>Example usage:</strong> remembering cookie choices, load
                          balancing, session management.
                        </p>
                      </div>

                      <div className="bg-emerald-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-1">Analytics Cookies</h3>
                        <p>
                          These cookies help us understand how visitors use our website, which
                          pages are most popular and where we can improve. Data is typically
                          aggregated and anonymised.
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                          <strong>Example usage:</strong> Google Analytics 4 page views, events and
                          performance metrics.
                        </p>
                      </div>

                      <div className="bg-violet-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-1">Marketing &amp; Performance Cookies</h3>
                        <p>
                          These cookies may be used to measure the performance of our campaigns or
                          to serve more relevant ads based on your interests and interactions with
                          our content.
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                          <strong>Example usage:</strong> Google Ads conversions, remarketing tags.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* 4. Third-party cookies */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    4. Third-Party Cookies &amp; Tools
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      We use trusted third-party services to help us deliver, analyse and improve
                      our website and marketing. These providers may set their own cookies when
                      you interact with our site:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Google Analytics / Google Tag Manager:</strong> For usage analytics
                        and performance measurement.
                      </li>
                      <li>
                        <strong>Google Ads:</strong> For tracking conversions and optimising
                        advertising campaigns.
                      </li>
                      <li>
                        <strong>Calendly:</strong> For booking calls and managing appointment
                        scheduling.
                      </li>
                      <li>
                        <strong>Embedded content:</strong> From platforms such as Google Maps or
                        other third parties used for UX.
                      </li>
                    </ul>
                    <p>
                      These third parties have their own privacy and cookie policies. We recommend
                      reviewing them directly for more detail.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 5. Managing cookies */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    5. Cookie Consent &amp; Preferences
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      When you first visit our website, you may see a cookie banner or notice
                      explaining that we use cookies and providing options to accept or manage
                      them.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <h3 className="font-semibold text-gray-900 mb-1">Browser Settings</h3>
                      <p>
                        Most web browsers allow you to control cookies through their settings.
                        Typically, you can:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                        <li>Block all cookies or only third-party cookies</li>
                        <li>Delete existing cookies from your device</li>
                        <li>Set preferences for specific websites</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <h3 className="font-semibold text-gray-900 mb-1">On-Site Controls</h3>
                      <p>
                        Where implemented, you can revisit your cookie choices via the cookie
                        banner or settings link in the footer to adjust non-essential cookies at
                        any time.
                      </p>
                    </div>

                    <p className="text-xs text-gray-600">
                      Note: Disabling some cookies (especially essential or functional cookies)
                      may impact how the website works.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 6. Impact of disabling cookies */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    6. Impact of Disabling Cookies
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      If you choose to disable or block cookies, some parts of our website may not
                      function as intended. For example:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You may need to re-enter preferences on each visit.</li>
                      <li>Some interactive features (e.g. booking widgets) may not work properly.</li>
                      <li>We may be unable to remember your language or region settings.</li>
                      <li>
                        Analytics and performance data will be limited, which can reduce our
                        ability to improve the site.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* 7. Updates */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    7. Updates to This Cookie Policy
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      We may update this Cookie Policy from time to time to reflect changes in our
                      technology, legal requirements or the cookies we use. The latest version will
                      always be available on this page with the updated date shown at the top.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 8. Contact */}
              <Card variant="glass" size="large">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    8. Contact Us
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700">
                    <p>
                      If you have any questions about our use of cookies or this policy, contact:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-1">
                      <p>
                        <strong>Company:</strong> Van Borg Limited
                      </p>
                      <p>
                        <strong>Email:</strong> info@vanborglimited.com
                      </p>
                      <p>
                        <strong>Address:</strong> 71-75 Shelton Street, Covent Garden, London WC2H
                        9JQ, United Kingdom
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

Cookies.displayName = 'Cookies';

export default Cookies;
