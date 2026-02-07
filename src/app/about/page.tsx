import { Metadata } from 'next';
import { FileText, Users, Shield, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us - ManualsHub',
    description: 'Learn about ManualsHub - your comprehensive resource for free product manuals, user guides, and documentation from thousands of brands.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About ManualsHub</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        We&apos;re on a mission to make product documentation accessible to everyone, anywhere in the world.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Lost your product manual? Can&apos;t figure out how to use a new gadget? We&apos;ve all been there.
                            ManualsHub was created to solve this frustrating problem by providing free access to thousands of
                            product manuals, user guides, and documentation from manufacturers worldwide.
                        </p>
                        <p className="text-lg text-gray-600">
                            Whether you need to troubleshoot your washing machine, set up a new TV, or understand
                            your camera&apos;s advanced features, we&apos;ve got you covered with instant PDF downloads.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
                            <div className="text-gray-600">Manuals Available</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
                            <div className="text-gray-600">Brands Covered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">2M+</div>
                            <div className="text-gray-600">Monthly Users</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-gray-600">Categories</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 flex items-center justify-center">
                                <FileText className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Vast Database</h3>
                            <p className="text-gray-600">Access over 100,000 manuals from thousands of manufacturers.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-100 flex items-center justify-center">
                                <Globe className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Access</h3>
                            <p className="text-gray-600">All manuals are available for free download, no registration required.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center">
                                <Users className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Driven</h3>
                            <p className="text-gray-600">Our community helps keep the database updated and comprehensive.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-100 flex items-center justify-center">
                                <Shield className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe Downloads</h3>
                            <p className="text-gray-600">All files are scanned and verified for your security.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Can&apos;t Find Your Manual?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        If you can&apos;t find the manual you&apos;re looking for, let us know! We&apos;re constantly
                        expanding our database and your request helps us prioritize.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                        Request a Manual
                    </a>
                </div>
            </section>
        </div>
    );
}
