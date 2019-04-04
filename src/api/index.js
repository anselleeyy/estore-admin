import api from './public'

export const homeBanner = (params) => {
  return api.fetchGet('/item/banner', params)
}

export const homeItem = (params) => {
  return api.fetchGet('/item/hot', params)
}

export const userInfo = (params) => {
  return api.fetchGet('/user/checkLogin', params)
}

export const login = (params) => {
  return api.fetchGet('/user/login', params)
}

export const geetest = (params) => {
  return api.fetchGet('/user/geetestInit?t=' + (new Date()).getTime(), params)
}

export const itemInfo = (id, params) => {
  return api.fetchGet('/item/detail/' + id, params)
}

export const getAllItem = (params) => {
  return api.fetchGet('/item/all', params)
}

export const navList = (params) => {
  return api.fetchGet('/item/nav', params)
}

export const addCart = (params) => {
  return api.fetchPost('/cart/add', params)
}

export const getCartList = (userId, params) => {
  return api.fetchGet('/cart/' + userId, params)
}

export const addressList = (userId, params) => {
  return api.fetchGet('/cart/address/' + userId, params)
}
