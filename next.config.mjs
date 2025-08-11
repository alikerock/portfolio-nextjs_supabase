/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portfolio-nextjs_supabase' : '',
  assetPrefix: isProd ? '/portfolio-nextjs_supabase/' : '',
  images: { unoptimized: true },   // Pages에서 권장
};

export default nextConfig;