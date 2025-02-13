import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FortuneCookie from "../components/FortuneCookie";

it("Should see an element with the text Click to reveal your fortune", () => {
  render(<FortuneCookie fortunes={[]} cookieType={""} />);

  const cookieText = screen.getAllByText("Click to reveal your fortune");

  expect(cookieText).toBeDefined();
});
