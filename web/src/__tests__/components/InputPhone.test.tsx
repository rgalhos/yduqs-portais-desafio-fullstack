import * as React from "react";
import "@testing-library/jest-dom";
import { InputPhone } from "@/components/InputPhone/InputPhone";
import { render, screen, fireEvent } from "@testing-library/react";

describe("InputPhone", () => {
  it("renders with the provided label", () => {
    render(<InputPhone label="Celular" name="phone" onChange={() => {}} />);
    expect(screen.getByLabelText("Celular")).toBeInTheDocument();
  });

  it("applies phone mask correctly on input for 8-digit phones", () => {
    const handleInput = jest.fn();
    render(<InputPhone label="Celular" name="phone" onChange={handleInput} />);

    const input = screen.getByLabelText("Celular") as HTMLInputElement;

    fireEvent.input(input, { target: { value: "1143214321" } });

    expect(handleInput).toHaveBeenCalledWith({
      target: { name: "phone", value: "(11) 4321-4321" },
    });

    expect(input.value).toBe("(11) 4321-4321");
  });

  it("applies phone mask correctly on input for 9-digit phones", () => {
    const handleInput = jest.fn();
    render(<InputPhone label="Celular" name="phone" onChange={handleInput} />);

    const input = screen.getByLabelText("Celular") as HTMLInputElement;

    fireEvent.input(input, { target: { value: "11943214321" } });

    expect(handleInput).toHaveBeenCalledWith({
      target: { name: "phone", value: "(11) 94321-4321" },
    });

    expect(input.value).toBe("(11) 94321-4321");
  });
});
