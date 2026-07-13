export const GOLD_RATES = {
  '22K': { price: 14350, change: +120, unit: 'per gram' },
  '24K': { price: 15600, change: +145, unit: 'per gram' },
  '18K': { price: 10760, change: +90, unit: 'per gram' },
  'Silver': { price: 108, change: -2, unit: 'per gram' },
};

export const CATEGORIES = [
  { id: 'necklaces', name: 'Necklaces', image: '/images/necklace.png', count: 45 },
  { id: 'earrings', name: 'Earrings', image: '/images/earrings.png', count: 68 },
  { id: 'bangles', name: 'Bangles', image: '/images/bangles.png', count: 32 },
  { id: 'rings', name: 'Rings', image: '/images/ring.png', count: 54 },
  { id: 'chains', name: 'Chains', image: '/images/necklace.png', count: 28 },
  { id: 'pendants', name: 'Pendants', image: '/images/necklace.png', count: 41 },
];

export const PRODUCTS = [
  { id: 1, name: 'Lakshmi Gold Necklace', category: 'necklaces', weight: '18.5g', price: 265475, oldPrice: 279000, badge: 'Bestseller', image: '/images/necklace.png' },
  { id: 2, name: 'Antique Temple Earrings', category: 'earrings', weight: '8.2g', price: 117670, oldPrice: null, badge: 'New', image: '/images/earrings.png' },
  { id: 3, name: 'Classic Gold Bangles Set', category: 'bangles', weight: '24.0g', price: 344400, oldPrice: 360000, badge: 'Popular', image: '/images/bangles.png' },
  { id: 4, name: 'Diamond Studded Ring', category: 'rings', weight: '5.5g', price: 89500, oldPrice: null, badge: null, image: '/images/ring.png' },
  { id: 5, name: 'Mangalsutra Chain', category: 'chains', weight: '12.0g', price: 172200, oldPrice: 180000, badge: 'Wedding', image: '/images/necklace.png' },
  { id: 6, name: 'Peacock Gold Pendant', category: 'pendants', weight: '4.8g', price: 68880, oldPrice: null, badge: 'New', image: '/images/necklace.png' },
  { id: 7, name: 'Bridal Choker Necklace', category: 'necklaces', weight: '32.0g', price: 459200, oldPrice: 480000, badge: 'Bridal', image: '/images/necklace.png' },
  { id: 8, name: 'Jhumka Earrings', category: 'earrings', weight: '10.5g', price: 150675, oldPrice: null, badge: null, image: '/images/earrings.png' },
  { id: 9, name: 'Kada Gold Bangles', category: 'bangles', weight: '20.0g', price: 287000, oldPrice: null, badge: 'Traditional', image: '/images/bangles.png' },
  { id: 10, name: 'Engagement Gold Ring', category: 'rings', weight: '6.0g', price: 86100, oldPrice: 90000, badge: null, image: '/images/ring.png' },
  { id: 11, name: 'Rope Chain Gold', category: 'chains', weight: '15.0g', price: 215250, oldPrice: null, badge: null, image: '/images/necklace.png' },
  { id: 12, name: 'Om Gold Pendant', category: 'pendants', weight: '3.2g', price: 45920, oldPrice: 48000, badge: 'Religious', image: '/images/necklace.png' },
];

export const SCHEMES = [
  {
    id: 'daily',
    name: 'Daily Gold',
    icon: '',
    frequency: 'Pay Every Day',
    description: 'Save a small amount daily and watch your gold grow. Perfect for disciplined daily savers.',
    minAmount: 100,
    benefits: ['Start from ₹100/day', 'Bonus gold on completion', 'Zero making charges up to 15%', 'Flexible withdrawal'],
    duration: '365 days',
    bonus: '2%'
  },
  {
    id: 'weekly',
    name: 'Weekly Gold',
    icon: '',
    frequency: 'Pay Every Week',
    description: 'Weekly savings plan that builds your gold reserves steadily over time.',
    minAmount: 500,
    benefits: ['Start from ₹500/week', '3% bonus gold', 'Priority on new collections', 'Free insurance'],
    duration: '52 weeks',
    bonus: '3%'
  },
  {
    id: 'monthly',
    name: 'Monthly Gold',
    icon: '',
    frequency: 'Pay Every Month',
    description: 'Our most popular plan. Monthly installments with maximum benefits on maturity.',
    minAmount: 1000,
    benefits: ['Start from ₹1,000/month', '5% bonus gold', 'Zero making charges up to 20%', 'Free hallmarking', 'EMI option available'],
    duration: '11 months',
    bonus: '5%'
  },
  {
    id: 'quarterly',
    name: 'Quarterly Gold',
    icon: '',
    frequency: 'Pay Every Quarter',
    description: 'Premium quarterly plan for those who prefer larger, less frequent investments.',
    minAmount: 5000,
    benefits: ['Start from ₹5,000/quarter', '7% bonus gold', 'Exclusive bridal collection access', 'Personal gold advisor', 'Free lifetime polishing'],
    duration: '4 quarters',
    bonus: '7%'
  }
];

export const formatPrice = (num) => '₹' + num.toLocaleString('en-IN');
