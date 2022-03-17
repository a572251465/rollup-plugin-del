## rollup-plugin-del
> rollup plugin && You can delete packaged directories and customize deletion rules

### install
> $ npm install rollup-plugin-del -D <br/>
> $ yarn add rollup-plugin-del -D <br />
> $ pnpm install rollup-plugin-del -D

### options
- dest
  - default is empty. when not specified. will use output dir/ file. Priority is dir > file
  - if then value exists. This value is preferred
  - It can be a fixed path or a matching path satisfying `glob`
  - example
    - path.resolve(__dirname, "./dist/\*\*/*.js") OR
    - path.resolve(__dirname, "dist")

### use
```javascript
import del from 'rollup-plugin-del'
export default defineConfig({
  input: resolvePath('../src/index.ts'),
  plugins: [
    del(),
//  del({dest: path.resolve(__dirname, "dist/**/*.js")})
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
    }
  ]
})
```
