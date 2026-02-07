import { Metadata } from 'next';
import { categories, getManualsByCategory } from '@/lib/data';
import ManualCard from '@/components/ManualCard';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = categories.find((c) => c.slug === slug);

    if (!category) {
        return { title: 'Category Not Found - ManualsHub' };
    }

    return {
        title: `${category.name} Manuals - Free PDF Downloads | ManualsHub`,
        description: `Download free ${category.name} product manuals and user guides. Find documentation for all types of ${category.name.toLowerCase()}.`,
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const category = categories.find((c) => c.slug === slug);

    if (!category) {
        notFound();
    }

    const categoryManuals = getManualsByCategory(slug);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-900 to-cyan-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.name} Manuals</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Browse all available {category.name.toLowerCase()} product manuals and user guides. Free PDF downloads.
                    </p>
                    <div className="mt-4 text-cyan-400 font-medium">
                        {category.manualCount.toLocaleString()} manuals available
                    </div>
                </div>
            </div>

            {/* Manuals Grid */}
            <div className="container mx-auto px-4 py-12">
                {categoryManuals.length > 0 ? (
                    <div className="grid-manuals">
                        {categoryManuals.map((manual) => (
                            <ManualCard key={manual.id} manual={manual} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-gray-500">No manuals found for this category yet. Check back soon!</p>
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
