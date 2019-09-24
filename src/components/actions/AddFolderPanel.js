import React from 'react';
import './userActionsPanel.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {FaArrowAltCircleLeft} from "react-icons/fa";
import {createFolder} from "../../actions/folderActions";

class AddFolderPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            parentId: '',
            name: ''
        };
    }

    getBack = () => {
        this.props.history.goBack();
    }

    handleParentIdChange = (event) => {
        this.setState({parentId: event.target.value});
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    addFolder = () => {
        this.props.createFolder(this.state.parentId, this.state.name)
    }

    render() {
        return (
            <div className="actions-panel">
                <div>Parent Id: <input value={this.state.parentId} onChange={this.handleParentIdChange}/>
                </div>
                <div>Name: <input value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div>
                    <button onClick={this.addFolder}>Create</button>
                </div>
                <div>
                    <FaArrowAltCircleLeft size={40} onClick={this.getBack}/>
                </div>
            </div>
        );
    }
}

AddFolderPanel.propTypes = {
    history: PropTypes.object.isRequired,
}


export default withRouter(
    connect(null,
        {createFolder}
    )(AddFolderPanel))

