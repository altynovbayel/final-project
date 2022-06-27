import instance from "./api";

// export const createUser = data => axios.post('/')

export const getAllProducts = () => instance.get('/products/.json')

export const getSingleProduct = productId => instance.get(`/products/${productId}/.json`)

export const postReviewProduct = (productId, data) => instance.patch(`/products/${productId}/.json`, data)

export const createNewUser = (data, userId) => instance.put(`/users/${userId}.json`, data)

export const addToCart = (data, userId, productId) => instance.put(	`/users/${userId}/cart/${productId}/.json`, data)

export const addReview = (data, productId) => instance.post(`/products/${productId}/reviewers/.json`, data)

export const putAddedReview = (data, userId) => instance.post(`/users/${userId}/reviews/.json`, data)

export const addToFavorites = (data,  userId, productId) => instance.put(`/users/${userId}/favorites/${productId}/.json`, data)

export const removeToFavorites = (userId, productId) => instance.delete(`/users/${userId}/favorites/${productId}/.json`)

// export const getFavorites = (userId) => instance.get(`/users/${userId}/favorites/.json`)

export const getUser = (userId) => instance.get(`/users/${userId}/.json`)

export const updatePrfile = (userId , data) => instance.patch(`/users/${userId}/.json` , data)

export const getFromCart = (id) => instance.get(`/users/${id}/cart/.json`)

export const getSingleFromCart = (productId, userId) => instance.get(`/users/${userId}/cart/${productId}/.json`)

export const removeCart = (userId, productId) => instance.delete(`/users/${userId}/cart/${productId}/.json`)

export const removeAllCart = (userId) => instance.delete(`/users/${userId}/cart/.json`)

export const changeCount = (userId, productId, data) => instance.patch(`/users/${userId}/cart/${productId}/.json`, data)
