# node-console-app-test
simple test to make sure I can run a console app using plain ol' javascrip/node syntax

to create another one of these input the following in the terminal:

1. Create folder ``` mg cli-app ```
2. input command with the -y to create a package.json  ``` npm init -y ```
3. from console, install any dependencies like chalk `npm i chalk`
4. Open your repo in VS code using ``` code . ```
5. Go to package.json and add ```"type": "module"``` right below `"main": "index.js"`
    <br>*This will allow you to use the import/export syntax rather than the classic require*
    <br>*ie: `import foo from "bar";` instead of `const foo = require('bar)`
7. create a new ` index.js `
8. add a shebang at the top of index.js to tell the OS to execute code with node.js version installed
    <br> `#!/usr/bin/env node`
10. Output can be done using your regular `console.log()`
11. To run, in your terminal: `node . ` or `node index.js`
