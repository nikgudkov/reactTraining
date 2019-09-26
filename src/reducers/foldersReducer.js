import {EXPAND_FOLDER, RECEIVE_ADD_FOLDER, RECEIVE_FOLDERS, REQUEST_FOLDERS} from "../actions/folderActions";

const initialState = {
    childrenMap: {},
    rootFolders: [],
    isFetching: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_FOLDERS: {
            return Object.assign({}, state, {
                isFetching: true
            })
        }
        case RECEIVE_FOLDERS: {
            if (Object.keys(state.rootFolders).length) {
                return state;
            }
            return Object.assign({}, {
                childrenMap: mapToObject(action.childrenMap),
                rootFolders: action.rootFolders,
                isFetching: false
            })
        }
        case RECEIVE_ADD_FOLDER: {
            let folder = action.folder;
            let children = state.childrenMap[folder.parentId];
            if (!children) {
                children = [];
                state.childrenMap[folder.parentId] = children;
            }
            children.push(folder);
            return state;
        }
        case EXPAND_FOLDER: {
            let folderId = action.folderId;
            if (!action.parentId) {
                for (let i = 0; i < state.rootFolders.length; i++) {
                    if (state.rootFolders[i].id === folderId) {
                        const rootFoldersModified = Array.from(state.rootFolders);
                        rootFoldersModified[i].expanded = !rootFoldersModified[i].expanded;
                        return Object.assign({}, state, {
                            rootFolders: rootFoldersModified
                        });
                    }
                }
            }
            let childrenMapModified = {};
            for (let i in state.childrenMap) {
                childrenMapModified[i] = state.childrenMap[i];
            }
            state.childrenMap[action.parentId].forEach((folder) => {
                if (folder.id === folderId) {
                    return folder.expanded = !folder.expanded;
                }
            });
            return Object.assign({}, state, {
                childrenMap: childrenMapModified
            });
        }
        default:
            return state;
    }
}

const mapToObject = (map) => {
    const obj = {};
    for (let prop of map) {
        obj[prop[0]] = prop[1];
    }
    return obj;
};