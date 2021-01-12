import React from "react";
import { render, screen } from "@testing-library/react";
import WidgetBody from "components/Widget/WidgetBody";

test("renders widget body content", () => {
  render(
    <WidgetBody>
      <p>widget body content</p>
      <button disabled>button name</button>
    </WidgetBody>
  );

  const text = screen.getByText(/widget body content/i);
  const button = screen.getByRole("button");

  expect(text).toBeInTheDocument;
  expect(button).toBeInTheDocument;
  expect(button).toBeDisabled();
});
