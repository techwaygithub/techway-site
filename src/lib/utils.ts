/**
 * Get the correct path for static assets considering basePath
 */
export function getAssetPath(path: string): string {
  // In production, we need to include the basePath for static assets
  // since these are not automatically prefixed by Next.js assetPrefix for manual references
  const basePath = process.env.NODE_ENV === 'production' ? '/techway-site' : '';
  
  // Remove leading slash if present and ensure proper formatting
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${basePath}/${cleanPath}`;
}
