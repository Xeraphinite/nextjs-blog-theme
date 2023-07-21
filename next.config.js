// next.config.js
const withMDX = require('@next/mdx')({
    extension: /\.mdx$/,
  });

  const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
    
  }
   
  // Merge MDX config with Next.js config
  module.exports = withMDX(nextConfig)