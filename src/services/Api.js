import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
})

http.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  if (error.response?.status === 401) {
    localStorage.clear()
    window.location.assign('/login')
  }

  return Promise.reject(error)
})

export const login = ( email, password ) => http.post('/login', { email, password })

export const logout = () => http.post('/logout')


export const getPodcastsFromSpotify = ({ search }) => {
  return http.get(`/podcast/${search}`)
}

export const createPodcast = ({ name, description }) => {
  return http.post('/podcast/new', { name, description })
}
export const addFav = (likeId, body) => {
  console.log("holaaddfav")
  console.log(likeId)
  return http.post(`/podcast/${likeId}/add`, body)
  // .then((res) => res.data);
}

export const getLikes = () => {
  return http.get('/myfavs')
}
