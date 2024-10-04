import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Should load contact in contact component", () => {
   render(<Contact />);
   const heading = screen.getByRole("heading");
   expect(heading).toBeInTheDocument();
});

test("Should have a button in contact component", () => {
   render(<Contact />);
   const button = screen.getByRole("button");
   expect(button).toBeInTheDocument();
});

test("Should load input name inside contact component", () => {
   render(<Contact />);
   const inputName = screen.getByPlaceholderText("name");
   expect(inputName).toBeInTheDocument();
});

test("Should load two input boxesinside contact component", () => {
   render(<Contact />);
   const inputs = screen.getAllByRole("textbox");
   expect(inputs.length).toBe(2);
});
