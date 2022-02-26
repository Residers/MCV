import axios from '@/api/axios'

const getFeed = () => {
  return axios.get('userApi')
}
export default {
  getFeed,
}
