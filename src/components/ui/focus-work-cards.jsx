"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";

const WorkCard = React.memo(({
    work,
    index,
    hovered,
    setHovered,
    showBrief = false
}) => (
    <Link
        href={`/work/${work.id}`}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
            "block rounded-lg relative bg-neutral-900 overflow-hidden transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
    >
        {/* Image Area */}
        <div className="relative" style={{ aspectRatio: showBrief ? '16/10' : '4/5' }}>
            {work.image && work.image !== '/images/corporate/placeholder.jpg' ? (
                <Image
                    src={work.image}
                    alt={`${work.client} - ${work.title}`}
                    fill
                    className="object-cover"
                />
            ) : (
                <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                >
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        {work.client} — {work.title}
                    </span>
                </div>
            )}
        </div>

        {/* Text Content - Always visible at bottom */}
        <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--color-bg-card)',
        }}>
            {showBrief ? (
                // Detailed layout for Work page
                <>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '0.5rem',
                    }}>
                        <p style={{
                            fontSize: '0.75rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--color-text-muted)',
                        }}>
                            {work.category}
                        </p>
                        <span style={{ fontSize: '0.875rem', color: 'var(--color-accent)' }}>
                            View Case Study →
                        </span>
                    </div>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        marginBottom: '0.5rem',
                        color: 'var(--color-text)',
                    }}>
                        {work.client}: {work.title}
                    </h3>
                    {work.brief && (
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                            {work.brief}
                        </p>
                    )}
                </>
            ) : (
                // Simple layout for Home page
                <>
                    <p style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                        color: 'var(--color-text-muted)',
                    }}>
                        {work.category}
                    </p>
                    <h4 style={{
                        fontSize: '1.25rem',
                        fontWeight: 500,
                        color: 'var(--color-text)',
                    }}>
                        {work.client}: {work.title}
                    </h4>
                </>
            )}
        </div>
    </Link>
));

WorkCard.displayName = "WorkCard";

export function FocusWorkCards({ works, showBrief = false, columns = 3 }) {
    const [hovered, setHovered] = useState(null);

    return (
        <div
            className="grid gap-6 w-full"
            style={{
                gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 2 ? '400px' : '300px'}, 1fr))`,
            }}
        >
            {works.map((work, index) => (
                <WorkCard
                    key={work.id}
                    work={work}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                    showBrief={showBrief}
                />
            ))}
        </div>
    );
}
