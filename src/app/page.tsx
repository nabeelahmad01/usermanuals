import Link from 'next/link';
import { Search, ArrowRight, FileText, Users, Download, Shield } from 'lucide-react';
import { brands, categories, manuals } from '@/lib/data';
import ManualCard from '@/components/ManualCard';
import BrandCard from '@/components/BrandCard';
import CategoryCard from '@/components/CategoryCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
              Find Any Product Manual
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                In Seconds
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Access over 100,000+ user manuals, guides, and documentation for all your devices.
              Free downloads, instant access.
            </p>

            {/* Search Bar */}
            <form action="/search" method="GET" className="relative max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  name="q"
                  placeholder="Search by product name, brand, or model number..."
                  className="w-full pl-14 pr-36 py-5 rounded-2xl bg-white text-slate-900 text-lg placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-400/30 shadow-2xl"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary"
                >
                  Search
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">100,000+ Manuals</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">2M+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">Free Downloads</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* Ad Placeholder */}
      <div className="container mx-auto px-4 py-10 mt-10">
        <div className="ad-placeholder h-24">
          Advertisement Space (728x90)
        </div>
      </div>

      {/* Popular Categories */}
      <section className="py-20 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse by Category</h2>
            <Link href="/categories" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {categories.slice(0, 5).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-20 mt-10 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Brands</h2>
            <Link href="/brands" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid-brands">
            {brands.slice(0, 12).map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Manuals */}
      <section className="py-20 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest Manuals</h2>
            <Link href="/search" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              Browse All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid-manuals">
            {manuals.map((manual) => (
              <ManualCard key={manual.id} manual={manual} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Placeholder */}
      <div className="container mx-auto px-4 py-10 mt-10">
        <div className="ad-placeholder h-64">
          Advertisement Space (300x250)
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 mt-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose ManualsHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Huge Database</h3>
              <p className="text-blue-100">Access over 100,000 manuals from thousands of brands worldwide.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Downloads</h3>
              <p className="text-blue-100">All manuals are available for free download in PDF format.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-blue-100">All files are scanned and verified for your safety.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
