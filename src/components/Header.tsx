'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, BookOpen, ChevronDown } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">ManualsHub</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/brands" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                            Brands
                        </Link>
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                Categories
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-2">
                                    <Link href="/category/smartphones" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Smartphones</Link>
                                    <Link href="/category/laptops" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Laptops</Link>
                                    <Link href="/category/tvs" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">TVs</Link>
                                    <Link href="/category/cameras" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Cameras</Link>
                                    <Link href="/categories" className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-50">View All →</Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                            About
                        </Link>
                    </nav>

                    {/* Search & Actions */}
                    <div className="flex items-center gap-4">
                        {/* Desktop Search */}
                        <div className="hidden md:block relative">
                            <input
                                type="text"
                                placeholder="Search manuals..."
                                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>

                        {/* Mobile Search Toggle */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
                        >
                            <Search className="w-5 h-5 text-gray-700" />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                {isSearchOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search manuals..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                autoFocus
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                )}

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <nav className="flex flex-col gap-2">
                            <Link href="/brands" className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                                Brands
                            </Link>
                            <Link href="/categories" className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                                Categories
                            </Link>
                            <Link href="/about" className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                                About
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
