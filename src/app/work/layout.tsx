import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Selected Work',
    description: 'Explore the commercial and fashion photography portfolio of Juvane Moonsami.',
};

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
