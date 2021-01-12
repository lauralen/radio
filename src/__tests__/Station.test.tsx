import React from "react";
import { render, screen } from "@testing-library/react";
import Station from "components/Station";

test("renders collapsed station info", () => {
  render(<Station title="Station FM" frequency="78,9" isSelected={false} />);

  expect(screen.getByText(/station fm/i)).toBeInTheDocument;
  expect(screen.getByText(/78,9/i)).toBeInTheDocument;
});

test("renders expanded station info", () => {
  render(<Station title="Station FM" frequency="78,9" isSelected={true} />);

  expect(screen.getByText(/station fm/i)).toBeInTheDocument;
  expect(screen.getByText(/78,9/i)).toBeInTheDocument;

  const buttons = screen.queryAllByRole("button");
  const image = screen.getByRole("img", { name: /station logo/i });

  expect(buttons.length).toBe(2);
  expect(image).toBeTruthy;
});
