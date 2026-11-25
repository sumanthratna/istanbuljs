import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: "v8",
      include: ["packages/**/src/**/*.ts"],
      reporter: [
        "text",
        fileURLToPath(
          new URL(
            "./packages/istanbul-lib-report/dist/reports/github-actions/index.mjs",
            import.meta.url,
          ),
        ),
      ],
    },
    projects: ["packages/*/vitest.config.*"],
  },
});
