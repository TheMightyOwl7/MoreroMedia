export const projects = [
    {
        id: 'edgars-winter-2025',
        client: 'Edgars',
        title: 'Winter 2025 Collection',
        brief: 'Fashion campaign for the Winter 2025 seasonal collection',
        category: 'Fashion',
        image: '/images/corporate/placeholder.jpg',
    },
    {
        id: 'woolworths-home',
        client: 'Woolworths',
        title: 'Home Collection',
        brief: 'Lifestyle photography for the home & living catalogue',
        category: 'Commercial',
        image: '/images/corporate/placeholder.jpg',
    },
    {
        id: 'brand-campaign',
        client: 'Brand',
        title: 'Campaign 2025',
        brief: 'Brand awareness campaign for digital and print',
        category: 'Commercial',
        image: '/images/corporate/placeholder.jpg',
    },
    {
        id: 'fashion-editorial',
        client: 'Magazine',
        title: 'Editorial Spread',
        brief: 'Fashion editorial for quarterly publication',
        category: 'Editorial',
        image: '/images/corporate/placeholder.jpg',
    },
];

export const caseStudies: Record<string, {
    client: string;
    title: string;
    brief: string;
    execution: string[];
    result: string;
    images: string[];
    category: string;
}> = {
    'edgars-winter-2025': {
        client: 'Edgars',
        title: 'Winter 2025 Collection',
        brief: 'Capture the essence of the Winter 2025 fashion collection for in-store displays, catalogue, and digital campaigns.',
        execution: [
            'Studio shoot over 3 days',
            'Team of 6 models',
            'Art direction focused on warm, approachable luxury',
            'Mix of lifestyle and product-focused shots',
        ],
        result: 'Images used across 200+ stores nationwide, digital campaigns, and seasonal catalogue.',
        images: [
            '/images/corporate/placeholder.jpg',
            '/images/corporate/placeholder.jpg',
            '/images/corporate/placeholder.jpg',
        ],
        category: 'Fashion',
    },
    'woolworths-home': {
        client: 'Woolworths',
        title: 'Home Collection',
        brief: 'Create aspirational imagery for the new home and living product range.',
        execution: [
            'On-location shoot in curated home environment',
            'Natural lighting focus',
            'Lifestyle approach showing products in context',
        ],
        result: 'Featured in national advertising campaign and in-store displays.',
        images: [
            '/images/corporate/placeholder.jpg',
            '/images/corporate/placeholder.jpg',
        ],
        category: 'Commercial',
    },
};
