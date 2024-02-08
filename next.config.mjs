/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    relay: {
      src: "./",
      schema: "schema.graphql",
      language: "typescript",
      artifactDirectory: "__generated__",
      nodeInterfaceIdField: "nodeId",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_S3_REGION}.amazonaws.com`,
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@aws-sdk/client-s3", "sharp"],
  },
}

export default nextConfig
