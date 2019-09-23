import React from 'react';
import './userActionsPanel.css'
import {FaPlus, FaPencilAlt, FaTimes} from 'react-icons/fa';

class UserActionsPanel extends React.Component {
    render() {
        return (
            <div className="actions-panel">
                <div>
                    <FaPlus size={40}/>
                    <div>Add</div>
                </div>

                <div>
                    <FaPencilAlt size={40}/>
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

export default UserActionsPanel;
