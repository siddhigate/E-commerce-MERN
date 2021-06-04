import { API } from "../../backend";

// category calls
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then((response) => {
      console.log("RESPONSe", response);
      console.log("R", response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return { error: err };
    });
};

// get all categories
export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET"
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return { error: err };
    });
};

// delete category
export const deleteCategory = (categoryId, userId, token) => {
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return { error: err };
    });
};

// update category

export const updateCategory = (categoryId, userId, token, category) => {
  console.log("CATE", category);
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: category
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return { error: err };
    });
};

export const getCategory = (categoryId) => {
  return fetch(`${API}/category/${categoryId}`, {
    method: "GET"
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return { error: err };
    });
};

// product calls

// create a product
export const createProduct = (userId, token, product) => {
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return { error: err };
    });
};

// get all products
export const getProducts = () => {
  return fetch(`${API}/products`, {
    method: "GET"
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return { error: err };
    });
};

// delete a product
export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return { error: err };
    });
};

// get a product
export const getProduct = (productId) => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET"
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return { error: err };
    });
};

// update a product
export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return { error: err };
    });
};
