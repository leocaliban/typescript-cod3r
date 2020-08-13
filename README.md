# Curso TypeScript

## Executar arquivo

* tsc arquivo.ts
    * tsc -w (monitorar alterações no arquivo)
* node arquivo.js
    * criar script "start" para dependência live-server

## Executar com code runner (extensão)

* instalar `npm i -g ts-node`
* executar arquivo com `ctrl + alt + n`

## TsConfig Links

### :globe_with_meridians: [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

### :globe_with_meridians: [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

### :globe_with_meridians: [Gulp](https://www.typescriptlang.org/docs/handbook/gulp.html)

### :globe_with_meridians: [TypeSearch](https://microsoft.github.io/TypeSearch/)

## Gulp

Dependências

`npm i --save-dev gulp typescript browserify tsify vinyl-source-stream del gulp-uglify gulp-rename`

## Webpack

Dependências

`npm i -D webpack webpack-cli webpack-dev-server copy-webpack-plugin typescript ts-loader jquery @types/jquery`

### Links

#### :globe_with_meridians: [Webpack + TypeScript setup](https://webpack.js.org/guides/typescript/)


#### :globe_with_meridians: [Integrating with Build Tools](https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html#webpack)

## React

Criação do projeto

`npx create-react-app ts-react --typescript`
