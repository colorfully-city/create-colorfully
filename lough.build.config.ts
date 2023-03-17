import { defineConfig } from '@lough/build-cli';

export default defineConfig({
  external: ['@lough/npm-operate' ,'commander'],
  globals: {'@lough/npm-operate': 'loughNpmOperate', 'commander': 'commander'},
  style: false,
  input: 'src/index.ts'
});
