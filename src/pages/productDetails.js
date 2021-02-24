import Header from "components/Header";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { itemId } = useParams();
  return (
    <>
      <Header />
      <Box
        width="100%"
        height="calc(100vh - 68px)"
        px="5rem"
        pb="5rem"
        position="fixed"
        top="68px"
        bottom="0"
        overflowY="auto"
        textAlign="center"
      >
        <p>{itemId}</p>
      </Box>
    </>
  );
};
export default ProductDetails;
