global.fetch = jest.fn(mockFetch(MOCK_RES_DATA));
describe("Cart", () => {
   it("Should show menu of a restaurant", async () => {
      await act(async () => {
         render(
            <BrowserRouter>
               <Body />
            </BrowserRouter>
         );
      });

      const restaurantCard = screen.getAllByTestId("res-card-link");
      // expect(restaurantCard.length).not.toBe(8);

      fireEvent.click(restaurantCard[0]);
      global.fetch = jest.fn(mockFetch(MOCK_MENU_DATA));
      const restaurantMenu = await screen.getAllByTestId("rest-menu");
      expect(restaurantMenu.length).toBe(8);
   });
});
