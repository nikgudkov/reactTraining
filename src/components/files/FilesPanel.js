import React from 'react';
import './files.css';
import {fetchFolders} from "../../actions/folderActions";
import {connect} from "react-redux";
import File from "./File";

class FilesPanel extends React.Component {
    render() {
        const files = this.props.files;
        console.log(files);
        return (
            <div className="files-panel">
                <div className="row">
                    {files.map((file) =>
                        <File key={file.id}
                              file={file}/>
                    )}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    files: state.files.files
});


export default connect(mapStateToProps, {fetchFolders})(FilesPanel)