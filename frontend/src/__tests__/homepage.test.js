import React from "react";
import Home from "../pages/Home";
import { describe, expect, test, toBe } from "@jest/globals";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

/**
 * Guide: https://reactjs.org/docs/testing-recipes.html
 */

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Links are clickable", () => {
  act(() => {
    render(<Home />, container);
  });
  expect(container.innerHTML).toContain("<a href");
});

it("Homepage welcomes user", () => {
  act(() => {
    render(<Home />, container);
  });
  expect(container.textContent).toContain("Welcome");
});
