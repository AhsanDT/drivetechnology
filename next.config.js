/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['possible-probable-crown.media.strapiapp.com']
  },
};

module.exports = nextConfig;

// domains: ["localhost:1337", "localhost"],
// images: {
//   remotePatterns: [
//   {
//     protocol: 'http',
//     hostname: 'localhost'
//   }  
//   ],
// },