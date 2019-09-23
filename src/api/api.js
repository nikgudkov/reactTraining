import axios from 'axios'

export const getFoldersRequest = () => {
    return axios.get('http://localhost:3666/directories')
}

export const createFolderRequest = (parentId, name) => {
    return axios.post('http://localhost:3666/directories',
        {parentId: parentId, name: name}
    )
}