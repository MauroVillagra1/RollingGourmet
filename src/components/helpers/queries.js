const uriProducts = import.meta.env.VITE_API_PRODUCTS;
const uriCategories = import.meta.env.VITE_API_CATEGORIES;
const uriOrders = import.meta.env.VITE_API_ORDERS;
const uriUsers = import.meta.env.VITE_API_USERS;
const uriUsersLogin = import.meta.env.VITE_API_USERS_LOGIN;

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
export const listUsers = async () => {
  try {
    const resp = await fetch(uriUsersLogin, {
      method: 'GET',
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("userActive")).token
      }
    });

    if (resp.ok) {
      const data = await resp.json();
      return data; 
    } else {
      console.error("Request error:", resp.status, resp.statusText);
      return []; 
    }
  } catch (error) {
    console.error("Error:", error);
    return []; 
  }
};

export const createProducts = async (products) => {
  try {
    const resp = await fetch(uriProducts, {
      method: "POST",
      headers: {

        'Content-Type': 'application/json',
        "x-token": JSON.parse(sessionStorage.getItem("userActive")).token
      },
      body: JSON.stringify(products),
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
        "x-token": JSON.parse(sessionStorage.getItem("userActive")).token
      },
      body: JSON.stringify(productEdit),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductAPI = async (id) => {
  try {
    const resp = await fetch(`${uriProducts}/${id}`, {
      
      method: "DELETE",
      headers:{
        "x-token": JSON.parse(sessionStorage.getItem("userActive")).token
      }
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
}

export const createOrders = async (Orders) => {
  try {
    const resp = await fetch(uriOrders, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'       
      },
      body: JSON.stringify(Orders),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};


export const editOrder = async (id, orderEdit) => {
  try {
    const resp = await fetch(`${uriOrders}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "x-token": JSON.parse(sessionStorage.getItem("userActive")).token
      },
      body: JSON.stringify(orderEdit),
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



export const login = async (user) => {
  try {
    const resp = await fetch(uriUsersLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await resp.json();
    return {
      status: resp.status,
      message: data.message,
      userName: data.name,
      token: data.token,
      _id: data.uid,
      rol: data.rol,
      img: data.img
    };
  } catch (error) {
    console.log("errores en el login");
    return;
  }

}

export const editUser = async (id, userEdit) => {
  try {
    const resp = await fetch(`${uriUsers}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "x-token": JSON.parse(sessionStorage.getItem("userActive")).token
      },
      body: JSON.stringify(userEdit),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
}
export const createUsers = async (User) => {
  try {
    const resp = await fetch(uriUsers, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(User),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
}
