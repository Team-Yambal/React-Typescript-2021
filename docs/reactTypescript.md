## React x TypeScript : 最初の一歩

[Create React App](https://create-react-app.dev/)[^1]を使用しないで React x Typescript 環境を構築します。

↓ パッケージの管理を開始します（プロジェクトの構成を開始する空のディレクトリで）

```
yarn
```

## 必要なパッケージをプロジェクトに追加する

↓ webpack[^2]をプロジェクトに追加する

```
yarn add --dev webpack webpack-cli webpack-dev-server html-webpack-plugin
```

↓ Babel[^3]をプロジェクトに追加する

```
yarn add --dev @babel/core @babel/runtime @babel/plugin-transform-runtime @babel/preset-env babel-loader @babel/preset-react
```

↓ React[^4]をプロジェクトに追加する

```
yarn add react react-dom
```

## とりあえず、動くか確認

まずは JsvsSctipt（TypeScript ではなく）で動作確認しましょう
`index.html`, `app.js`, `Hello.jsx`を作成

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

# Step 2

## typescript の環境セットアップ

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

### tsconfig.json の編集

typescript の初期設定コマンドで`tsconfig.json`を作成。

```
yarn tsc --init
```

[tsconfig.json を編集](https://github.com/yambal/React-Typescript-2021/blob/e6206bd16528cd8fd1aedf3faae9142ab89f650a/tsconfig.json)

### コードの変更

`app.js`, `Hello.jsx`を Typescript 化

- [app.js を app.tsx に](https://github.com/yambal/React-Typescript-2021/blob/e6206bd16528cd8fd1aedf3faae9142ab89f650a/src/app.tsx)
- [Hello.jsx を Hello.tsx に](https://github.com/yambal/React-Typescript-2021/blob/e6206bd16528cd8fd1aedf3faae9142ab89f650a/src/Hello.tsx)

## npm スクリプトの変更

並列実行モジュールを追加

```
yarn add --dev npm-run-all
```

### npm-script

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

## 開発サーバで起動

```
yarn start
```

# Step 3

[Create React App を使わずに React & TypeScript 環境を作る(2021 年 7 月) その ３](https://enjoyworks.jp/tech-blog/7793)

## ESlint の導入

ESLint 本体、webpack のプラグイン

```
yarn add --dev eslint eslint-webpack-plugin
```

### webpack.config.js

`eslint-webpack-plugin` を組み込む

```
const ESLintPlugin = require("eslint-webpack-plugin");
...
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    // 追加
    new ESLintPlugin({
      extensions: ["ts", "tsx", "js"],
    }),
  ],
...
```

### .eslintrc.js を作成する

```
yarn eslint --init

√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JavaScript
...
√ Would you like to install them now with npm? · No / Yes
```

#### .eslintrc.js を編集する

```
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    // 追加
    project: "./tsconfig.json",　
  },
  // 追加
  settings: {
    react: {
      version: "17",
    },
  },
```

### npm-script

```
...
  "scripts": {
    ...
    "lint": "eslint src",
    "lint:fix": "eslint --fix src"
  },
...
```

lint

```
yarn lint
```

fix

```
yarn lint:fix
```

## Prettier の導入

Prettier 本体、eslint 向けの重複ルールを無効化するための設定と ESLint 実行時に prettier を実行するためのプラグイン

```
yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
```

### Prettier の設定ファイル

```.prettierrc
{
    "tabWidth": 2,
    "useTabs": false,
    "semi": true
}
```

### ESLint に Prettier を組み込む

.eslintrc.js

```.eslintrc.js
module.exports = {
  ...
  extends: [
    ...
    "plugin:prettier/recommended",
    "prettier",
  ],
  ...
};
```

### vscode に拡張機能をインストール

`dbaeumer.vscode-eslint`:ESLint
`esbenp.prettier-vscode`:Prettir - Code formatter

#### 拡張機能の設定

VSCode のコマンドパレット `settings json`

```
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
```

## 参考

- [Create React App を使わずに React & TypeScript 環境を作る(2021 年 3 月) その１](https://enjoyworks.jp/tech-blog/6889)
- [Create React App を使わずに React & TypeScript 環境を作る(2021 年 5 月) その 2](https://enjoyworks.jp/tech-blog/7337)

[^1]: Facrbook が提供している CLI ツールで用意されたテンプレートを元にアプリケーションの雛形を生成してくれるものです。
[^2]: モジュールバンドラ：複数のファイルを１つにまとめる
[^3]: JavaScript トランスコンパイラ：現時点ではブラウザでは使用できないコードを下位互換の JsvaScript に変換する
[^4]: Facebook とコミュニティによって開発されているユーザインタフェース構築のための JavaScript ライブラリ
