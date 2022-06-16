import instance from "./api";

// export const createUser = data => axios.post('/')

export const getAllProducts = () => instance.get('/products/.json')

export const getSingleProduct = productId => instance.get(`/products/${productId}/.json`)

export const createNewUser = (data, userId) => instance.put(`/users/${userId}.json`, data)

export const addToCart = (data, userId) => instance.post(	`/users/${userId}/cart/.json`, data)

export const addReview = (data, productId) => instance.post(`/products/${productId}/reviewers/.json`, data)

export const putAddedReview = (data, userId) => instance.post(`/users/${userId}/reviews/.json`, data)

export const addToFavorites = (data,  userId) => instance.post(`/users/${userId}/favorites/.json`, data)

export const getFromCart = (id) => instance.get(`/users/${id}/cart/.json`)
