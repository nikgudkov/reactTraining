import {combineReducers} from "redux";
import foldersReducer from "./foldersReducer";
import addFolderReducer from "./addFolderReducer";

export default combineReducers({folders: foldersReducer, addFolder: addFolderReducer,});
