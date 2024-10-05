import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import resData from "../mocks/restaurantCard.json";
import "@testing-library/jest-dom";

describe("RestaurantCard Component", () => {
   it("Should render RestaurantCard with props data", () => {
      render(<RestaurantCard resData={resData} />);
      const name = screen.getByText("Chinese Wok");
      expect(name).toBeInTheDocument();
   });

   it("should render RestaurantCard with promoted label", () => {
      const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
      render(<PromotedRestaurantCard resData={resData} />);
      const name = screen.getByText("Chinese Wok");
      const promotedLabel = screen.getByText("Promoted");
      expect(name).toBeInTheDocument();
      expect(promotedLabel).toBeInTheDocument();
   });
});
