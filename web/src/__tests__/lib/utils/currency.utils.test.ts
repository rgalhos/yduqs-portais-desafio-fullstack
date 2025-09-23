import { formatCurrency } from "@/lib/utils/currency.util";

// A função Intl.NumberFormat não retorna espaços, mas sim o caractere '\xa0' (non-breaking space)
// https://stackoverflow.com/questions/66409161/how-to-tell-jest-that-spaces-are-in-fact-spaces
describe("formatCurrency", () => {
  it("should format zero correctly", () => {
    expect(formatCurrency(0)).toBe("R$\xa00,00");
  });

  it("should format integers correctly", () => {
    expect(formatCurrency(1234.0)).toBe("R$\xa01.234,00");
  });

  it("should format decimal numbers correctly", () => {
    expect(formatCurrency(1234.56)).toBe("R$\xa01.234,56");
  });

  it("should format round decimal places correctly", () => {
    expect(formatCurrency(1.009)).toBe("R$\xa01,01");
    expect(formatCurrency(1.001)).toBe("R$\xa01,00");
  });
});
