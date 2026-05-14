import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts
export default defineConfig({
  vite: {
    base: "/FinKorekt/",
  },

  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index",
      },
    },
    server: { entry: "index" },
  },
});
