/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/noneuclidjs-docs' : '',
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/noneuclidjs-docs' : '',
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      ...defaultPathMap,
    };
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'page.mdx', 'page.md'],
  images: {
    loader: 'imgix',
    path: '',
  },
  swcMinify: false,
};

const withTM = require('next-transpile-modules')(['three']);
module.exports = withTM(nextConfig);
