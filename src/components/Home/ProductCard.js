import { Box, Badge, VStack, HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import ProductRating from "components/Home/ProductRating";
import { useHistory } from "react-router-dom";

const ProductCard = ({ data }) => {
  const history = useHistory();
  return (
    <Box
      borderRadius="lg"
      borderWidth="1px"
      display="flex"
      flexDir="column"
      width="350px"
      margin="1rem"
      padding="1rem"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Image
        src={data.imageUrl}
        boxSize="250px"
        fit="contain"
        fallbackSrc="https://via.placeholder.com/250"
      />
      <VStack
        spacing="0.2rem"
        margin="1rem"
        alignItems="flex-start"
        width="250px"
      >
        <p>{data.name}</p>
        <ProductRating rating={data.avgRating} />
        <HStack>
          <p style={{ fontWeight: "bold" }}>${data.price}</p>
          {data.isOnSale && <Badge colorScheme="red">On Sale</Badge>}
        </HStack>
      </VStack>
      <Button
        colorScheme="orange"
        width="50%"
        onClick={() => {
          history.push(`/item/${data._id}`);
        }}
      >
        View Item
      </Button>
    </Box>
  );
};
export default ProductCard;
