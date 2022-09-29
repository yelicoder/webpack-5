# webpack-5
##### Webpack 5 Fundamentals by Joe Eames June 22 2022 PluralSight
#### Projects
1. simpleBuild:
a. added index.html and index.js under /src. 
b. install webpack and webpack-cli using the following command:
```
npm i webpack webpack-cli -D
```
c. build the app useing the following command
```
npx webpack
```
/dist is generated and main.js is inside the folder
d. auto regenerated main.js
```
nxp webpack --watch
```
e. configure scripts in package.json
```
"webpack": "webpack --watch"
```
2. configuration: default configuration of webpack.config.js
3. sourceMap
4. webpackDevServer: runs webpack in watch mode. Provides http server just for front end code. Only running in memory
```
npm i webpack-dev-server -D
```
```
npx webpack serve
```
main.js is not genereted under /dist because it is in memory
5. multipleFiles: two entry points, both are in main.js. Both will be called.


