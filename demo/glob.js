const glob = require('glob')
const path = require('path')
const fs = require('fs-extra')

// fs.removeSync(path.resolve(__dirname, '../dist/a/a.js'))
console.log(fs.pathExistsSync(path.resolve(__dirname, '../dist/a/a.js')))
console.log(fs.pathExistsSync(path.resolve(__dirname, '../dist/c')))
