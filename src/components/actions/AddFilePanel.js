import React from 'react';
import './userActionsPanel.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {FaArrowAltCircleLeft, FaPlusSquare} from "react-icons/fa";
import {addFile} from "../../actions/filesActions";

class AddFilePanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            folderId: '',
            title: '',
            description: '',
            tags: []
        };
    }

    getBack = () => {
        this.props.history.goBack();
    };

    handleFolderIdChange = (event) => {
        this.setState({folderId: event.target.value});
    };

    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    };

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value});
    };

    addFile = () => {
        this.props.addFile(this.state.folderId, this.state.title, this.state.description, this.state.tags);
    };

    handleTagChange = (event, index) => {
        this.state.tags[index] = event.target.value;
        this.setState({tags: this.state.tags});
    };

    addTagInput = () => {
        this.state.tags.push('');
        this.setState({tags: this.state.tags});
    };

    render() {
        const tags = this.state.tags;
        return (
            <div className="actions-panel">
                <div>Folder Id: <input value={this.state.folderId} onChange={this.handleFolderIdChange}/>
                </div>
                <div>Title: <input value={this.state.title} onChange={this.handleTitleChange}/>
                </div>
                <div>Description Id: <textarea value={this.state.description} onChange={this.handleDescriptionChange}/>
                </div>

                <div>
                    {tags.map((tag, index) =>
                        <span key={index}><input value={tag} onChange={(event) => this.handleTagChange(event, index)}/></span>
                    )}
                    <FaPlusSquare size={40} onClick={this.addTagInput}/>
                </div>

                <div>
                    <button onClick={this.addFile}>Create</button>
                </div>

                <div>
                    <FaArrowAltCircleLeft size={40} onClick={this.getBack}/>
                </div>
            </div>
        );
    }
}

AddFilePanel.propTypes = {
    history: PropTypes.object.isRequired,
};


export default withRouter(
    connect(null,
        {addFile}
    )(AddFilePanel))

