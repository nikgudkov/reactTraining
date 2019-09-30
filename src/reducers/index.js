import {combineReducers} from "redux";
import foldersReducer from "./foldersReducer";
import addFolderReducer from "./addFolderReducer";
import filesReducer from "./filesReducer";

export default combineReducers({
    folders: foldersReducer,
    addFolder: addFolderReducer,
    files: filesReducer,
});
