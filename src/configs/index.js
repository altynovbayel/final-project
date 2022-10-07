import instance from './api'

export const getAllProducts = () => instance.get('/products/.json')

export const getSingleProduct = (productId) => instance.get(`/products/${productId}/.json`)

export const postReviewProduct = (productId, data) => instance.patch(`/products/${productId}/.json`, data)

export const createNewUser = (data, userId) => instance.put(`/users/${userId}.json`, data)

export const addToCart = (data, userId, productId) => instance.put(`/users/${userId}/cart/${productId}/.json`, data)

export const addReview = (data, productId, userId) => instance.put(`/products/${productId}/reviewers/${userId}.json`, data)

export const putAddedReview = (data, userId) => instance.post(`/users/${userId}/reviews/.json`, data)

export const addToFavorites = (data, userId, productId) => instance.put(`/users/${userId}/favorites/${productId}/.json`, data)

export const removeToFavorites = (userId, productId) => instance.delete(`/users/${userId}/favorites/${productId}/.json`)

export const getSingleFavorite = (userId, productId) => instance.get(`/users/${userId}/favorites/${productId}/.json`)

export const getFavorites = (userId) => instance.get(`/users/${userId}/favorites/.json`)

export const RemoveComments = (userId, productId) => instance.delete(`/users/${userId}/reviews/${productId}/.json`)

export const removeCommentFromProduct = (userId, productId) => instance.delete(`/products/${productId}/reviewers/${userId}/.json`)

export const getUser = (userId) => instance.get(`/users/${userId}/.json`)

export const updatePrfile = (userId, data) => instance.patch(`/users/${userId}/.json`, data)

export const getFromCart = (id) => instance.get(`/users/${id}/cart/.json`)

export const getSingleFromCart = (productId, userId) => instance.get(`/users/${userId}/cart/${productId}/.json`)

export const removeCart = (userId, productId) => instance.delete(`/users/${userId}/cart/${productId}/.json`)

export const removeAllCart = (userId) => instance.delete(`/users/${userId}/cart/.json`)

export const changeCount = (userId, productId, data) => instance.patch(`/users/${userId}/cart/${productId}/.json`, data)

export const sendMessage = (userId, data) => instance.post(`/messages/${userId}/.json`, data)

export const getMessages = userId => instance.get(`/messages/${userId}/.json`)

export const orderProduct = (userId, data) => instance.post(`/orders/${userId}/.json`, data)

export const getOrderedProducts = userId => instance.get(`orders/${userId}/.json`)

export const getSingleOrderedProduct = (userId, orderedProductId) => instance.get(`orders/${userId}/${orderedProductId}.json`)

export const getAllOrderedProducts = () => instance.get('/orders.json')

export const getHistoryOrderedProducts = userId => instance.get(`/orders/${userId}/.json`)

export const deleteOrderFromHistory = (userId, orderId) => instance.delete(`/orders/${userId}/${orderId}/.json`)

export const cancelOrderFromHistory = (userId, orderId) => instance.delete(`/orders/${userId}/${orderId}/.json`)
