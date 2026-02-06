#!/usr/bin/env node
/**
 * Copies static assets into public/ for Cloudflare Workers deployment.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const files = [
  "index.html",
  "script.js",
  "styles.css",
  "13979.jpg",
  "14692.jpg",
];

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

files.forEach((file) => {
  const src = path.join(root, file);
  const dest = path.join(publicDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log("Copied:", file);
  }
});
