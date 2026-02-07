import Link from 'next/link';
import { Building2 } from 'lucide-react';
import { Brand } from '@/lib/data';

interface BrandCardProps {
    brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
    return (
        <Link href={`/brand/${brand.slug}`}>
            <div className="bg-white rounded-xl border border-gray-100 p-6 card-hover group text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {brand.name}
                </h3>
                <p className="text-sm text-gray-500">
                    {brand.manualCount.toLocaleString()} manuals
                </p>
            </div>
        </Link>
    );
}
