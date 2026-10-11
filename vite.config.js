import { defineConfig } from "vite";
import { copyFileSync, mkdirSync } from "node:fs";
export default defineConfig({
  base: "./",
  plugins: [
    {
      name: "static-site-files",
      closeBundle() {
        for (const file of ["robots.txt", "sitemap.xml"])
          copyFileSync(file, `dist/${file}`);
        mkdirSync("dist/assets", { recursive: true });
        copyFileSync(
          "assets/anna-patanella-900.webp",
          "dist/assets/anna-patanella-900.webp",
        );
      },
    },
  ],
  build: {
    rolldownOptions: {
      onwarn(warning, defaultHandler) {
        if (
          warning.code === "MODULE_LEVEL_DIRECTIVE" &&
          warning.message.includes("use client")
        )
          return;
        defaultHandler(warning);
      },
    },
  },
});
