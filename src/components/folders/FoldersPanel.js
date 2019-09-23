import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import './folders.css';
import Folder from "./Folder";
import {fetchFolders} from "../../actions/folderActions";


class FoldersPanel extends React.Component {


    handleGetFolders = () => {
        this.props.fetchFolders();
    }


    componentDidMount() {
        this.handleGetFolders();
    }

    render() {
        const folders = this.props.folders;
        console.log(folders)
        return (
            <div className="folders-panel border">
                <div>
                    <ul>
                        {folders.map((folder) =>
                            <Folder key={folder.id}
                                    folder={folder}/>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    folders: state.folder.folders
})

export default withRouter(
    connect(mapStateToProps,
        {fetchFolders}
    )(FoldersPanel))