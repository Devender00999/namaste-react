import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/restaurantsData.json";
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { mockFetch } from "../../utils/testMockFn";

global.fetch = jest.fn(mockFetch(MOCK_DATA));

it("Should search restaurant with asha name", async () => {
   await act(async () => {
      render(
         <BrowserRouter>
            <Body />
         </BrowserRouter>
      );
   });

   const restaurantCardsBeforeSearch = screen.getAllByTestId("res-card");
   expect(restaurantCardsBeforeSearch.length).toBe(8);

   const searchBtn = screen.getByRole("button", { name: "Search" });
   const searchBox = screen.getByPlaceholderText("Enter restaurant name");

   fireEvent.change(searchBox, { target: { value: "asha" } });
   fireEvent.click(searchBtn);

   const restaurantCardsAfterSearch = screen.getAllByTestId("res-card");
   expect(restaurantCardsAfterSearch.length).toBe(1);
});

it("Should filter top rated restaurant", async () => {
   await act(async () => {
      render(
         <BrowserRouter>
            <Body />
         </BrowserRouter>
      );
   });
   const restaurantCardsBeforeSearch = screen.getAllByTestId("res-card");
   expect(restaurantCardsBeforeSearch.length).toBe(8);
   const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurant" });
   fireEvent.click(topRatedBtn);
   const restaurantCardsAfterSearch = screen.getAllByTestId("res-card");
   expect(restaurantCardsAfterSearch.length).toBe(4);
});

it("Should show all restaurant after clearing top rated restaurant", async () => {
   await act(async () => {
      render(
         <BrowserRouter>
            <Body />
         </BrowserRouter>
      );
   });
   const restaurantCardsBeforeSearch = screen.getAllByTestId("res-card");
   expect(restaurantCardsBeforeSearch.length).toBe(8);
   const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurant" });
   fireEvent.click(topRatedBtn);
   const restaurantCardsAfterSearch = screen.getAllByTestId("res-card");
   expect(restaurantCardsAfterSearch.length).toBe(4);

   const clearBtn = screen.getByRole("button", { name: "Clear" });
   fireEvent.click(clearBtn);
   expect(screen.getAllByTestId("res-card").length).toBe(8);
});
