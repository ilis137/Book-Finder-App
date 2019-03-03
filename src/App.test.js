import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import "jest-dom/extend-expect";
import axios from "axios";

import App from "./App";
import Search from "./components/search/Search";
import movieCard from "./components/moviecard/moviecard";
afterEach(cleanup);

jest.mock("axios");

describe("App Test", () => {
  it("it should render title Book Finder", () => {
    const { getByText } = render(<App />);
    expect(getByText("Book Finder")).toBeInTheDocument();
  });
  it("it should render a error if no query entered in search field", () => {
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByText("Search"));
    expect(getByTestId("noqueryerror")).toHaveTextContent(
      "First please enter a query!"
    );
  });
});
