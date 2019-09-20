import axios from 'axios'

export const getFolders = () => {
    return axios.get('http://localhost:3666/directories')
}