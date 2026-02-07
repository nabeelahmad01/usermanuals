import Link from 'next/link';
import {
    Smartphone, Laptop, Tv, Camera, Utensils,
    Waves, Printer, Headphones, Gamepad2, Wrench,
    LucideIcon
} from 'lucide-react';
import { Category } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
    'smartphone': Smartphone,
    'laptop': Laptop,
    'tv': Tv,
    'camera': Camera,
    'utensils': Utensils,
    'waves': Waves,
    'printer': Printer,
    'headphones': Headphones,
    'gamepad-2': Gamepad2,
    'wrench': Wrench,
};

interface CategoryCardProps {
    category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
    const Icon = iconMap[category.icon] || Smartphone;

    return (
        <Link href={`/category/${category.slug}`}>
            <div className="bg-white rounded-xl border border-gray-100 p-6 card-hover group">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {category.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {category.manualCount.toLocaleString()} manuals
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
