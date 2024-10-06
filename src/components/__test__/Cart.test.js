import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { mockFetch } from "../../utils/testMockFn";
import MOCK_MENU_DATA from "../mocks/restaurantMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, useParams } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";

jest.mock("react-router-dom", () => ({
   ...jest.requireActual("react-router-dom"), // Keep other functions like BrowserRouter
   useParams: jest.fn(), // Mock useParams
}));

describe("Cart", () => {
   global.fetch = jest.fn(mockFetch(MOCK_MENU_DATA));

   useParams.mockReturnValue({ resId: "201224" });

   it("Should load restaurant menu", async () => {
      await act(async () =>
         render(
            <Provider store={appStore}>
               <BrowserRouter>
                  <Header />
                  <RestaurantMenu />
                  <Cart />
               </BrowserRouter>
            </Provider>
         )
      );

      const accordianHeader = screen.getByText("Recommended (17)");
      expect(accordianHeader).toBeInTheDocument();

      fireEvent.click(accordianHeader);
      const menu = screen.getAllByTestId("food-item");
      expect(menu.length).toBe(17);

      const addBtns = screen.getAllByRole("button", { name: "Add" });
      expect(addBtns.length).toBe(17);

      fireEvent.click(addBtns[0]);
      fireEvent.click(addBtns[1]);

      const cart = screen.getByText("Cart (2)");
      expect(cart).toBeInTheDocument();

      expect(screen.getAllByTestId("food-item").length).toBe(19);
      const emptyCartBtn = screen.getByRole("button", { name: "Clear" });

      fireEvent.click(emptyCartBtn);

      expect(screen.getAllByTestId("food-item").length).toBe(17);

      expect();
   });
});
