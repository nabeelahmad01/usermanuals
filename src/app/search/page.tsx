'use client';

import { Suspense } from 'react';
import SearchContent from './SearchContent';

export default function SearchPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-500">Loading search...</p>
                </div>
            </div>
        }>
            <SearchContent />
        </Suspense>
    );
}
