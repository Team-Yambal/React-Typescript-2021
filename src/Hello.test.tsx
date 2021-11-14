import React from "react";
import renderer from "react-test-renderer";
import Hello from "./Hello";

test("renders learn react link", () => {
  const component = renderer.create(<Hello />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
