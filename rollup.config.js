import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

import pkg from "./package.json" assert { type: "json" };

export default {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "esm",
    },
  ],
  plugins: [
    resolve({
      moduleDirectories: ["node_modules"],
    }),
    typescript({
      compilerOptions: {
        lib: ["es2019"],
        target: "es6",
        declaration: true,
        declarationDir: "dist/types",
      },
    }),
  ],
};
