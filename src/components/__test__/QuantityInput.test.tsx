import { render, screen } from "@testing-library/react";
import QuantityInput from "../layouts/QuantityInput";

it("should render Component Section Header", () => {
  render(
    <QuantityInput
      value={0}
      addOneHandler={function (): void {
        throw new Error("Function not implemented.");
      }}
      minusOneHandler={function (): void {
        throw new Error("Function not implemented.");
      }}
    />,
  );

  expect(screen.getByLabelText("add")).toBeInTheDocument();
  expect(screen.getByLabelText("minus")).toBeInTheDocument();

  //   expect(screen.getByText("section description.")).toBeInTheDocument()
});
