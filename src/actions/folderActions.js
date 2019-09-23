import {createFolderRequest, getFoldersRequest} from "../api/api";

export const REQUEST_FOLDERS = 'REQUEST_FOLDERS'

export function requestFolders() {
    return {
        type: REQUEST_FOLDERS
    }
}

export const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS'

export function receiveFolders(folders) {
    return {
        type: RECEIVE_FOLDERS,
        data: folders
    }
}

export const fetchFolders = () => (dispatch) => {
    console.log(dispatch)
    dispatch(requestFolders())
    return getFoldersRequest()
        .then(
            response => {
                dispatch(receiveFolders(response.data))
            },
            error => console.log(error)
        )
}


export const ADD_FOLDER = 'ADD_FOLDER'

export function createFolderStart() {
    return {
        type: ADD_FOLDER
    }
}

export const RECEIVE_ADD_FOLDER = 'RECEIVE_ADD_FOLDER'

export function receiveCreateFolders(result) {
    return {
        type: RECEIVE_ADD_FOLDER,
        data: result
    }
}

export const createFolder = (parentId, name) => (dispatch) => {
    console.log(dispatch)
    dispatch(createFolderStart())
    return createFolderRequest(parentId, name)
        .then(
            response => {
                dispatch(receiveCreateFolders(response.data))
            },
            error => console.log(error)
        )
}