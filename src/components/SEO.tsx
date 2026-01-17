import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    type?: string;
}

export function SEO({
    title,
    description = "Hindusthan Supervision - Trusted Security & Facility Management Services in Vijayawada.",
    keywords = "security services, housekeeping, vijayawada, facility management, guards",
    canonical,
    type = 'website'
}: SEOProps) {
    const siteTitle = "Hindusthan Supervision Security Services";
    const startUrl = window.location.origin;
    const fullCanonical = canonical ? `${startUrl}${canonical}` : window.location.href;

    return (
        <Helmet>
            {/* Visual */}
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={fullCanonical} />

            {/* Social / Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}
