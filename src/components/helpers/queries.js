const uriProducts = import.meta.env.VITE_API_PRODUCTS;

const fetchData = async (url) => {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  export const listProducts = async () => {
    return fetchData(uriProducts);
  };

  export const createProducts = async (products) => {
    try {
      const resp = await fetch(uriProducts, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(products),
      });
      return resp;
    } catch (error) {
      console.log(error);
    }
  };