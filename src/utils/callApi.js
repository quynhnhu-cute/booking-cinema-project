import axios from 'axios'
import { BASE_URL } from 'settings/apiConfig'

// apis are called here
export const callApi = (endpoint, method = 'GET', data) => {
   return axios ({
        url: `${BASE_URL}/${endpoint}`,
        method,
        data
    })
}

// API POST 

