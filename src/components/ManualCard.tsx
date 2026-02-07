import Link from 'next/link';
import { FileText, Download, Eye } from 'lucide-react';
import { Manual } from '@/lib/data';

interface ManualCardProps {
    manual: Manual;
}

export default function ManualCard({ manual }: ManualCardProps) {
    return (
        <Link href={`/manual/${manual.id}`}>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden card-hover group">
                {/* Thumbnail */}
                <div className="relative h-40 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-blue-600/30 group-hover:scale-110 transition-transform" />
                    <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 rounded-md text-xs font-medium text-gray-600">
                        {manual.pages} pages
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                            {manual.brand}
                        </span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                            {manual.category}
                        </span>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {manual.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-3">
                        Model: {manual.model}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {manual.views.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                                <Download className="w-4 h-4" />
                                {manual.downloads.toLocaleString()}
                            </span>
                        </div>
                        <span>{manual.fileSize}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
