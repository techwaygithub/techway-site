import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',                // genera HTML estático en /out
  images: { unoptimized: true },   // next/image sin optimizador (Pages no corre server)
  basePath: isProd ? '/techway-site' : '',   // usa el nombre del repo
  assetPrefix: isProd ? '/techway-site' : '', // sin barra final para evitar dobles barras
  trailingSlash: true,             // opcional, evita 404 raros
};

export default nextConfig;
