# Jest x Typescript

## はじめましょう

- [はじめましょう](https://jestjs.io/ja/docs/getting-started)
- [ts-jest](https://github.com/kulshekhar/ts-jest)

[はじめましょう#TypeScript を使用する](https://jestjs.io/ja/docs/getting-started#typescript-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B)のセクションによると、Jest はテストの実行時にテストコードの型検査を行わないとのこと。

ここでは`ts-jest`を使用して、型チェックを行うものとする。

```
yarn add --dev jest ts-jest @types/jest
yarn ts-jest config:init
yarn add --dev react-test-renderer @types/react-test-renderer
```
