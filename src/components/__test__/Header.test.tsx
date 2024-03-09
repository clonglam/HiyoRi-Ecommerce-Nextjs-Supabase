import { render, screen } from "@testing-library/react";
import Header from "../layouts/Header";

it("should render Component Section Header", () => {
  render(
    <Header heading={"Section Header"} description={"section description."} />,
  );
  expect(screen.getByText("Section Header")).toBeInTheDocument();
  expect(screen.getByText("section description.")).toBeInTheDocument();
});
