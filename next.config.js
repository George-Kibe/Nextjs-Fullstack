/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'images.pexels.com',
            'buenasapp-images-bucket161901-dev.s3.eu-west-1.amazonaws.com',
            'buenare-images-bucket.s3.eu-west-1.amazonaws.com',
            'buenas-portfolio-bucket.s3.eu-west-1.amazonaws.com'
        ]
    }
}

module.exports = nextConfig
