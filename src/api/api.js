import axios from 'axios'

export const getFoldersRequest = () => {
    return axios.get('http://localhost:3666/directories')
};

export const createFolderRequest = (parentId, name) => {
    return axios.post('http://localhost:3666/directories',
        {parentId: parentId, name: name}
    )
};

export const getFilesRequest = () => {
    return axios.get('http://localhost:3666/notices')
};

export const createFileRequest = (folderId, title, description, tags) => {
    return axios.post('http://localhost:3666/notices',
        {directoryId: folderId, title: title, description: description, tags: tags}
    )
};

