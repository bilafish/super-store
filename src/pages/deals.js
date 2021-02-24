import Header from "components/Header";
import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import fetchItems from "services/items";
import ProductCard from "components/Home/ProductCard";
import Pagination from "components/Pagination";

const Deals = () => {
  // COMPONENT STATES
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasNext, setHasNext] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const paginationSize = 10;
  // USEEFFECTS
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const result = await fetchItems({
          pageSize: paginationSize,
          startIndex: (currentPage - 1) * paginationSize,
          isOnSale: true,
        });
        setProducts(result.items);
        setHasNext(result.hasMore);
        setLastPage(Math.ceil(result.total / paginationSize));
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
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
        {!isLoading && products.length > 0 && (
          <>
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
          </>
        )}
        {!isLoading && products.length <= 0 && (
          <p>Oops, there are no products on sale right now.</p>
        )}
      </Box>
    </>
  );
};
export default Deals;
