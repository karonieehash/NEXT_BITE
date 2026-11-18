/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",                      
  basePath: isProd ? "/NEXT_BITE" : "", 
  images: { unoptimized: true },
  trailingSlash: true,                   
};

export default nextConfig;