"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Using available Juvane images from public/images/juvane/
const aboutImages = {
    hero: '/images/juvane/JM_Camera.jpg',
    humble: '/images/juvane/JM_Humblebeginnings.jpg',
    headshot: '/images/juvane/JM_Bowtie.jpg',
    working: '/images/juvane/JM_Photos.jpg',
    personality: [
        '/images/juvane/JM1.jpg',
        '/images/juvane/JM2.jpg',
        '/images/juvane/JM3.jpg',
        '/images/juvane/JM4.jpg',
    ],
};

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section style={{
                height: '80vh',
                minHeight: '600px',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: -1,
                }}>
                    <Image
                        src={aboutImages.hero}
                        alt="Juvane Moonsami"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)',
                    zIndex: 0,
                }} />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container"
                    style={{
                        position: 'relative',
                        paddingBottom: '4rem',
                    }}
                >
                    <h1 style={{
                        fontFamily: 'var(--font-signature)',
                        fontSize: 'clamp(3.5rem, 10vw, 6rem)',
                        fontWeight: 400,
                        marginBottom: '1rem',
                        maxWidth: '600px',
                    }}>
                        Juvane Moonsami
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-muted)',
                        maxWidth: '500px',
                    }}>
                        The story behind the lens
                    </p>
                </motion.div>
            </section>

            {/* The Journey Section */}
            <section className="section">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center',
                    }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Image
                                src={aboutImages.humble}
                                alt="Where it all started"
                                width={800}
                                height={600}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                                }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span style={{
                                display: 'block',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                color: 'var(--color-accent)',
                                marginBottom: '1rem',
                            }}>
                                The Beginning
                            </span>
                            <h2 style={{
                                fontSize: '2rem',
                                marginBottom: '1.5rem',
                            }}>
                                Humble Beginnings
                            </h2>
                            <p style={{
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.9,
                                marginBottom: '1rem',
                            }}>
                                Every master was once a beginner. My journey into photography
                                started with a borrowed camera and an insatiable curiosity for
                                capturing moments that tell stories without words.
                            </p>
                            <p style={{
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.9,
                            }}>
                                What began as a passion quickly evolved into a calling—a
                                relentless pursuit of visual excellence that has taken me
                                from intimate portrait sessions to large-scale commercial
                                productions for South Africa's most recognized brands.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section bg-secondary">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center',
                    }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ order: 1 }}
                        >
                            <span style={{
                                display: 'block',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                color: 'var(--color-accent)',
                                marginBottom: '1rem',
                            }}>
                                The Approach
                            </span>
                            <h2 style={{
                                fontSize: '2rem',
                                marginBottom: '1.5rem',
                            }}>
                                Crafting Visual Stories
                            </h2>
                            <p style={{
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.9,
                                marginBottom: '1rem',
                            }}>
                                Photography is not just about capturing light—it's about
                                capturing emotion, energy, and the essence of a moment.
                                My approach blends technical precision with artistic intuition.
                            </p>
                            <p style={{
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.9,
                            }}>
                                Whether it's a high-stakes commercial shoot for a major retailer
                                or an intimate engagement session, the goal remains the same:
                                create images that resonate, inspire, and endure.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ order: 2 }}
                        >
                            <Image
                                src={aboutImages.working}
                                alt="Reviewing work"
                                width={800}
                                height={600}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Notable Clients */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{
                            display: 'block',
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            color: 'var(--color-accent)',
                            marginBottom: '1rem',
                        }}>
                            Notable Collaborations
                        </span>
                        <h2 style={{
                            fontSize: '2rem',
                            marginBottom: '1.5rem',
                        }}>
                            Trusted by Leading Brands
                        </h2>
                        <p style={{
                            color: 'var(--color-text-muted)',
                            maxWidth: '600px',
                            margin: '0 auto 3rem',
                            lineHeight: 1.8,
                        }}>
                            Over the years, I've had the privilege of working with
                            some of South Africa's most prestigious brands, delivering
                            compelling visual content that drives engagement and sales.
                        </p>
                    </motion.div>

                    {/* Placeholder for client logos */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '3rem',
                        flexWrap: 'wrap',
                        opacity: 0.5,
                    }}>
                        {['Woolworths', 'Edgars', 'Foschini', 'Truworths'].map((brand) => (
                            <span
                                key={brand}
                                style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    color: 'var(--color-text-muted)',
                                    letterSpacing: '0.1em',
                                }}
                            >
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personality Grid */}
            <section className="section bg-secondary">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                    >
                        <h2 style={{ fontSize: '2rem' }}>
                            Behind the Camera
                        </h2>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1rem',
                    }}>
                        {aboutImages.personality.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="image-overlay"
                                style={{ aspectRatio: '1' }}
                            >
                                <Image
                                    src={img}
                                    alt={`Juvane ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: '1rem',
                        }}>
                            Let's Create Together
                        </h2>
                        <p style={{
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.8,
                        }}>
                            Have a project in mind? Whether it's a commercial campaign,
                            editorial shoot, or personal portrait session, I'd love to
                            hear about it.
                        </p>
                        <a href="/contact" className="btn btn-primary">
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
