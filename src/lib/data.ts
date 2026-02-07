// Mock data for the manuals website

export interface Manual {
  id: string;
  title: string;
  brand: string;
  category: string;
  model: string;
  description: string;
  pdfUrl: string;
  thumbnail: string;
  pages: number;
  language: string;
  fileSize: string;
  uploadDate: string;
  views: number;
  downloads: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  manualCount: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  manualCount: number;
}

export const brands: Brand[] = [
  { id: '1', name: 'Samsung', slug: 'samsung', logo: '/brands/samsung.svg', manualCount: 1250 },
  { id: '2', name: 'Apple', slug: 'apple', logo: '/brands/apple.svg', manualCount: 890 },
  { id: '3', name: 'Sony', slug: 'sony', logo: '/brands/sony.svg', manualCount: 1120 },
  { id: '4', name: 'LG', slug: 'lg', logo: '/brands/lg.svg', manualCount: 980 },
  { id: '5', name: 'Bosch', slug: 'bosch', logo: '/brands/bosch.svg', manualCount: 750 },
  { id: '6', name: 'Panasonic', slug: 'panasonic', logo: '/brands/panasonic.svg', manualCount: 820 },
  { id: '7', name: 'HP', slug: 'hp', logo: '/brands/hp.svg', manualCount: 560 },
  { id: '8', name: 'Dell', slug: 'dell', logo: '/brands/dell.svg', manualCount: 430 },
  { id: '9', name: 'Canon', slug: 'canon', logo: '/brands/canon.svg', manualCount: 670 },
  { id: '10', name: 'Philips', slug: 'philips', logo: '/brands/philips.svg', manualCount: 890 },
  { id: '11', name: 'Nikon', slug: 'nikon', logo: '/brands/nikon.svg', manualCount: 340 },
  { id: '12', name: 'Yamaha', slug: 'yamaha', logo: '/brands/yamaha.svg', manualCount: 520 },
];

export const categories: Category[] = [
  { id: '1', name: 'Smartphones', slug: 'smartphones', icon: 'smartphone', manualCount: 2450 },
  { id: '2', name: 'Laptops', slug: 'laptops', icon: 'laptop', manualCount: 1890 },
  { id: '3', name: 'TVs', slug: 'tvs', icon: 'tv', manualCount: 1560 },
  { id: '4', name: 'Cameras', slug: 'cameras', icon: 'camera', manualCount: 980 },
  { id: '5', name: 'Kitchen Appliances', slug: 'kitchen-appliances', icon: 'utensils', manualCount: 2100 },
  { id: '6', name: 'Washing Machines', slug: 'washing-machines', icon: 'waves', manualCount: 760 },
  { id: '7', name: 'Printers', slug: 'printers', icon: 'printer', manualCount: 890 },
  { id: '8', name: 'Audio Equipment', slug: 'audio-equipment', icon: 'headphones', manualCount: 1230 },
  { id: '9', name: 'Gaming Consoles', slug: 'gaming-consoles', icon: 'gamepad-2', manualCount: 340 },
  { id: '10', name: 'Power Tools', slug: 'power-tools', icon: 'wrench', manualCount: 670 },
];

