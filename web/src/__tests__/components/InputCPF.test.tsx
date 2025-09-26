import * as React from "react";
import "@testing-library/jest-dom";
import { InputCPF } from "@/components/InputCPF/InputCPF";
import { render, screen, fireEvent } from "@testing-library/react";

describe("InputCPF", () => {
  it("renders with the provided label", () => {
    render(<InputCPF label="CPF" name="cpf" onChange={() => {}} />);
    expect(screen.getByLabelText("CPF")).toBeInTheDocument();
  });

  it("applies CPF mask correctly on input", () => {
    const handleInput = jest.fn();
    render(<InputCPF label="CPF" name="cpf" onChange={handleInput} />);

    const input = screen.getByLabelText("CPF") as HTMLInputElement;

    fireEvent.input(input, { target: { value: "12345678900" } });

    expect(handleInput).toHaveBeenCalledWith({
      target: { name: "cpf", value: "123.456.789-00" },
    });

    expect(input.value).toBe("123.456.789-00");
  });
});
