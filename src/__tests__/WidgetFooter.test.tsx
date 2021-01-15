import React from "react";
import { render, screen } from "@testing-library/react";
import WidgetFooter from "components/Widget/WidgetFooter";

test("renders footer without text", () => {
  render(<WidgetFooter selectedStation={null} />);

  expect(screen.queryByText(/currently playing/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/fm/i)).not.toBeInTheDocument();
});

test("renders footer with text", () => {
  render(
    <WidgetFooter
      selectedStation={{ id: 2, title: "dribbble fm", frequency: "77" }}
    />
  );

  expect(screen.queryByText(/currently playing/i)).toBeInTheDocument();
  expect(screen.queryByText(/dribbble fm/i)).toBeInTheDocument();
});
