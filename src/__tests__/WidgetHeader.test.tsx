import React from "react";
import { render, screen } from "@testing-library/react";
import WidgetHeader from "components/Widget/WidgetHeader";

test("renders widget header", () => {
  render(<WidgetHeader />);

  const buttons = screen.queryAllByRole("button");
  const title = screen.getByText(/stations/i);

  expect(buttons.length).toBe(2);
  expect(title).toBeTruthy;
});
