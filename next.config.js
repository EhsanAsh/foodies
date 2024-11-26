/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ehsanash-nextjs-demo-users-image.s3.us-east-2.amazonaws.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
