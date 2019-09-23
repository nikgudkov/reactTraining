import React from 'react';
import {FaFolder, FaFolderOpen} from "react-icons/fa";

class Folder extends React.Component {
    
    render() {
        const {id, name, parentId} = this.props.folder;
        console.log(id, name, parentId)
        return (
            <div className="row">
                <div><FaFolder/> {name}</div>
                {/*<FaFolderOpen/>*/}
            </div>
        );
    }
}

export default Folder;
