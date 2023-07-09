const dotenv = require('dotenv')
dotenv.config()

const nextConfig = {
  reactStrictMode: false, // enabled react-strict mode

  images: {
    domains: [
      'i.ibb.co','avatars.githubusercontent.com'
    ],
  },

};

module.exports = nextConfig;
