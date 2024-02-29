module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bayut-production.s3.eu-central-1.amazonaws.com',
            },
        ],
    },
};
