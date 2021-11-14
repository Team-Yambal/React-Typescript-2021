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

## スナップショットテスト

- [スナップショットテスト](https://jestjs.io/ja/docs/tutorial-react#%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%E3%83%86%E3%82%B9%E3%83%88)
  - `react-test-renderer` でコンポーネントをレンダリングし
  - JSON に変換し
  - `expect([JSON]).toMatchSnapshot()` でとすると
  - テスト実行時（`yarn jest`）に
  - `__snapshots__` 配下に作成する
  - スナップショットに差異があると`snapshot failed`となる
  - スナップショットは、コードの変更に沿ってコミットされるべき
  - スナップショットの更新は `jest -u` で行う

```　Hello.test.tsx
import React from "react";
import renderer from "react-test-renderer";
import Hello from "./Hello";

test("Hello Component Snapshot", () => {
  const component = renderer.create(<Hello />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
```

## DOM のテスト

- [DOM のテスト](https://jestjs.io/ja/docs/tutorial-react#dom-%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88)
  - レンダリングされた DOM を操作したい場合 `react-testing-library ` が必要
    - `TestUtils`は推奨されていない
    - React が 16 以下の場合は `Enzyme` を使う

```
yarn add --dev @testing-library/react
```

```
...
import { render, screen } from "@testing-library/react";

test("Hello Component", () => {
  ...

  // Dom testing
  render(<Hello />);
  const element = screen.getByText(/Hello World/i);
  expect(element).toBeTruthy();
});
```
