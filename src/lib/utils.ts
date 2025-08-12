/**
 * Get the correct path for static assets considering basePath
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/techway-site' : '';
  
  // Remove leading slash if present and add basePath
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}
