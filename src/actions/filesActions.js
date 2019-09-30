import {createFileRequest, getFilesRequest} from "../api/api";

export const RECEIVE_REQUEST_FILES = 'RECEIVE_REQUEST_FILES';

export function requestFiles(files) {
    return {
        type: RECEIVE_REQUEST_FILES,
        files: files
    }
}

export const getFiles = (folderId) => (dispatch) => {
    return getFilesRequest(folderId)
        .then(
            response => {
                const files = response.data;
                const filteredFiles = files.filter((file) => Number(file.directoryId) === folderId);
                dispatch(requestFiles(filteredFiles))
            },
            error => console.log(error)
        )
};

export const RECEIVE_ADD_FILE = 'RECEIVE_ADD_FILE';

export function receiveCreateFile(file) {
    return {
        type: RECEIVE_ADD_FILE,
        file: file
    }
}

export const addFile = (folderId, title, description, tags) => (dispatch) => {
    return createFileRequest(folderId, title, description, tags)
        .then(
            response => {
                dispatch(receiveCreateFile(response.data))
            },
            error => console.log(error)
        )
};
