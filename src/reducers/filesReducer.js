import {RECEIVE_ADD_FILE, RECEIVE_REQUEST_FILES} from "../actions/filesActions";

const initialState = {
    files: [],
    currentOpenFolder: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_REQUEST_FILES: {
            let files = action.files;
            console.log(files);
            return Object.assign({}, state, {
                files: files
            })
        }
        case RECEIVE_ADD_FILE: {
            let file = action.file;
            console.log(file);
            //TODO later
            /*this.state.files.push(file);
            return state;
            return Object.assign({}, state, {
                files: [{id: folderId, name: 'name1'}, {id: 4, name: 'name'}]
            })*/
        }
        default:
            return state;
    }
}