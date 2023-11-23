/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    prependData: `
      @import './src/app/variables';
      @import './src/app/mixins';
    `,
  },
};

module.exports = nextConfig;
