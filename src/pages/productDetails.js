import Header from "components/Header";
import {
  Box,
  Button,
  Flex,
  Image,
  VStack,
  HStack,
  Badge,
  Divider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchItemById } from "services/items";
import ProductRating from "components/Home/ProductRating";

const ProductDetails = () => {
  const { itemId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getItemById = async (id) => {
      setIsLoading(true);
      try {
        const result = await fetchItemById(id);
        setProduct(result);
      } catch (err) {
        console.log(err.message);
      }
      setIsLoading(false);
    };
    getItemById(itemId);
  }, [itemId]);
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
        {error !== null && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>{error}</AlertTitle>
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => {
                setError(null);
              }}
            />
          </Alert>
        )}
        {!isLoading && product !== null && (
          <Flex justifyContent="center" pt="5rem">
            <Image
              src={product.imageUrl}
              boxSize="300px"
              objectFit="contain"
            ></Image>
            <VStack
              spacing="0.2rem"
              margin="1rem"
              alignItems="flex-start"
              width="250px"
            >
              <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {product.name}
              </p>
              <ProductRating rating={product.avgRating} />
              <Divider />
              <p style={{ textAlign: "left" }}>{product.description}</p>
              <HStack>
                <p style={{ fontWeight: "bold" }}>${product.price}</p>
                {product.isOnSale && <Badge colorScheme="red">On Sale</Badge>}
              </HStack>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setError(null);
                  const quantity = parseInt(event.target.quantity.value, 10);
                  // Validation
                  if (quantity <= 0) {
                    setError("Please choose a quantity greater than 0");
                  } else if (quantity > product.stockCount) {
                    setError(
                      "The maximum quantity you can order is " +
                        product.stockCount
                    );
                  }
                }}
                style={{
                  textAlign: "left",
                }}
              >
                <HStack alignItems="center" mb="1rem">
                  <p>Quantity:</p>
                  <NumberInput
                    defaultValue={1}
                    precision={0}
                    step={1}
                    min={1}
                    max={product.stockCount}
                    keepWithinRange={true}
                    clampValueOnBlur={false}
                    errorBorderColor="red.500"
                    colorScheme="orange"
                    name="quantity"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </HStack>
                <Button colorScheme="orange" type="submit">
                  Add to Cart
                </Button>
              </form>
            </VStack>
          </Flex>
        )}
      </Box>
    </>
  );
};
export default ProductDetails;
