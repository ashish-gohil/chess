import { config } from "dotenv";
import path from "path";
import type { NextConfig } from "next";

config({
  path: path.resolve(__dirname, "../../packages/db/.env"),
});

const nextConfig: NextConfig = {
  reactStrictMode: false,
};

export default nextConfig;
