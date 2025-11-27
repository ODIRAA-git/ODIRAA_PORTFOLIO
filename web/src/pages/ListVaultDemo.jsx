import './listvaultdemo.css';
import { Link } from 'react-router-dom';

function ListVaultDemo() {
    return (
        <div className="demo-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <Link to="/" className="back-button">← Back to Portfolio</Link>
                    <h1 className="hero-title">List Vault</h1>
                    <p className="hero-subtitle">A Collaborative Family Shopping List Application</p>
                    <div className="hero-tags">
                        <span className="tag">Flutter</span>
                        <span className="tag">Supabase</span>
                        <span className="tag">Real-time</span>
                        <span className="tag">Cross-platform</span>
                    </div>
                </div>
            </section>

            {/* Video Demo Section */}
            <section className="video-demo-section">
                <div className="section-container">
                    <div className="video-layout">
                        <div className="video-text">
                            <h2 className="video-title">Watch It In Action</h2>
                            <p className="video-subtitle"><u>The Mobile Version</u></p>
                            <p className="video-description">
                                This demo showcases weekly lists, event lists, custom lists, and family collaboration features.
                                See how List Vault makes family shopping coordination seamless and efficient.
                            </p>
                        </div>

                        <div className="laptop-mockup slanted">
                            <div className="laptop-screen">
                                <video controls controlsList="nodownload" preload="metadata">
                                    <source src="/demo_videos/list_vault_demo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="laptop-base"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid Section */}
            <section className="features-section">
                <div className="section-container">
                    <h2 className="section-title">Key Features</h2>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📋</div>
                            <h3>Weekly Lists</h3>
                            <p>Automatic weekly rollover with uncompleted items carried forward</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🎉</div>
                            <h3>Event Lists</h3>
                            <p>Create special lists for parties, holidays, and special occasions</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">👨‍👩‍👧‍👦</div>
                            <h3>Family Sharing</h3>
                            <p>Share lists with family members and collaborate in real-time</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔄</div>
                            <h3>Real-time Sync</h3>
                            <p>Changes appear instantly across all devices</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🎙️</div>
                            <h3>Voice Input</h3>
                            <p>Add items hands-free using speech recognition</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🌙</div>
                            <h3>Dark Mode</h3>
                            <p>Built-in dark mode for comfortable nighttime use</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="tech-section">
                <div className="section-container">
                    <div className="tech-content">
                        <div className="tech-text">
                            <h2 className="section-title">Built With Modern Technology</h2>
                            <p>
                                List Vault is a full-stack Flutter application powered by Supabase for
                                real-time collaboration. It features secure authentication, PostgreSQL
                                database with Row Level Security, and cross-platform support for
                                Android, iOS, and Web.
                            </p>
                            <ul className="tech-highlights">
                                <li>Flutter for cross-platform development</li>
                                <li>Supabase for backend and real-time features</li>
                                <li>PostgreSQL with Row Level Security</li>
                                <li>Provider for state management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-container">
                    <h2>Ready to Try It?</h2>
                    <p>Experience the app live or check out the source code</p>

                    <div className="cta-buttons">
                        <a
                            href="https://listvault.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn primary"
                        >
                            <span>🚀</span> Try Web Version
                        </a>

                        <a
                            href="https://github.com/ODIRAA-git/LIST_VAULT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn secondary"
                        >
                            <span>💻</span> View Source Code
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="demo-footer">
                <p>Developed by Madu Odiraa Perpetua</p>
            </footer>
        </div>
    );
}

export default ListVaultDemo;
