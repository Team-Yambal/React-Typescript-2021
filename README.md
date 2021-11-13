# React-Typescript-2021

```
yarn
```

## Babel の環境セットアップ
### webpack
```
yarn add --dev webpack webpack-cli webpack-dev-server html-webpack-plugin
```

### Babel
```
yarn add --dev @babel/core @babel/runtime @babel/plugin-transform-runtime @babel/preset-env babel-loader
```

## React

```
yarn add react react-dom
```

```
yarn add --dev @babel/preset-react
```

## Test
``index.html``, ``app.js``, ``Hello.jsx``を作成
### webpack.config.js
```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/app.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    }
  },
};
```
### ビルド

```
yarn webpack --config webpack.config.js
```
### 開発サーバー
```
yarn webpack serve --config webpack.config.js
```
### npm-script

```package.json
...
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "start": "webpack serve --config webpack.config.js"
  }
```

## Step 2
[Create React App を使わずに React & TypeScript 環境を作る(2021 年 5 月) その 2](https://enjoyworks.jp/tech-blog/7337)

### typescript の環境セットアップ
babel の typescript プリセット、typescript、react の型定義ファイル
```
yarn add --dev @babel/preset-typescript typescript @types/react @types/react-dom
```

webpack.config.js
```webpack.config.js
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".ts", ".tsx", ".js"], // ts, tsx追加、jsx削除
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/], // js -> ts
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",  // <- 追加
              ],
            },
          },
        ],
      },
    ],
```
#### tsconfig.json の編集
typescript の初期設定コマンドで``tsconfig.json``を作成。
```
yarn tsc --init
```
[tsconfig.jsonを編集](https://github.com/yambal/React-Typescript-2021/blob/e6206bd16528cd8fd1aedf3faae9142ab89f650a/tsconfig.json)

### コードの変更
``app.js``, ``Hello.jsx``をTypescript化
- [app.jsをapp.tsxに](https://github.com/yambal/React-Typescript-2021/blob/e6206bd16528cd8fd1aedf3faae9142ab89f650a/src/app.tsx)
- [Hello.jsxをHello.tsxに](https://github.com/yambal/React-Typescript-2021/blob/e6206bd16528cd8fd1aedf3faae9142ab89f650a/src/Hello.tsx)


### npm スクリプトの変更
並列実行モジュール
```
yarn add --dev npm-run-all
```

#### npm-script
```package.json
  "scripts": {
    "tsc": "tsc",
    "tsc:watch": "tsc -w",
    "webpack:build": "webpack --config webpack.config.js",
    "webpack:watch": "webpack --watch --config webpack.config.js",
    "webpack:start": "webpack serve --config webpack.config.js",
    "build": "run-s tsc webpack:build",
    "watch": "run-p tsc:watch webpack:watch",
    "start": "run-p tsc:watch webpack:start"
  }
```

### 開発サーバで起動
```
yarn start
```
