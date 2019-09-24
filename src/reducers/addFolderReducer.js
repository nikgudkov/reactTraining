import {ADD_FOLDER, RECEIVE_ADD_FOLDER} from "../actions/folderActions";

const initialState = {isFetching: false}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_FOLDER: {
            return Object.assign({}, state, {
                isFetching: true
            })
        }
        case RECEIVE_ADD_FOLDER: {
            return Object.assign({}, state, {
                isFetching: false
            })
        }
        default:
            return state;
    }
}