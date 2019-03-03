import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import "jest-dom/extend-expect";

import Search from "./Search";

afterEach(cleanup);

describe("Search component test", () => {
  it("it should render input element", () => {
    const { getByTestId } = render(<Search />);
    expect(getByTestId("search-textbox")).toBeInTheDocument();
  });

  it("it should render  a search button", () => {
    const { getByText } = render(<Search />);
    expect(getByText("Search")).toBeInTheDocument();
  });
});
