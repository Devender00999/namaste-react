import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header component test", () => {
   it("should load header component with login button", () => {
      render(
         <BrowserRouter>
            <Provider store={appStore}>
               <Header />
            </Provider>
         </BrowserRouter>
      );
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
   });

   it("should load header component with Cart", () => {
      render(
         <BrowserRouter>
            <Provider store={appStore}>
               <Header />
            </Provider>
         </BrowserRouter>
      );
      const cart = screen.getByText("Cart (0)");
      expect(cart).toBeInTheDocument();
   });

   it("should change login button to logout on click", () => {
      render(
         <BrowserRouter>
            <Provider store={appStore}>
               <Header />
            </Provider>
         </BrowserRouter>
      );
      const loginBtn = screen.getByRole("button", { name: "Login" });
      fireEvent.click(loginBtn);
      const logoutBtn = screen.getByRole("button", { name: "Logout" });
      expect(logoutBtn).toBeInTheDocument();
   });
});
