import { Metadata } from 'next';
import { categories } from '@/lib/data';
import CategoryCard from '@/components/CategoryCard';

export const metadata: Metadata = {
    title: 'All Categories - ManualsHub',
    description: 'Browse product manuals by category. Find user guides for smartphones, laptops, TVs, cameras, kitchen appliances, and more.',
};

export default function CategoriesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-900 to-cyan-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Find the perfect manual for your product. Browse our extensive collection organized by product type.
                    </p>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
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
