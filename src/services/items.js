export const fetchItems = ({ pageSize, startIndex, isOnSale }) => {
  const isOnSaleQuery = isOnSale === true ? "&isOnSale=true" : "";
  return fetch(
    `https://gp-super-store-api.herokuapp.com/item/list?size=${pageSize}&from=${startIndex}${isOnSaleQuery}`
  )
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => {
      throw new Error(err.message ?? "Fetch items failed");
    });
};

export const fetchItemById = (id) => {
  return fetch(`https://gp-super-store-api.herokuapp.com/item/${id}`)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => {
      throw new Error(err.message ?? "Fetch item by id failed");
    });
};