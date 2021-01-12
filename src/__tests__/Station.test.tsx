import React from "react";
import { render, screen } from "@testing-library/react";
import Station from "components/Station";

test("renders station info", () => {
  render(<Station title="Station FM" frequency="78,9" />);

  expect(screen.getByText(/station fm/i)).toBeInTheDocument;
  expect(screen.getByText(/78,9/i)).toBeInTheDocument;
});
