const uriProducts = import.meta.env.VITE_API_PRODUCTS;
const uriCategories = import.meta.env.VITE_API_CATEGORIES;
const uriOrders = import.meta.env.VITE_API_ORDERS;
const uriUsers = import.meta.env.VITE_API_USERS;

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
export const listCategories = async () => {
  return fetchData(uriCategories);
};
export const listOrders = async () => {
  return fetchData(uriOrders);
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

    // try {
    //   const respuesta = await fetch(url);
    //   const datos = await respuesta.json();
    //   return datos;
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  


export const createOrders = async (Orders) => {
  try {
    const resp = await fetch(uriOrders, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Orders),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};


export const deleteOrders = async (id) => {
  try {
    const resp = await fetch(`${uriOrders}/${id}`, {
      method: 'DELETE',
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (usuario) =>{
  try {
    console.log(usuario);
    const respuesta = await fetch(uriUsers, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      usuario: datos.nombre,
      uid: datos.uid,
    };
  } catch (error) {
    console.log("errores en el login");
    return;
  }
}