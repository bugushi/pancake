# pancake

A simple React boilerplate

### Elements
- state management with `React Context API` instead of `Redux`
- React Router V4 with dynamic imports
- Webpack 4.0
> no local server, develop with charles proxy

> compiles to `/static` folder and watch in `development` mode

> compiles to `/dist` folder and uglify in `production` mode 

- Babel
- Airbnb eslint

### Dependencies
name | domain | description
-- | -- | --
webpack | webpack | 
webpack-cli | webpack | offer `webpack` command in package.json
babel-loader | webpack | compile js or jsx
sass-loader | webpack | compile sass to css
node-sass | webpack | peerdependency of `sass-loader`
css-loader | webpack | Interprets @import and url() like import/require() and will resolve them
style-loader | webpack | Adds CSS to the DOM by injecting a style tag
file-loader | webpack | handle assets such as images, contains `url-loader`
url-loader | webpack | peerdependency of `file-loader`
html-webpack-plugin | webpack | inject bundle js to html file
eslint-loader | webpack | validate js file while webpack compiles
react-dev-utils | webpack | contains eslintFormatter, validate js file
clean-webpack-plugin | webpack | clean `dist` dir before every build
babel-core | babelrc | 
babel-plugin-syntax-dynamic-import | babelrc | compile dynamic import which build in webpack
babel-preset-env | babelrc | equivalent to `babel-preset-latest`, compilations of es2015, es2016 and es2017
babel-preset-react | babel | compile react
eslint | eslint | 
babel-eslint | eslint | used as parser in `.eslintrc` file
eslint-config-airbnb | eslint | eslint standard of airbnb
eslint-plugin-import | eslint | peerdependency of `eslint-config-airbnb`
eslint-plugin-jsx-a11y | eslint | peerdependency of `eslint-config-airbnb`
eslint-plugin-react | eslint | peerdependency of `eslint-config-airbnb`



