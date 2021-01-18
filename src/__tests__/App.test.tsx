import React from "react";
import { act, screen, render } from "@testing-library/react";
import { stationsList } from "utils/data";
import App from "../App";

global.fetch = jest.fn();

test("renders app without crashing", async () => {
  await act(async () => {
    render(<App />);
  });

  expect(screen.getByText("Stations")).toBeInTheDocument;
});

test("fetches and displays stations from API", async () => {
  const data = [{ id: 1, title: "New FM", frequency: "32" }];

  jest.spyOn(global, "fetch").mockImplementation(
    (): Promise<any> => {
      return Promise.resolve({
        json: () => Promise.resolve(data)
      });
    }
  );

  await act(async () => {
    render(<App />);
  });

  expect(screen.getByText("New FM")).toBeInTheDocument();
  expect(screen.getByText("32")).toBeInTheDocument();

  expect(screen.queryByText(/putin fm/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/error/i)).not.toBeInTheDocument();

  stationsList.forEach(station => {
    const { title, frequency } = station;

    expect(screen.queryByText(new RegExp(title, "i"))).not.toBeInTheDocument();
    expect(
      screen.queryByText(new RegExp(frequency, "i"))
    ).not.toBeInTheDocument();
  });
});

test("displays error and default stations on request fail", async () => {
  jest.spyOn(global, "fetch").mockImplementation(
    (): Promise<any> => {
      return Promise.resolve({
        json: () => Promise.reject()
      });
    }
  );

  await act(async () => {
    render(<App />);
  });

  expect(screen.getByText(/failed to load/i)).toBeInTheDocument();
  expect(screen.queryByText(/putin fm/i)).toBeInTheDocument();
  expect(screen.queryByText(/doge fm/i)).toBeInTheDocument();

  stationsList.forEach(station => {
    const { title, frequency } = station;

    expect(screen.queryByText(new RegExp(title, "i"))).toBeInTheDocument();
    expect(screen.queryByText(new RegExp(frequency, "i"))).toBeInTheDocument();
  });

  expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
});
