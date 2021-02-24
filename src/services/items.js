const fetchItems = ({ pageSize, startIndex }) => {
  return fetch(
    `https://gp-super-store-api.herokuapp.com/item/list?size=${pageSize}&from=${startIndex}`
  )
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => {
      throw new Error(err.message ?? "Fetch items failed");
    });
};

export default fetchItems;
