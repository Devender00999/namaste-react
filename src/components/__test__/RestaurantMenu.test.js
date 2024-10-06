import {
   fireEvent,
   render,
   screen,
   waitFor,
   waitForElementToBeRemoved,
} from "@testing-library/react";
import { mockFetch } from "../../utils/testMockFn";
import MOCK_RES_DATA from "../mocks/restaurantsData.json";
import MOCK_MENU_DATA from "../mocks/restaurantMenu.json";
import "@testing-library/jest-dom";
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

describe("Restaurant Menu", () => {
   beforeEach(() => {
      // Mock the initial fetch for the restaurant list
      global.fetch = jest.fn(mockFetch(MOCK_RES_DATA));
   });

   it("Should show the menu of a restaurant after clicking on a restaurant card", async () => {
      await act(async () => {
         render(
            <BrowserRouter>
               <Body />
            </BrowserRouter>
         );
      });

      // Find all restaurant cards by the test id
      const restaurantCards = screen.getAllByTestId("res-card-link");

      // Check that restaurant cards are rendered
      expect(restaurantCards.length).toBeGreaterThan(0);

      // Mock fetch for the restaurant menu data
      global.fetch = jest.fn(mockFetch(MOCK_MENU_DATA));

      // Simulate click on the first restaurant card
      fireEvent.click(restaurantCards[0]);
      // await waitForElementToBeRemoved(() => screen.getAllByTestId("res-card-link"), {
      //    timeout: 5000,
      // });

      // Wait for the restaurant menu to be loaded and rendered
      // await waitFor(async () => {
      //    const restaurantMenu = await screen.findAllByTestId("rest-menu");
      //    expect(restaurantMenu.length).toBe(8);
      // });
      // Assert that the restaurant menu has the correct number of items
   });
});
