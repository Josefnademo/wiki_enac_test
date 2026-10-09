import { defineConfig } from "vite";

// Project site is served under /<repository>/ — assets must be prefixed
export default defineConfig({
  base: "/wiki_enac_test/",
});
