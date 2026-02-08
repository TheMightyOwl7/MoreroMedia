"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FocusWorkCards } from '@/components/ui/focus-work-cards';
import { projects } from '@/lib/data';

export default function Work() {
    return (
        <>
            {/* Page Header */}
            <section style={{
                paddingTop: '8rem',
                paddingBottom: '4rem',
                textAlign: 'center',
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 300,
                            letterSpacing: '0.05em',
                            marginBottom: '1rem',
                        }}
                    >
                        Selected Work
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted"
                        style={{
                            fontSize: '1.125rem',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}
                    >
                        A curated selection of commercial and fashion photography
                        for South Africa's leading brands.
                    </motion.p>
                </div>
            </section>

            {/* Projects Grid with Focus Card Effect */}
            <section className="section" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <FocusWorkCards works={projects} showBrief={true} columns={2} />
                </div>
            </section>

            {/* CTA */}
            <section style={{
                padding: '4rem 0',
                backgroundColor: 'var(--color-bg-secondary)',
                textAlign: 'center',
            }}>
                <div className="container">
                    <p className="text-muted" style={{ marginBottom: '1rem' }}>
                        Interested in working together?
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Request Rate Card
                    </Link>
                </div>
            </section>
        </>
    );
}
