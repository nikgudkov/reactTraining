import {createFolderRequest, getFoldersRequest} from "../api/api";
import {FolderDTO} from "../dto/FolderDTO";

export const REQUEST_FOLDERS = 'REQUEST_FOLDERS'

export function requestFolders() {
    return {
        type: REQUEST_FOLDERS
    }
}

export const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS';

export function receiveFolders(data) {
    return {
        type: RECEIVE_FOLDERS,
        childrenMap: data.childrenMap,
        rootFolders: data.rootFolders
    }
}

export const fetchFolders = () => (dispatch) => {
    dispatch(requestFolders());
    return getFoldersRequest()
        .then(
            response => {
                dispatch(receiveFolders(mapFolders(response.data)))
            },
            error => console.log(error)
        )
};

const mapFolders = (data) => {
    let childrenMap = new Map();
    let rootFolders = [];
    data.forEach((folder) => {
        let folderDTO = new FolderDTO(folder.id, folder.name, folder.parentId);
        let parentId = folderDTO.parentId;
        if (parentId) {
            if (childrenMap.has(parentId)) {
                childrenMap.get(parentId).push(folderDTO)
            } else {
                let childFolders = [];
                childFolders.push(folderDTO);
                childrenMap.set(parentId, childFolders)
            }
        } else {
            rootFolders.push(folderDTO)
        }
    });
    return {
        childrenMap,
        rootFolders
    };
};


export const ADD_FOLDER = 'ADD_FOLDER';

export function createFolderStart() {
    return {
        type: ADD_FOLDER
    }
}

export const RECEIVE_ADD_FOLDER = 'RECEIVE_ADD_FOLDER';

export function receiveCreateFolders(folder) {
    return {
        type: RECEIVE_ADD_FOLDER,
        folder: folder
    }
}

export const createFolder = (parentId, name) => (dispatch) => {
    dispatch(createFolderStart());
    return createFolderRequest(parentId, name)
        .then(
            response => {
                dispatch(receiveCreateFolders(response.data))
            },
            error => console.log(error)
        )
};


export const EXPAND_FOLDER = 'EXPAND_FOLDER';

export const switchExpandFolder = (folderId, parentId) => {
    return {
        type: EXPAND_FOLDER,
        folderId: folderId,
        parentId: parentId
    }
};
