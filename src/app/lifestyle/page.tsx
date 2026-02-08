"use client";
import React, { useEffect } from 'react';
import { useTheme } from '@/components/layout/ThemeProvider';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Placeholder lifestyle images - replace with actual engagement/lifestyle photos
const lifestyleGallery = [
    { id: 1, title: 'Sarah & Michael', subtitle: 'Engagement Session', image: '/images/juvane/JM1.jpg' },
    { id: 2, title: 'The Johnson Wedding', subtitle: 'Intimate Ceremony', image: '/images/juvane/JM2.jpg' },
    { id: 3, title: 'Emma & David', subtitle: 'Love Story', image: '/images/juvane/JM3.jpg' },
    { id: 4, title: 'The Williams Family', subtitle: 'Anniversary Portraits', image: '/images/juvane/JM4.jpg' },
];

export default function Lifestyle() {
    const { setTheme } = useTheme();

    // Switch to lifestyle theme when page loads
    useEffect(() => {
        setTheme('lifestyle');
        return () => setTheme('corporate'); // Reset on unmount
    }, [setTheme]);

    return (
        <>
            {/* Hero Section */}
            <section style={{
                height: '70vh',
                minHeight: '500px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(to bottom, var(--color-bg-secondary), var(--color-bg))',
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(/images/juvane/clouds.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                }} />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'relative',
                        textAlign: 'center',
                        maxWidth: '700px',
                        padding: '0 2rem',
                    }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 400,
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                    }}>
                        Editorial Love Stories
                    </h1>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.8,
                        maxWidth: '500px',
                        margin: '0 auto',
                    }}>
                        Capturing the authentic moments of connection, joy, and love.
                        Each session is a unique narrative, told through a cinematic lens.
                    </p>
                </motion.div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontSize: '1.75rem',
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '1.5rem',
                        }}>
                            The Experience
                        </h2>
                        <p style={{
                            fontSize: '1rem',
                            color: 'var(--color-text-muted)',
                            lineHeight: 1.9,
                        }}>
                            A lifestyle session with Juvane Moonsami is more than just photos—it's
                            an experience designed to capture the essence of your relationship.
                            From intimate engagement sessions to anniversary celebrations,
                            every frame tells your unique story with elegance and authenticity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                    }}>
                        {lifestyleGallery.map((item, index) => (
                            <motion.article
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card"
                                style={{
                                    cursor: 'pointer',
                                    border: 'none',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                }}
                            >
                                <div className="image-overlay" style={{ aspectRatio: '4/5' }}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                                    <h3 style={{
                                        fontSize: '1.25rem',
                                        fontFamily: 'var(--font-heading)',
                                        marginBottom: '0.5rem',
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.875rem',
                                        color: 'var(--color-text-muted)',
                                        fontStyle: 'italic',
                                    }}>
                                        {item.subtitle}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{
                background: 'var(--color-bg-secondary)',
                textAlign: 'center',
            }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontSize: '2rem',
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '1rem',
                        }}>
                            Let's Tell Your Story
                        </h2>
                        <p style={{
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                        }}>
                            Ready to create timeless memories together?
                        </p>
                        <a href="/contact" className="btn btn-primary">
                            Book Your Session
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
