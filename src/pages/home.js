import Header from "components/Header";
import { useEffect, useState } from "react";
import fetchItems from "services/items";
import ProductCard from "components/Home/ProductCard";
import { Center, Flex } from "@chakra-ui/react";

const Home = () => {
  // COMPONENT STATES
  const [products, setProducts] = useState([]);
  const [hasNext, setHasNext] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const paginationSize = 10;
  // USEEFFECTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const items = await fetchItems({
          pageSize: paginationSize,
          startIndex: (currentPage - 1) * paginationSize,
        });
        setProducts(items);
        console.log(items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [currentPage]);
  return (
    <>
      <Header />
      <Center
        width="100%"
        height="100vh"
        px="5rem"
        pt="5rem"
        overflowY="scroll"
      >
        <Flex flexWrap="wrap" height="100%" justifyContent="space-between">
          {products.map((item) => (
            <ProductCard key={item._id} data={item} />
          ))}
        </Flex>
      </Center>
    </>
  );
};
export default Home;
