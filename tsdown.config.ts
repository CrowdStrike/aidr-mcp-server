import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src/index.ts'],
  clean: true,
  dts: false,
  fixedExtension: true,
  format: ['esm'],
  hash: false,
});
