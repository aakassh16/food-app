import { render,screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("header testing", () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            (<Header />)
        </Provider>
    </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();

    const text = screen.getByText("Login");
    expect(text).toBeInTheDocument();

    const cart = screen.getByText("Cart-(0)");
    expect(cart).toBeInTheDocument();

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();


})