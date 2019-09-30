import React from 'react';
import './userActionsPanel.css'
import PropTypes from 'prop-types'
import {FaPencilAlt, FaPlus, FaTimes} from 'react-icons/fa';

class UserActionsPanel extends React.Component {

    changeToAddFolder = () => {
        this.props.history.push("add_folder")
    }

    changeToAddFile = () => {
        this.props.history.push("add_file")
    }

    render() {
        return (
            <div className="actions-panel">

                <div>
                    <FaPlus size={40} onClick={this.changeToAddFolder}/>
                    <div>Add</div>
                </div>

                <div>
                    <FaPencilAlt size={40} onClick={this.changeToAddFile}/>
                    <div>Add</div>
                </div>

                <div>
                    <FaTimes size={40}/>
                    <div>Remove</div>
                </div>
            </div>
        );
    }
}

UserActionsPanel.propTypes = {
    history: PropTypes.object.isRequired,
}


export default UserActionsPanel;
