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
        const rootFolders = this.props.rootFolders;
        return (
            <div className="folders-panel border">
                <div>
                    <ul>
                        {rootFolders.map((folder) =>
                            <Folder key={folder.id} expanded={folder.expanded}
                                    folder={folder}/>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    rootFolders: state.folders.rootFolders
});

export default withRouter(
    connect(mapStateToProps,
        {fetchFolders}
    )(FoldersPanel))