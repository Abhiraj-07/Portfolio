import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const nextConfig = {
  output: 'export',
  images: {
    domains: ['raw.githubusercontent.com'],
    unoptimized: true, 
  },
};

export default nextConfig;
