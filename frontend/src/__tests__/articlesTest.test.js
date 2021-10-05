import Home from "../pages/Home";
import React from "react";
import { mount } from "enzyme";
import { describe, expect, test, toBe } from "@jest/globals";
import { render, screen } from "@testing-library/react";

/**
 * @jest-environment jsdom
 */

test("Links are rendered to the page", () => {
  // expect(sum(1, 2)).toBe(3);
});

test("Links are clickable", () => {});

test("Homepage welcomes user", () => {
  render(<Home />);
  const welcome = screen.getByText(/Welcome/i);
  expect(welcome).toBeInTheDocument();
});
