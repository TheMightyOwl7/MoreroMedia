import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Juvane',
    description: 'Learn about the photographer behind the lens, Juvane Moonsami.',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
