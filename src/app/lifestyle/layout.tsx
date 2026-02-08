import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lifestyle Photography',
    description: 'Capturing authentic moments of connection, joy, and love through lifestyle photography.',
};

export default function LifestyleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
