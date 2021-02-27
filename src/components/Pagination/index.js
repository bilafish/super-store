import { HStack, Button } from "@chakra-ui/react";

const Pagination = ({
  currentPage,
  pageSize,
  hasNext,
  lastPage,
  setCurrentPage,
}) => {
  return (
    <HStack justifyContent="center">
      <Button
        colorScheme="orange"
        onClick={() => {
          setCurrentPage(1);
          window.scrollTo(0, 0);
        }}
        isDisabled={currentPage <= 1}
      >
        First
      </Button>
      <Button
        colorScheme="orange"
        onClick={() => {
          setCurrentPage(currentPage - 1);
          window.scrollTo(0, 0);
        }}
        isDisabled={currentPage <= 1}
      >{`<`}</Button>
      <p>{`${(currentPage - 1) * pageSize + 1} - ${
        (currentPage - 1) * pageSize + pageSize
      }`}</p>
      <Button
        colorScheme="orange"
        onClick={() => {
          setCurrentPage(currentPage + 1);
          window.scrollTo(0, 0);
        }}
        isDisabled={!hasNext}
      >{`>`}</Button>
      <Button
        colorScheme="orange"
        onClick={() => {
          setCurrentPage(lastPage);
          window.scrollTo(0, 0);
        }}
        isDisabled={currentPage >= lastPage}
      >
        Last
      </Button>
    </HStack>
  );
};
export default Pagination;