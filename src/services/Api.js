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

export const addToList = (listId, podcast) => {
  
  return http.post(`/list/${listId}/add`, podcast)
  // .then((res) => res.data);
}

export const showLists = () => {
  return http.get('/lists')
}

export const showOneList = (listId) => {
  return http.get(`/lists/${listId}`)
}



// export const createList = ({ name }) => {
//   return http.post('/list/new', { name })
// }
            // export const createPodcast = ({ name, description }) => {
            //   return http.post('/podcast/new', { name, description })
            // }