import { Metadata } from 'next';
import { brands, getManualsByBrand } from '@/lib/data';
import ManualCard from '@/components/ManualCard';
import { notFound } from 'next/navigation';

interface BrandPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return brands.map((brand) => ({
        slug: brand.slug,
    }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
    const { slug } = await params;
    const brand = brands.find((b) => b.slug === slug);

    if (!brand) {
        return { title: 'Brand Not Found - ManualsHub' };
    }

    return {
        title: `${brand.name} Manuals - Free PDF Downloads | ManualsHub`,
        description: `Download free ${brand.name} product manuals and user guides. Find documentation for all ${brand.name} products including setup instructions and troubleshooting.`,
    };
}

export default async function BrandPage({ params }: BrandPageProps) {
    const { slug } = await params;
    const brand = brands.find((b) => b.slug === slug);

    if (!brand) {
        notFound();
    }

    const brandManuals = getManualsByBrand(slug);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{brand.name} Manuals</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Browse all available {brand.name} product manuals and user guides. Free PDF downloads.
                    </p>
                    <div className="mt-4 text-cyan-400 font-medium">
                        {brand.manualCount.toLocaleString()} manuals available
                    </div>
                </div>
            </div>

            {/* Manuals Grid */}
            <div className="container mx-auto px-4 py-12">
                {brandManuals.length > 0 ? (
                    <div className="grid-manuals">
                        {brandManuals.map((manual) => (
                            <ManualCard key={manual.id} manual={manual} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-gray-500">No manuals found for this brand yet. Check back soon!</p>
                    </div>
                )}
            </div>

            {/* Ad Placeholder */}
            <div className="container mx-auto px-4 pb-12">
                <div className="ad-placeholder h-24">
                    Advertisement Space
                </div>
            </div>
        </div>
    );
}
