import React from 'react';
import {FaFolder, FaFolderOpen} from "react-icons/fa";
import {connect} from "react-redux";

class Folder extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            folder: this.props.folder,
            expanded: this.props.folder.expanded
        }
    }

    onFolderExpand = () => {
        this.setState({expanded: !this.state.expanded})
    }

    render() {
        const {id, name} = this.state.folder;
        const {expanded} = this.state;
        const {childrenMap} = this.props;
        let childFolders = [];
        let folderIcon;
        if (expanded) {
            folderIcon = <FaFolderOpen onClick={this.onFolderExpand}/>
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
                        <Folder key={folder.id}
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
})

export default connect(mapStateToProps)(Folder)
