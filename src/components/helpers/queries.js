const uriProducts = import.meta.env.VITE_API_PRODUCTS;
const uriCategories = import.meta.env.VITE_API_CATEGORIES;
const uriOrders = import.meta.env.VITE_API_ORDERS;
const uriUsers = import.meta.env.VITE_API_USERS;
const uriUsersLogin = import.meta.env.VITE_API_USERS_LOGIN
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

  export const getProduct = async (id) => {
    try {
      const resp = await fetch(`${uriProducts}/${id}`);
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
 
  export const editProduct = async (id, productEdit) => {
    try {
      const resp = await fetch(`${uriProducts}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productEdit),
      });
      return resp;
    } catch (error) {
      console.log(error);
    }
  };

  export const login = async (user) =>{
    try {
      const resp = await fetch(uriUsersLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await resp.json();
    //  aqui pueden cambiar la respuesta
      return {
        status: resp.status,
        message: data.message,
        userName: data.name,
        token: data.token,
        _id: data.uid,
      };
    } catch (error) {
      console.log("errores en el login");
      return;
    }
  }
  
  
  export const editOrder = async (id, orderEdit) => {
    try {
      const resp = await fetch(`${uriOrders}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderEdit),
      });
      return resp;
    } catch (error) {
      console.log(error);
    }
  };