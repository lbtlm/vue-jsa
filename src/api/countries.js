import request from './request'

export const getCountryList = () => {
  return request({
    url: '/guest/countries',
    method: 'GET'
  })
}
