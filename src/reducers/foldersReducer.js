import {RECEIVE_FOLDERS, REQUEST_FOLDERS} from "../actions/folderActions";

const initialState = {folders: [], isFetching: false}

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_FOLDERS: {
            return Object.assign({}, state, {
                isFetching: true
            })
        }
        case RECEIVE_FOLDERS: {
            return Object.assign({}, state, {
                folders: action.data,
                isFetching: false
            })
        }
        default:
            return state;
    }
}