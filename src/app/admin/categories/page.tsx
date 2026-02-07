'use client';

import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { categories } from '@/lib/data';
import { Edit, Trash2, Plus, Search, FileText, Smartphone, Laptop, Tv, Camera, Headphones, Watch, Gamepad, Car, Home, Wrench } from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'Smartphones': Smartphone,
    'Laptops': Laptop,
    'TVs': Tv,
    'Cameras': Camera,
    'Audio': Headphones,
    'Wearables': Watch,
    'Gaming': Gamepad,
    'Automotive': Car,
    'Home Appliances': Home,
    'Power Tools': Wrench,
};

export default function ManageCategoriesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: '', icon: 'FileText' });

    const filteredCategories = categories.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddCategory = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Category "${newCategory.name}" would be added (requires database)`);
        setShowAddModal(false);
        setNewCategory({ name: '', icon: 'FileText' });
    };

    return (
        <AdminLayout title="Manage Categories" description="Organize manuals into categories">
            {/* Action Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search categories..."
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
                    Add New Category
                </button>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCategories.map((category) => {
                    const IconComponent = iconMap[category.name] || FileText;
                    return (
                        <div key={category.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                    <IconComponent className="w-7 h-7 text-white" />
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
                            <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                                <FileText className="w-4 h-4" />
                                {category.manualCount} manuals
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Stats */}
            <div className="mt-8 p-4 bg-white rounded-xl shadow-sm">
                <p className="text-gray-600">
                    Total: <span className="font-semibold">{categories.length}</span> categories •
                    Showing: <span className="font-semibold">{filteredCategories.length}</span>
                </p>
            </div>

            {/* Add Category Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Add New Category</h2>
                        <form onSubmit={handleAddCategory} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Category Name *
                                </label>
                                <input
                                    type="text"
                                    value={newCategory.name}
                                    onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                                    placeholder="e.g. Smartphones, TVs, Cameras"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Icon
                                </label>
                                <select
                                    value={newCategory.icon}
                                    onChange={(e) => setNewCategory({ ...newCategory, icon: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                >
                                    <option value="Smartphone">Smartphone</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Tv">TV</option>
                                    <option value="Camera">Camera</option>
                                    <option value="Headphones">Audio</option>
                                    <option value="Watch">Wearables</option>
                                    <option value="Gamepad">Gaming</option>
                                    <option value="Car">Automotive</option>
                                    <option value="Home">Home Appliances</option>
                                    <option value="Wrench">Tools</option>
                                </select>
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
                                    Add Category
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
