"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/mjgevpne', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map((error: { message: string }) => error["message"]).join(", "));
                } else {
                    alert("Oops! There was a problem submitting your form");
                }
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputStyles = {
        width: '100%',
        padding: '1rem',
        fontSize: '1rem',
        fontFamily: 'inherit',
        backgroundColor: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        color: 'var(--color-text)',
        outline: 'none',
        transition: 'border-color 0.2s ease',
    };

    const labelStyles = {
        display: 'block',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '0.5rem',
        color: 'var(--color-text-muted)',
    };

    return (
        <>
            {/* Hero Section */}
            <section style={{
                paddingTop: 'calc(var(--header-height) + 4rem)',
                paddingBottom: '4rem',
                textAlign: 'center',
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            marginBottom: '1rem',
                        }}>
                            Let's Work Together
                        </h1>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--color-text-muted)',
                            maxWidth: '500px',
                            margin: '0 auto',
                        }}>
                            Ready to bring your vision to life? Get in touch to discuss your project.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                textAlign: 'center',
                                padding: '4rem 2rem',
                                backgroundColor: 'var(--color-bg-card)',
                                border: '1px solid var(--color-border)',
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                margin: '0 auto 1.5rem',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#0a0a0a',
                                fontSize: '1.5rem',
                            }}>
                                ✓
                            </div>
                            <h2 style={{ marginBottom: '0.5rem' }}>Message Sent</h2>
                            <p style={{ color: 'var(--color-text-muted)' }}>
                                Thank you for reaching out. I'll get back to you within 24-48 hours.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            onSubmit={handleSubmit}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                            }}
                        >
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '1.5rem',
                            }}>
                                <div>
                                    <label htmlFor="name" style={labelStyles}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Smith"
                                        style={inputStyles}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" style={labelStyles}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@company.com"
                                        style={inputStyles}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="projectType" style={labelStyles}>
                                    Project Type
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        ...inputStyles,
                                        cursor: 'pointer',
                                        appearance: 'none',
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23a0a0a0' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1rem center',
                                    }}
                                >
                                    <option value="">Select a project type</option>
                                    <option value="commercial">Commercial / Advertising</option>
                                    <option value="editorial">Editorial / Fashion</option>
                                    <option value="engagement">Engagement / Couples</option>
                                    <option value="wedding">Wedding</option>
                                    <option value="portrait">Portrait / Headshots</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" style={labelStyles}>
                                    Tell Me About Your Project
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder="Describe your project, timeline, and any specific requirements..."
                                    style={{
                                        ...inputStyles,
                                        resize: 'vertical',
                                        minHeight: '150px',
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                                style={{
                                    width: '100%',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting ? 'wait' : 'pointer',
                                }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </motion.form>
                    )}

                    {/* Alternative Contact */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            marginTop: '3rem',
                            textAlign: 'center',
                            paddingTop: '3rem',
                            borderTop: '1px solid var(--color-border)',
                        }}
                    >
                        <p style={{
                            color: 'var(--color-text-muted)',
                            marginBottom: '0.5rem',
                        }}>
                            Prefer email directly?
                        </p>
                        <a
                            href="mailto:hello@juvanemoonsami.com"
                            style={{
                                color: 'var(--color-accent)',
                                fontSize: '1.125rem',
                            }}
                        >
                            hello@juvanemoonsami.com
                        </a>
                    </motion.div>

                    {/* PDF Download */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        style={{
                            marginTop: '2rem',
                            textAlign: 'center',
                        }}
                    >
                        <a
                            href="/downloads/juvane-portfolio-2026.pdf"
                            download
                            className="btn btn-outline"
                        >
                            Download Portfolio (PDF)
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
