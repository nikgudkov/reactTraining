import {getFolders} from "../components/api";

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
    dispatch(requestFolders())
    return getFolders()
        .then(
            response => {
                dispatch(receiveFolders(response.data))
            },
            error => console.log(error)
        )
}