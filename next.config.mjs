/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Statikus export: a GitHub Pages csak kész HTML-t tud kiszolgálni.
  // A SQLite adatbázist a build során olvassa az oldal, futásidőben nincs szerver.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
