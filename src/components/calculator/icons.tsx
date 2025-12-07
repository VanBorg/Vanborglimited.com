// Custom SVG Icon Components for Calculator
export const ChevronRight = ({ className = "w-5 h-5", size }: { className?: string; size?: number }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={size ? { width: size, height: size } : undefined}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const CheckCircle = ({ className = "w-5 h-5", size }: { className?: string; size?: number }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={size ? { width: size, height: size } : undefined}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const TrendingUp = ({ className = "w-5 h-5", size }: { className?: string; size?: number }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={size ? { width: size, height: size } : undefined}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export const AlertCircle = ({ className = "w-5 h-5", size }: { className?: string; size?: number }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={size ? { width: size, height: size } : undefined}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

export const Mail = ({ className = "w-5 h-5", size }: { className?: string; size?: number }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={size ? { width: size, height: size } : undefined}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const Calendar = ({ className = "w-5 h-5", size }: { className?: string; size?: number }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={size ? { width: size, height: size } : undefined}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
