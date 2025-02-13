import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Ensure jsdom is being used for DOM testing
  },
});
