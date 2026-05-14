import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts
export default defineConfig({
  vite: {
    base: "/FinKorekt/",
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});
