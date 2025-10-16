# Currency Utilities

This module ensures consistent British Pound (GBP) formatting across the Van Borg Limited website.

## Usage

```typescript
import { formatCurrency, CURRENCY_SYMBOL } from '../utils/currency';

// Format numbers as GBP
formatCurrency(1999); // "£1,999"
formatCurrency(999, { minimumFractionDigits: 2 }); // "£999.00"

// Use currency symbol constant
const price = `${CURRENCY_SYMBOL}1,999`; // "£1,999"
```

## Important Notes

- **ALL prices must be in GBP (£) format only**
- Never use USD ($) or other currencies
- Use the `formatCurrency()` utility for consistent formatting
- The HTML includes proper meta tags and JSON-LD schema for GBP currency
- Search engines will understand we're a UK business using British Pounds

## Meta Tags Added

- `currency`: GBP
- `locale`: en-GB  
- `geo.region`: GB
- `geo.country`: United Kingdom
- JSON-LD structured data with `priceCurrency: "GBP"`

This ensures proper SEO and prevents currency confusion for UK customers.
