import Header from "components/Header";
import { useEffect, useState } from "react";
import fetchItems from "services/items";
import ProductCard from "components/Home/ProductCard";
import { Box, Flex } from "@chakra-ui/react";
import Pagination from "components/Pagination";
const Home = () => {
  // COMPONENT STATES
  const [products, setProducts] = useState([]);
  const [hasNext, setHasNext] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const paginationSize = 10;
  // USEEFFECTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await fetchItems({
          pageSize: paginationSize,
          startIndex: (currentPage - 1) * paginationSize,
        });
        setProducts(result.items);
        setHasNext(result.hasMore);
        setLastPage(Math.ceil(result.total / paginationSize));
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [currentPage]);
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
        <Flex flexWrap="wrap" justifyContent="space-between">
          {products.map((item) => (
            <ProductCard key={item._id} data={item} />
          ))}
        </Flex>
        <Pagination
          currentPage={currentPage}
          pageSize={paginationSize}
          hasNext={hasNext}
          lastPage={lastPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </>
  );
};
export default Home;
