import FullStar from "assets/img/star-full.png";
import HalfStar from "assets/img/star-half.png";
import EmptyStar from "assets/img/star-empty.png";
import { HStack } from "@chakra-ui/react";

const ProductRating = ({ rating }) => {
  const maxRating = 5;
  const numOfEmptyStar = maxRating - Math.ceil(rating);
  const numOfFullStar = Math.floor(rating);
  const hasHalfStar = rating - numOfFullStar > 0;

  return (
    <HStack spacing="0.25rem">
      {numOfFullStar > 0 &&
        Array(numOfFullStar)
          .fill(1)
          .map((star) => <img src={FullStar} alt="" width="20px" />)}
      {hasHalfStar && <img src={HalfStar} alt="" width="20px" />}
      {numOfEmptyStar > 0 &&
        Array(numOfEmptyStar)
          .fill(1)
          .map((star) => <img src={EmptyStar} alt="" width="20px" />)}
    </HStack>
  );
};
export default ProductRating;
