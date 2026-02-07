'use client';

import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { brands } from '@/lib/data';
import { Edit, Trash2, Plus, Search, FileText } from 'lucide-react';

export default function ManageBrandsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [newBrand, setNewBrand] = useState({ name: '', logo: '' });

    const filteredBrands = brands.filter(brand =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddBrand = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would save to database
        alert(`Brand "${newBrand.name}" would be added (requires database)`);
        setShowAddModal(false);
        setNewBrand({ name: '', logo: '' });
    };

    return (
        <AdminLayout title="Manage Brands" description="Add, edit, and organize product brands">
            {/* Action Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search brands..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="btn-primary"
                >
                    <Plus className="w-5 h-5" />
                    Add New Brand
                </button>
            </div>

            {/* Brands Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBrands.map((brand) => (
                    <div key={brand.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-600">
                                {brand.name.charAt(0)}
                            </div>
                            <div className="flex gap-1">
                                <button className="p-2 hover:bg-blue-100 rounded-lg text-blue-600" title="Edit">
                                    <Edit className="w-4 h-4" />
                                </button>
                                <button className="p-2 hover:bg-red-100 rounded-lg text-red-600" title="Delete">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{brand.name}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            {brand.manualCount} manuals
                        </p>
                    </div>
                ))}
            </div>

            {/* Stats */}
            <div className="mt-8 p-4 bg-white rounded-xl shadow-sm">
                <p className="text-gray-600">
                    Total: <span className="font-semibold">{brands.length}</span> brands •
                    Showing: <span className="font-semibold">{filteredBrands.length}</span>
                </p>
            </div>

            {/* Add Brand Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Add New Brand</h2>
                        <form onSubmit={handleAddBrand} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Brand Name *
                                </label>
                                <input
                                    type="text"
                                    value={newBrand.name}
                                    onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value })}
                                    placeholder="e.g. Samsung, Apple, Sony"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Logo URL (optional)
                                </label>
                                <input
                                    type="url"
                                    value={newBrand.logo}
                                    onChange={(e) => setNewBrand({ ...newBrand, logo: e.target.value })}
                                    placeholder="https://example.com/logo.png"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="flex-1 btn-primary justify-center">
                                    Add Brand
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
