export const CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar', region: 'United States' },
  { code: 'EUR', symbol: '€', name: 'Euro', region: 'Eurozone' },
  { code: 'GBP', symbol: '£', name: 'Pound Sterling', region: 'United Kingdom' },
  { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee', region: 'Pakistan' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', region: 'India' },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', region: 'United Arab Emirates' },
  { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal', region: 'Saudi Arabia' },
  { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar', region: 'Canada' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', region: 'Australia' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', region: 'Japan' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', region: 'China' },
  { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', region: 'Switzerland' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', region: 'Singapore' },
  { code: 'ZAR', symbol: 'R', name: 'South African Rand', region: 'South Africa' },
  { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', region: 'New Zealand' },
  { code: 'BDT', symbol: '৳', name: 'Bangladeshi Taka', region: 'Bangladesh' }
];

export const currencyOptions = CURRENCIES.map(({ code, symbol, name }) => `<option value="${symbol}">${code} — ${name} (${symbol})</option>`).join('');
