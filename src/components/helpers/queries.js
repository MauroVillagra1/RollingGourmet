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
export const listUsers = async () => {
  try {
    const resp = await fetch(uriUsersLogin, {
      method: 'GET',
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("userActive")).token
      }
    });

    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (resp.ok) {
      const data = await resp.json();
      return data; // Devolver el resultado como un array u objeto JSON, según la respuesta del servidor.
    } else {
      // Manejar el caso en que la solicitud no sea exitosa (por ejemplo, un error de autenticación).
      console.error("Error de solicitud:", resp.status, resp.statusText);
      return []; // Puedes devolver un array vacío u otra respuesta adecuada en caso de error.
    }
  } catch (error) {
    console.error("Error:", error);
    return []; // Manejar cualquier error de red o de otro tipo aquí.
  }
};

export const createProducts = async (products) => {
  try {
    const resp = await fetch(uriProducts, {
      method: 'POST',
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
    //  aqui pueden cambiar la respuesta
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
};