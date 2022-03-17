import { defineConfig } from 'rollup'
import path from 'path'
import { babel } from '@rollup/plugin-babel'
import ts from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const resolvePath = (...args) => path.resolve(__dirname, ...args)

export default defineConfig({
  input: resolvePath('../src/index.ts'),
  plugins: [
    ts(),
    babel({
      babelHelpers: 'bundled'
    }),
    nodeResolve(),
    commonjs(),
    terser()
  ],
  output: [
    {
      file: resolvePath('../dist/index.esm.js'),
      format: 'esm'
    },
    {
      file: resolvePath('../dist/index.js'),
      format: 'cjs',
      exports: 'default'
    }
  ]
})
