import React from 'react';
import { Metadata } from 'next';
import { caseStudies } from '@/lib/data';
import CaseStudyClient from '@/components/pages/CaseStudyClient';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies[slug];

    if (!study) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${study.client} - ${study.title}`,
        description: study.brief,
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const study = caseStudies[slug];

    return <CaseStudyClient study={study} />;
}
