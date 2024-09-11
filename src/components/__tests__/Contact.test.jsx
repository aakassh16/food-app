import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("testing", () => {

test("testing purpose", () => {
    render(<Contact />)

    const text = screen.getByText("Email - kunduakash423@gmail.com");
    expect(text).toBeInTheDocument();



})

})