export const manuals: Manual[] = [
  {
    id: '1',
    title: 'Samsung Galaxy S24 Ultra User Manual',
    brand: 'Samsung',
    category: 'Smartphones',
    model: 'SM-S928B',
    description: 'Complete user guide for Samsung Galaxy S24 Ultra smartphone. Includes setup instructions, feature guides, troubleshooting, and specifications.',
    pdfUrl: '/manuals/samsung-s24-ultra.pdf',
    thumbnail: '/thumbnails/samsung-s24.jpg',
    pages: 245,
    language: 'English',
    fileSize: '12.5 MB',
    uploadDate: '2024-01-15',
    views: 15420,
    downloads: 8750,
  },
  {
    id: '2',
    title: 'Apple iPhone 15 Pro Max User Guide',
    brand: 'Apple',
    category: 'Smartphones',
    model: 'A3108',
    description: 'Official Apple iPhone 15 Pro Max user guide. Learn about all features, settings, accessibility options, and safety information.',
    pdfUrl: '/manuals/iphone-15-pro-max.pdf',
    thumbnail: '/thumbnails/iphone-15.jpg',
    pages: 189,
    language: 'English',
    fileSize: '8.2 MB',
    uploadDate: '2024-01-10',
    views: 22130,
    downloads: 12450,
  },
  {
    id: '3',
    title: 'Sony Bravia XR A95L OLED TV Manual',
    brand: 'Sony',
    category: 'TVs',
    model: 'XR-65A95L',
    description: 'Installation and operation manual for Sony Bravia XR A95L 4K OLED TV. Covers setup, picture settings, smart features, and maintenance.',
    pdfUrl: '/manuals/sony-bravia-a95l.pdf',
    thumbnail: '/thumbnails/sony-bravia.jpg',
    pages: 156,
    language: 'English',
    fileSize: '15.8 MB',
    uploadDate: '2024-01-08',
    views: 8970,
    downloads: 4560,
  },
  {
    id: '4',
    title: 'LG Front Load Washer User Manual',
    brand: 'LG',
    category: 'Washing Machines',
    model: 'WM4000HWA',
    description: 'Complete guide for LG TurboWash 360 front load washing machine. Installation, cycle selection, troubleshooting, and maintenance tips.',
    pdfUrl: '/manuals/lg-washer.pdf',
    thumbnail: '/thumbnails/lg-washer.jpg',
    pages: 98,
    language: 'English',
    fileSize: '5.4 MB',
    uploadDate: '2024-01-05',
    views: 6540,
    downloads: 3210,
  },
  {
    id: '5',
    title: 'Canon EOS R5 Mark II User Guide',
    brand: 'Canon',
    category: 'Cameras',
    model: 'EOS R5 II',
    description: 'Professional camera manual for Canon EOS R5 Mark II. Covers shooting modes, video recording, menu settings, and lens compatibility.',
    pdfUrl: '/manuals/canon-eos-r5.pdf',
    thumbnail: '/thumbnails/canon-r5.jpg',
    pages: 312,
    language: 'English',
    fileSize: '22.1 MB',
    uploadDate: '2024-01-02',
    views: 11230,
    downloads: 6780,
  },
  {
    id: '6',
    title: 'Bosch Series 8 Dishwasher Manual',
    brand: 'Bosch',
    category: 'Kitchen Appliances',
    model: 'SMS8YCI01E',
    description: 'Operating instructions for Bosch Series 8 free-standing dishwasher. Includes program selection, loading tips, and error code guide.',
    pdfUrl: '/manuals/bosch-dishwasher.pdf',
    thumbnail: '/thumbnails/bosch-dishwasher.jpg',
    pages: 76,
    language: 'English',
    fileSize: '4.2 MB',
    uploadDate: '2023-12-28',
    views: 4320,
    downloads: 2150,
  },
];

export function searchManuals(query: string): Manual[] {
  const lowerQuery = query.toLowerCase();
  return manuals.filter(
    (manual) =>
      manual.title.toLowerCase().includes(lowerQuery) ||
      manual.brand.toLowerCase().includes(lowerQuery) ||
      manual.model.toLowerCase().includes(lowerQuery) ||
      manual.category.toLowerCase().includes(lowerQuery)
  );
}

export function getManualById(id: string): Manual | undefined {
  return manuals.find((manual) => manual.id === id);
}

export function getManualsByBrand(brandSlug: string): Manual[] {
  const brand = brands.find((b) => b.slug === brandSlug);
  if (!brand) return [];
  return manuals.filter((m) => m.brand.toLowerCase() === brand.name.toLowerCase());
}

export function getManualsByCategory(categorySlug: string): Manual[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return manuals.filter((m) => m.category.toLowerCase() === category.name.toLowerCase());
}

export function getRelatedManuals(manual: Manual, limit = 4): Manual[] {
  return manuals
    .filter((m) => m.id !== manual.id && (m.brand === manual.brand || m.category === manual.category))
    .slice(0, limit);
}
