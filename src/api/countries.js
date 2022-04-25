import service from './request'

export const getCountryList = () => {
  return service.get('/guest/countries').then((res) => {})
}
