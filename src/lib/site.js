/** Canonical site origin used for SEO tags (matches index.html / sitemap.xml). */
export const SITE_URL = "https://soumyo78.github.io/Soumyo-Portfolio";

/** Absolute canonical URL for a route path ("/" -> site root with trailing slash). */
export const canonical = (path = "/") => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

/** Build a URL for a file in public/assets that respects the Vite base path. */
export const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`;
