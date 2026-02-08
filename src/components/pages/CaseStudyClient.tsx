"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CaseStudyClientProps {
    study: {
        client: string;
        title: string;
        brief: string;
        category: string;
        execution: string[];
        result: string;
        images: string[];
    };
}

export default function CaseStudyClient({ study }: CaseStudyClientProps) {
    if (!study) {
        return (
            <div className="section container" style={{ textAlign: 'center', paddingTop: '10rem' }}>
                <h1 style={{ marginBottom: '1rem' }}>Project Not Found</h1>
                <Link href="/work" className="btn btn-primary">Back to Work</Link>
            </div>
        );
    }

    return (
        <>
            {/* Hero */}
            <section style={{
                height: '60vh',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'flex-end',
                position: 'relative',
                backgroundColor: 'var(--color-bg-secondary)',
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'var(--color-bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <span className="text-muted">Hero Image: {study.client}</span>
                </div>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)',
                }} />
                <div className="container" style={{ position: 'relative', paddingBottom: '3rem' }}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-muted"
                        style={{
                            fontSize: '0.75rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            marginBottom: '0.5rem',
                        }}
                    >
                        {study.category}
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3rem', fontWeight: 300 }}
                    >
                        {study.client}: {study.title}
                    </motion.h1>
                </div>
            </section>

            {/* Case Study Content */}
            <section className="section">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        marginBottom: '4rem',
                    }}>
                        {/* Brief */}
                        <div>
                            <h2 style={{
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'var(--color-text-muted)',
                                marginBottom: '1rem',
                            }}>
                                The Brief
                            </h2>
                            <p style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                                {study.brief}
                            </p>
                        </div>

                        {/* Execution */}
                        <div>
                            <h2 style={{
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'var(--color-text-muted)',
                                marginBottom: '1rem',
                            }}>
                                Execution
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {study.execution.map((item, index) => (
                                    <li key={index} style={{
                                        padding: '0.5rem 0',
                                        borderBottom: '1px solid var(--color-border)',
                                    }}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Result */}
                        <div>
                            <h2 style={{
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'var(--color-text-muted)',
                                marginBottom: '1rem',
                            }}>
                                Result
                            </h2>
                            <p style={{
                                fontSize: '1.125rem',
                                lineHeight: 1.8,
                                color: 'var(--color-accent)',
                            }}>
                                {study.result}
                            </p>
                        </div>
                    </div>

                    {/* Gallery */}
                    <h2 style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted)',
                        marginBottom: '1.5rem',
                    }}>
                        Gallery
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1rem',
                    }}>
                        {study.images.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    aspectRatio: '4/3',
                                    backgroundColor: 'var(--color-bg-card)',
                                    border: '1px solid var(--color-border)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    src={img}
                                    alt={`${study.title} image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section style={{
                padding: '3rem 0',
                borderTop: '1px solid var(--color-border)',
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Link href="/work" style={{
                        fontSize: '0.875rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                    }}>
                        ← All Projects
                    </Link>
                    <Link href="/contact" className="text-accent" style={{
                        fontSize: '0.875rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                    }}>
                        Start a Project →
                    </Link>
                </div>
            </section>
        </>
    );
}
