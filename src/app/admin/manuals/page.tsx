'use client';

import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { manuals } from '@/lib/data';
import { Eye, Download, Edit, Trash2, Search, Filter } from 'lucide-react';
import Link from 'next/link';

export default function ManageManualsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedManuals, setSelectedManuals] = useState<string[]>([]);

    const filteredManuals = manuals.filter(manual =>
        manual.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        manual.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        manual.model.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleSelectAll = () => {
        if (selectedManuals.length === filteredManuals.length) {
            setSelectedManuals([]);
        } else {
            setSelectedManuals(filteredManuals.map(m => m.id));
        }
    };

    const toggleSelect = (id: string) => {
        if (selectedManuals.includes(id)) {
            setSelectedManuals(selectedManuals.filter(m => m !== id));
        } else {
            setSelectedManuals([...selectedManuals, id]);
        }
    };

    return (
        <AdminLayout title="Manage Manuals" description="View, edit, and delete uploaded manuals">
            {/* Action Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search manuals by title, brand, or model..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                        <Filter className="w-5 h-5" />
                        Filter
                    </button>
                    {selectedManuals.length > 0 && (
                        <button className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2">
                            <Trash2 className="w-5 h-5" />
                            Delete ({selectedManuals.length})
                        </button>
                    )}
                    <Link href="/admin/upload" className="btn-primary">
                        + Add New Manual
                    </Link>
                </div>
            </div>

            {/* Manuals Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="w-12 px-6 py-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedManuals.length === filteredManuals.length && filteredManuals.length > 0}
                                        onChange={toggleSelectAll}
                                        className="w-4 h-4 rounded border-gray-300"
                                    />
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Manual</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Brand</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Category</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Stats</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredManuals.map((manual) => (
                                <tr key={manual.id} className="border-t border-gray-100 hover:bg-slate-50">
                                    <td className="px-6 py-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedManuals.includes(manual.id)}
                                            onChange={() => toggleSelect(manual.id)}
                                            className="w-4 h-4 rounded border-gray-300"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">{manual.title}</div>
                                        <div className="text-sm text-gray-500">Model: {manual.model} • {manual.pages} pages</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                            {manual.brand}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">{manual.category}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span className="flex items-center gap-1">
                                                <Eye className="w-4 h-4" />
                                                {manual.views.toLocaleString()}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Download className="w-4 h-4" />
                                                {manual.downloads.toLocaleString()}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-blue-100 rounded-lg text-blue-600" title="Edit">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 hover:bg-red-100 rounded-lg text-red-600" title="Delete">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Showing {filteredManuals.length} of {manuals.length} manuals
                    </p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
                            Previous
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            1
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
