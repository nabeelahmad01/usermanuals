import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Download, Printer, Eye, Calendar, FileText, ArrowLeft } from 'lucide-react';
import { getManualById, getRelatedManuals, manuals } from '@/lib/data';
import ManualCard from '@/components/ManualCard';
import { notFound } from 'next/navigation';

interface ManualPageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return manuals.map((manual) => ({
        id: manual.id,
    }));
}

export async function generateMetadata({ params }: ManualPageProps): Promise<Metadata> {
    const { id } = await params;
    const manual = getManualById(id);

    if (!manual) {
        return {
            title: 'Manual Not Found - ManualsHub',
        };
    }

    return {
        title: `${manual.title} - Free PDF Download | ManualsHub`,
        description: manual.description,
        keywords: `${manual.brand} ${manual.model} manual, ${manual.brand} user guide, ${manual.title} PDF, free manual download`,
        openGraph: {
            title: manual.title,
            description: manual.description,
            type: 'article',
        },
    };
}

export default async function ManualPage({ params }: ManualPageProps) {
    const { id } = await params;
    const manual = getManualById(id);

    if (!manual) {
        notFound();
    }

    const relatedManuals = getRelatedManuals(manual);

    // Structured Data for SEO
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: manual.title,
        description: manual.description,
        datePublished: manual.uploadDate,
        publisher: {
            '@type': 'Organization',
            name: 'ManualsHub',
        },
        about: {
            '@type': 'Product',
            name: manual.model,
            brand: {
                '@type': 'Brand',
                name: manual.brand,
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="min-h-screen bg-slate-50">
                {/* Breadcrumb */}
                <div className="bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 py-3">
                        <nav className="flex items-center text-sm text-gray-500">
                            <Link href="/" className="hover:text-blue-600">Home</Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <Link href={`/brand/${manual.brand.toLowerCase()}`} className="hover:text-blue-600">{manual.brand}</Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <span className="text-gray-900 font-medium truncate">{manual.title}</span>
                        </nav>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Back Button */}
                            <Link href="/search" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Search
                            </Link>

                            {/* Manual Header */}
                            <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-lg">
                                        {manual.brand}
                                    </span>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg">
                                        {manual.category}
                                    </span>
                                </div>

                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    {manual.title}
                                </h1>

                                <p className="text-gray-600 mb-6">{manual.description}</p>

                                {/* Stats */}
                                <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6">
                                    <div className="flex items-center gap-2">
                                        <FileText className="w-4 h-4" />
                                        <span>{manual.pages} pages</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Eye className="w-4 h-4" />
                                        <span>{manual.views.toLocaleString()} views</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Download className="w-4 h-4" />
                                        <span>{manual.downloads.toLocaleString()} downloads</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(manual.uploadDate).toLocaleDateString()}</span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={manual.pdfUrl}
                                        download
                                        className="btn-primary"
                                    >
                                        <Download className="w-5 h-5" />
                                        Download PDF ({manual.fileSize})
                                    </a>
                                    <button className="btn-secondary flex items-center gap-2">
                                        <Printer className="w-5 h-5" />
                                        Print Manual
                                    </button>
                                </div>
                            </div>

                            {/* PDF Viewer Placeholder */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Manual Preview</h2>
                                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                                    <div className="text-center">
                                        <FileText className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                                        <p className="text-slate-500 mb-4">PDF Preview</p>
                                        <a href={manual.pdfUrl} target="_blank" className="btn-primary text-sm py-2 px-4">
                                            View Full PDF
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Manual Details */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Manual Information</h2>
                                <table className="w-full">
                                    <tbody className="divide-y divide-gray-100">
                                        <tr>
                                            <td className="py-3 text-gray-500">Brand</td>
                                            <td className="py-3 font-medium text-gray-900">{manual.brand}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 text-gray-500">Model</td>
                                            <td className="py-3 font-medium text-gray-900">{manual.model}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 text-gray-500">Category</td>
                                            <td className="py-3 font-medium text-gray-900">{manual.category}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 text-gray-500">Language</td>
                                            <td className="py-3 font-medium text-gray-900">{manual.language}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 text-gray-500">File Size</td>
                                            <td className="py-3 font-medium text-gray-900">{manual.fileSize}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 text-gray-500">Pages</td>
                                            <td className="py-3 font-medium text-gray-900">{manual.pages}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Ad Placeholder */}
                            <div className="ad-placeholder h-64 mb-6">
                                Advertisement (300x250)
                            </div>

                            {/* Related Manuals */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Manuals</h3>
                                <div className="space-y-4">
                                    {relatedManuals.map((relManual) => (
                                        <Link
                                            key={relManual.id}
                                            href={`/manual/${relManual.id}`}
                                            className="block p-3 rounded-lg hover:bg-slate-50 transition-colors"
                                        >
                                            <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                                                {relManual.title}
                                            </h4>
                                            <p className="text-xs text-gray-500">{relManual.brand} • {relManual.pages} pages</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Ad Placeholder */}
                            <div className="ad-placeholder h-64">
                                Advertisement (300x250)
                            </div>
                        </div>
                    </div>

                    {/* More Manuals */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">More {manual.brand} Manuals</h2>
                        <div className="grid-manuals">
                            {relatedManuals.slice(0, 4).map((m) => (
                                <ManualCard key={m.id} manual={m} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
