'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, X } from 'lucide-react';
import { searchManuals, manuals, brands, categories } from '@/lib/data';
import ManualCard from '@/components/ManualCard';

export default function SearchContent() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q') || '';
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState(manuals);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        if (query) {
            setResults(searchManuals(query));
        } else {
            setResults(manuals);
        }
    }, [query]);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Search Header */}
            <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search manuals by name, brand, or model..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            />
                            {query && (
                                <button
                                    onClick={() => setQuery('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
                                >
                                    <X className="w-4 h-4 text-gray-400" />
                                </button>
                            )}
                        </div>
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center gap-2 text-gray-700"
                        >
                            <Filter className="w-5 h-5" />
                            Filters
                        </button>
                    </div>

                    {/* Filter Panel */}
                    {isFilterOpen && (
                        <div className="mt-4 p-4 bg-slate-50 rounded-xl">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                                    <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500">
                                        <option value="">All Brands</option>
                                        {brands.map((brand) => (
                                            <option key={brand.id} value={brand.slug}>{brand.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                    <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500">
                                        <option value="">All Categories</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.slug}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                                    <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500">
                                        <option value="">All Languages</option>
                                        <option value="en">English</option>
                                        <option value="es">Spanish</option>
                                        <option value="fr">French</option>
                                        <option value="de">German</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Results */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-xl font-semibold text-gray-900">
                        {query ? (
                            <>
                                Search results for &quot;<span className="text-blue-600">{query}</span>&quot;
                            </>
                        ) : (
                            'All Manuals'
                        )}
                    </h1>
                    <span className="text-gray-500">{results.length} results found</span>
                </div>

                {results.length > 0 ? (
                    <div className="grid-manuals">
                        {results.map((manual) => (
                            <ManualCard key={manual.id} manual={manual} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                            <Search className="w-10 h-10 text-slate-400" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">No manuals found</h2>
                        <p className="text-gray-500 mb-6">Try adjusting your search or filters to find what you&apos;re looking for.</p>
                        <button
                            onClick={() => setQuery('')}
                            className="btn-primary"
                        >
                            Clear Search
                        </button>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="mt-8">
                    <div className="ad-placeholder h-24">
                        Advertisement Space
                    </div>
                </div>
            </div>
        </div>
    );
}
