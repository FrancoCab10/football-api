const fs = require('fs')
const packageJson = require('./package.json')

let packages = {
  ...packageJson,
  main: 'server.js',
  scripts: {
    start: 'node ./server.js',
  },
  devDependencies: {}
}

fs.writeFileSync('dist/package.json', JSON.stringify(packages, null, 2))