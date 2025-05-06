/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true
	},
	typescript: {
		ignoreBuildErrors: true
	},
	images: {
		domains: ['placeholder.com'],
		unoptimized: true
	},
	sassOptions: {
		includePaths: ['./styles'],
		prependData: `@import "variables"; @import "mixins";`
	}
};

export default nextConfig;
