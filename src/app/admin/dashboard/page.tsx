'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    LayoutDashboard,
    Upload,
    FolderOpen,
    Tags,
    Settings,
    LogOut,
    FileText,
    Users,
    Eye,
    Download,
    TrendingUp,
    Menu,
    X
} from 'lucide-react';
import { manuals, brands, categories } from '@/lib/data';

export default function AdminDashboard() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        // Check authentication
        const auth = localStorage.getItem('adminAuth');
        const email = localStorage.getItem('adminEmail');

        if (auth !== 'true') {
            router.push('/admin');
            return;
        }

        setIsAuthenticated(true);
        setAdminEmail(email || '');
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        localStorage.removeItem('adminEmail');
        router.push('/admin');
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-500">Checking authentication...</p>
                </div>
            </div>
        );
    }

    const stats = [
        { label: 'Total Manuals', value: manuals.length.toLocaleString(), icon: FileText, color: 'blue', change: '+12%' },
        { label: 'Total Brands', value: brands.length.toLocaleString(), icon: Tags, color: 'purple', change: '+5%' },
        { label: 'Total Categories', value: categories.length.toLocaleString(), icon: FolderOpen, color: 'green', change: '+3%' },
        { label: 'Total Views', value: '45.2K', icon: Eye, color: 'orange', change: '+18%' },
    ];

    const sidebarLinks = [
        { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard', active: true },
        { href: '/admin/upload', icon: Upload, label: 'Upload Manual' },
        { href: '/admin/manuals', icon: FileText, label: 'Manage Manuals' },
        { href: '/admin/brands', icon: Tags, label: 'Manage Brands' },
        { href: '/admin/categories', icon: FolderOpen, label: 'Manage Categories' },
        { href: '/admin/settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <div className="min-h-screen bg-slate-100">
            {/* Sidebar */}
            <aside className={`fixed left-0 top-0 h-full bg-slate-900 text-white transition-all duration-300 z-50 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
                <div className="p-4">
                    <div className="flex items-center justify-between mb-8">
                        {sidebarOpen && (
                            <div>
                                <h1 className="text-xl font-bold">ManualsHub</h1>
                                <p className="text-slate-400 text-sm">Admin Panel</p>
                            </div>
                        )}
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 hover:bg-slate-800 rounded-lg"
                        >
                            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>

                    <nav className="space-y-2">
                        {sidebarLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${link.active ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                                    }`}
                            >
                                <link.icon className="w-5 h-5 flex-shrink-0" />
                                {sidebarOpen && <span>{link.label}</span>}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* User & Logout */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
                    {sidebarOpen && (
                        <div className="mb-4">
                            <p className="text-sm text-slate-400">Logged in as</p>
                            <p className="text-sm font-medium truncate">{adminEmail}</p>
                        </div>
                    )}
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                    >
                        <LogOut className="w-5 h-5 flex-shrink-0" />
                        {sidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'} p-8`}>
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-500">Welcome back, Admin!</p>
                    </div>
                    <Link href="/admin/upload" className="btn-primary">
                        <Upload className="w-5 h-5" />
                        Upload Manual
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-${stat.color}-100 flex items-center justify-center`}>
                                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                                </div>
                                <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                                    <TrendingUp className="w-4 h-4" />
                                    {stat.change}
                                </span>
                            </div>
                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Recent Manuals Table */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-900">Recent Manuals</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Title</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Brand</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Category</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Views</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Downloads</th>
                                </tr>
                            </thead>
                            <tbody>
                                {manuals.map((manual) => (
                                    <tr key={manual.id} className="border-t border-gray-100 hover:bg-slate-50">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{manual.title}</div>
                                            <div className="text-sm text-gray-500">{manual.model}</div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">{manual.brand}</td>
                                        <td className="px-6 py-4 text-gray-700">{manual.category}</td>
                                        <td className="px-6 py-4">
                                            <span className="flex items-center gap-1 text-gray-700">
                                                <Eye className="w-4 h-4 text-gray-400" />
                                                {manual.views.toLocaleString()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="flex items-center gap-1 text-gray-700">
                                                <Download className="w-4 h-4 text-gray-400" />
                                                {manual.downloads.toLocaleString()}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
