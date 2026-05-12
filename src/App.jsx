function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <div className="brand-mark">V</div>
            <div>
              <p className="brand-name">VultraVPN</p>
              <p className="brand-tag">Fast. Private. Everywhere.</p>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#download">Download</a>
            <a href="#subscribe">Subscribe</a>
            <a href="#how-it-works">How it Works</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <img className="hero-logo" src="/appicon.png" alt="VultraVPN app icon" />
              <span className="eyebrow">Launch Securely</span>
              <h1>VultraVPN delivers unlimited internet access.</h1>
              <p>
                Enjoy unlimited connectivity with VultraVPN. Our free version gives you internet access even when you need it most, and premium membership unlocks faster service and dedicated support.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#download">Download Now</a>
                <a className="button button-secondary" href="#features">See Features</a>
              </div>
              <div className="hero-trust">
                <div>
                  <strong>99.9%</strong>
                  <span>Uptime</span>
                </div>
                <div>
                  <strong>256-bit</strong>
                  <span>Encryption</span>
                </div>
                <div>
                  <strong>Global</strong>
                  <span>Servers</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">
                <div className="visual-device">
                  <div className="device-top"></div>
                  <div className="device-screen">
                    <div className="screen-header">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <div className="screen-body">
                      <h2>Protected</h2>
                      <p>Secure connection established</p>
                      <div className="screen-status">VPN Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section features-section">
          <div className="container">
            <div className="section-header">
              <span>Why VultraVPN?</span>
              <h2>Built for speed, privacy, and ease.</h2>
            </div>
            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-icon">🌐</div>
                <h3>Unlimited Internet</h3>
                <p>VultraVPN provides reliable access to unlimited internet, keeping you connected whenever you need it.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Real Internet Experience</h3>
                <p>Use your phone like normal internet — the VPN routes traffic so it works even without data.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3>Global Access</h3>
                <p>Connect to servers around the world and bypass geo-restrictions with one click.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="download" className="section download-section">
          <div className="container download-inner">
            <div>
              <span>Download VultraVPN</span>
              <h2>Secure access for every Android device.</h2>
              <p>Choose the correct build for your Android architecture and start using the free version right away.</p>
            </div>
            <div className="download-cards">
              <a className="download-card" href="/vultravpn110-v8a.apk">
                <span className="download-label">Android arm-v8</span>
                <strong>Download</strong>
              </a>
              <a className="download-card" href="/vultravpn110-v7a.apk">
                <span className="download-label">Android arm-v7</span>
                <strong>Download</strong>
              </a>
            </div>
          </div>
        </section>

        <section id="subscribe" className="section subscribe-section">
          <div className="container">
            <div className="section-header">
              <span>Subscription</span>
              <h2>Choose the plan that matches your needs.</h2>
            </div>
            <p className="subscribe-intro">Start with the free version for basic unlimited access, or upgrade to Premium for faster servers, longer sessions, and priority support.</p>
            <div className="subscribe-grid">
              <div className="subscribe-card">
                <div className="plan-label">Free</div>
                <h3>Free Version</h3>
                <p>Instant access without a subscription. Download the arm-v8 or arm-v7 APK and connect quickly.</p>
                <ul>
                  <li>Unlimited internet access</li>
                  <li>Standard speed servers</li>
                  <li>Connection renews every hour</li>
                </ul>
                <p className="subscribe-note">Free users have limited access to premium servers and sessions will reconnect hourly.</p>
              </div>
              <div className="subscribe-card subscribe-card-premium">
                <div className="plan-badge">Best Value</div>
                <div className="plan-label plan-label-premium">Premium</div>
                <h3>Premium Version</h3>
                <p>Unlock the fastest service with premium servers, extended session stability, and direct support.</p>
                <div className="premium-price">3,500 UGX / month</div>
                <ul>
                  <li>Fast premium servers</li>
                  <li>Longer, stable sessions</li>
                  <li>Priority support on Telegram and WhatsApp</li>
                  <li>Discounted plans for 3 months and 1 year</li>
                </ul>
                <div className="pricing-highlights">
                  <span>3 months: 80% discount</span>
                  <span>1 year: 69% discount</span>
                </div>
                <div className="contact-buttons">
                  <a className="button button-primary" href="https://t.me/Vultravpn" target="_blank" rel="noreferrer">Contact on Telegram</a>
                  <a className="button button-secondary" href="https://chat.whatsapp.com/JvwPFnD1uQm2kSwyJaplTy" target="_blank" rel="noreferrer">Contact on WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section how-section">
          <div className="container">
            <div className="section-header">
              <span>How it works</span>
              <h2>One secure connection in three easy steps.</h2>
            </div>
            <div className="step-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Install</h3>
                <p>Download the app and complete the setup in under a minute.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Connect</h3>
                <p>Pick a server location and activate your secure tunnel instantly.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Browse</h3>
                <p>Enjoy private browsing, streaming, and access from anywhere.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 VultraVPN. Trusted privacy for every connection.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
