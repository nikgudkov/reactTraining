import {RECEIVE_FOLDERS, REQUEST_FOLDERS} from "../actions/folderActions";

const initialState = {
    folders: {},
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
            // TODO check it
            if (Object.keys(state.folders).length) {
                return state;
            }
            return Object.assign({}, {
                folders: mapToObject(action.folders),
                childrenMap: mapToObject(action.childrenMap),
                rootFolders: action.rootFolders,
                isFetching: false
            })
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