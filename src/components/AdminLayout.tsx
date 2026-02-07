'use client';

import { useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    LayoutDashboard,
    Upload,
    FolderOpen,
    Tags,
    Settings,
    LogOut,
    FileText,
    Menu,
    X,
    BookOpen
} from 'lucide-react';

interface AdminLayoutProps {
    children: ReactNode;
    title: string;
    description?: string;
}

export default function AdminLayout({ children, title, description }: AdminLayoutProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
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

    const sidebarLinks = [
        { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { href: '/admin/upload', icon: Upload, label: 'Upload Manual' },
        { href: '/admin/manuals', icon: FileText, label: 'Manage Manuals' },
        { href: '/admin/brands', icon: Tags, label: 'Manage Brands' },
        { href: '/admin/categories', icon: FolderOpen, label: 'Manage Categories' },
        { href: '/admin/settings', icon: Settings, label: 'Settings' },
    ];

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

    return (
        <div className="min-h-screen bg-slate-100">
            {/* Sidebar */}
            <aside className={`fixed left-0 top-0 h-full bg-slate-900 text-white transition-all duration-300 z-50 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
                <div className="p-4">
                    <div className="flex items-center justify-between mb-8">
                        {sidebarOpen && (
                            <Link href="/" className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-bold">ManualsHub</h1>
                                    <p className="text-slate-400 text-xs">Admin Panel</p>
                                </div>
                            </Link>
                        )}
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 hover:bg-slate-800 rounded-lg"
                        >
                            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>

                    <nav className="space-y-1">
                        {sidebarLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                                        }`}
                                >
                                    <link.icon className="w-5 h-5 flex-shrink-0" />
                                    {sidebarOpen && <span>{link.label}</span>}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* User & Logout */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
                    {sidebarOpen && (
                        <div className="mb-3">
                            <p className="text-xs text-slate-400">Logged in as</p>
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
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                    {description && <p className="text-gray-500 mt-1">{description}</p>}
                </div>

                {/* Page Content */}
                {children}
            </main>
        </div>
    );
}
