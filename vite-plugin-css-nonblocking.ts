import type { Plugin } from 'vite';

/**
 * Vite plugin to make CSS non-blocking
 * Converts stylesheet links to preload + async load pattern
 * Runs AFTER Vite injects CSS links
 */
export function cssNonBlocking(): Plugin {
  return {
    name: 'css-non-blocking',
    apply: 'build', // Only run in production build
    enforce: 'post', // Run after Vite's default HTML processing
    transformIndexHtml(html) {
      // Convert blocking stylesheet links to async loading pattern
      return html.replace(
        /<link([^>]*)\s+rel=["']stylesheet["']([^>]*)\s+href=["']([^"]+\.css)["']([^>]*)>/gi,
        (match, before, middle, href, after) => {
          // Skip if already processed or is a font stylesheet
          if (match.includes('data-async') || match.includes('fonts.googleapis.com') || match.includes('onload')) {
            return match;
          }
          
          // Create preload + async load pattern
          return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
        }
      );
    },
  };
}

