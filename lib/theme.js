export const themeConfig = {
  colorSchemes: {
    light: {
      background: "hsl(0 0% 100%)",
      foreground: "hsl(0 0% 3.9%)",
      card: "hsl(0 0% 100%)",
      cardForeground: "hsl(0 0% 3.9%)",
      popover: "hsl(0 0% 100%)",
      popoverForeground: "hsl(0 0% 3.9%)",
      primary: "hsl(0 0% 9%)",
      primaryForeground: "hsl(0 0% 98%)",
      secondary: "hsl(0 0% 96.1%)",
      secondaryForeground: "hsl(0 0% 9%)",
      muted: "hsl(0 0% 96.1%)",
      mutedForeground: "hsl(0 0% 45.1%)",
      accent: "hsl(0 0% 96.1%)",
      accentForeground: "hsl(0 0% 9%)",
      destructive: "hsl(0 84.2% 60.2%)",
      destructiveForeground: "hsl(0 0% 98%)",
      border: "hsl(0 0% 89.8%)",
      input: "hsl(0 0% 89.8%)",
      ring: "hsl(0 0% 3.9%)"
    },
    dark: {
      background: "hsl(0 0% 3.9%)",
      foreground: "hsl(0 0% 98%)",
      card: "hsl(0 0% 3.9%)",
      cardForeground: "hsl(0 0% 98%)",
      popover: "hsl(0 0% 3.9%)",
      popoverForeground: "hsl(0 0% 98%)",
      primary: "hsl(0 0% 98%)",
      primaryForeground: "hsl(0 0% 9%)",
      secondary: "hsl(0 0% 14.9%)",
      secondaryForeground: "hsl(0 0% 98%)",
      muted: "hsl(0 0% 14.9%)",
      mutedForeground: "hsl(0 0% 63.9%)",
      accent: "hsl(0 0% 14.9%)",
      accentForeground: "hsl(0 0% 98%)",
      destructive: "hsl(0 62.8% 30.6%)",
      destructiveForeground: "hsl(0 0% 98%)",
      border: "hsl(0 0% 14.9%)",
      input: "hsl(0 0% 14.9%)",
      ring: "hsl(0 0% 83.1%)"
    }
  },
  
  // Fonts configuration
  fonts: {
    sans: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    mono: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
    heading: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
  },
  
  // Define font sizes
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  
  // Border radius values
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  
  // Spacing scale
  spacing: {
    px: "1px",
    0: "0",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem"
  }
};

// Function to access theme values programmatically
export function getThemeValue(path, theme = "light") {
  const parts = path.split(".");
  let result = themeConfig;
  
  // Special case for color schemes
  if (parts[0] === "colors" && parts.length > 1) {
    return themeConfig.colorSchemes[theme][parts[1]];
  }
  
  for (const part of parts) {
    if (result[part] === undefined) {
      console.warn(`Theme value not found: ${path}`);
      return undefined;
    }
    result = result[part];
  }
  
  return result;
}

export default themeConfig;