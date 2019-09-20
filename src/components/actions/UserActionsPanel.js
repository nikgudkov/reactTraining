import React from 'react';

class UserActionsPanel extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <button>Add</button>
                </div>

                <div className="row">
                    <button>Add</button>
                </div>

                <div className="row">
                    <button>Remove</button>
                </div>
            </div>
        );
    }
}

export default UserActionsPanel;
