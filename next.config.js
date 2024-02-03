/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/posts",
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
