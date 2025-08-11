/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-nextjs_supabase',
  assetPrefix: '/portfolio-nextjs_supabase/',
  images: { unoptimized: true },   // Pages에서 권장
};


export default nextConfig;