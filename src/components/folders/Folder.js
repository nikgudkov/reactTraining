import React from 'react';
import {FaFolder, FaFolderOpen} from "react-icons/fa";
import {connect} from "react-redux";
import {switchExpandFolder} from "../../actions/folderActions";
import {getFiles} from "../../actions/filesActions";

class Folder extends React.Component {

    onFolderExpand = () => {
        this.props.switchExpandFolder(this.props.folder.id, this.props.folder.parentId);
        if (this.props.folder.expanded) {
            this.props.getFiles(this.props.folder.id);
        }
    };

    render() {
        const {id, name, expanded} = this.props.folder;
        const {childrenMap} = this.props;
        let childFolders = [];
        let folderIcon;
        if (expanded) {
            folderIcon = <FaFolderOpen onClick={this.onFolderExpand}/>;
            childFolders = childrenMap[id] || [];
        } else {
            folderIcon = <FaFolder onClick={this.onFolderExpand}/>
        }
        return (
            <div className="row">
                <div>
                    {folderIcon} {name}
                    {childFolders.map((folder) =>
                        <div className="folder-children-padding" key={folder.id}>
                            <Folder key={folder.id} switchExpandFolder={this.props.switchExpandFolder}
                                    getFiles={this.props.getFiles}
                                    expanded={folder.expanded}
                                    folder={folder} childrenMap={childrenMap}/>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    childrenMap: state.folders.childrenMap
});

export default connect(mapStateToProps,
    {switchExpandFolder, getFiles})(Folder)
