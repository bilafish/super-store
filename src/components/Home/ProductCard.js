import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const ProductCard = ({ data }) => {
  return (
    <Box
      borderRadius="lg"
      borderWidth="1px"
      display="flex"
      flexDir="column"
      width="300px"
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
      {data.name}
      <Button colorScheme="orange" width="50%">
        View Item
      </Button>
    </Box>
  );
};
export default ProductCard;
