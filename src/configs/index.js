import instance from "./api";

// export const createUser = data => axios.post('/')

export const getAllProducts = () => instance.get('/products/.json')

export const getSingleProduct = productId => instance.get(`/products/${productId}/.json`)

export const createNewUser = data => instance.post('/users/.json', data)

export const getUser = (userId) => instance.get(`/users/${userId}/.json`)

export const updatePrfile = (userId , data) => instance.patch(`/users/${userId}/.json` , data)