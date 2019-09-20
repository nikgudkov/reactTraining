import React from 'react';

class Folder extends React.Component {

    render() {
        console.log(this.props)
        const {id, name, parentId} = this.props.folder;
        console.log(id, name, parentId)
        return (
            <div className="row">
                <div>{id} - {name} - {parentId} </div>
            </div>
        );
    }
}

export default Folder;
