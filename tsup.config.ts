import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/binary/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
});
