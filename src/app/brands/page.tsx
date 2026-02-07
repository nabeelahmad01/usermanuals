import { Metadata } from 'next';
import { brands } from '@/lib/data';
import BrandCard from '@/components/BrandCard';

export const metadata: Metadata = {
    title: 'All Brands - ManualsHub',
    description: 'Browse product manuals by brand. Find user guides for Samsung, Apple, Sony, LG, Bosch, Canon, and thousands more.',
};

export default function BrandsPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse by Brand</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Find product manuals from your favorite brands. We have documentation from over 1,000 manufacturers worldwide.
                    </p>
                </div>
            </div>

            {/* Brands Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid-brands">
                    {brands.map((brand) => (
                        <BrandCard key={brand.id} brand={brand} />
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
