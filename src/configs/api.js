const { default: axios } = require("axios")

const baseURL = 'https://finalproject-6dca2-default-rtdb.asia-southeast1.firebasedatabase.app/'


const instance = axios.create({baseURL})

export default instance