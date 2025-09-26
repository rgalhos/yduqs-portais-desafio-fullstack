import * as React from "react";
import "@testing-library/jest-dom";
import { InputDate } from "@/components/InputDate/InputDate";
import { render, screen, fireEvent } from "@testing-library/react";

describe("InputDate", () => {
  it("renders with the provided label", () => {
    render(<InputDate label="Date" name="date" onChange={() => {}} />);
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
  });

  it("applies date mask correctly on input", () => {
    const handleInput = jest.fn();
    render(<InputDate label="Date" name="date" onChange={handleInput} />);

    const input = screen.getByLabelText("Date") as HTMLInputElement;

    fireEvent.input(input, { target: { value: "27112000" } });

    expect(handleInput).toHaveBeenCalledWith({
      target: { name: "date", value: "27/11/2000" },
    });

    expect(input.value).toBe("27/11/2000");
  });
});
