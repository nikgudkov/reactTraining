import React from 'react';
import PropTypes from 'prop-types'
import {FaFileAlt} from "react-icons/fa"

class File extends React.Component {


    render() {
        console.log(this.props.file);
        const {title} = this.props.file;
        return (
            <div className="col-md-3">
                <FaFileAlt size={40}/>
                <div>{title}</div>
            </div>
        );
    }
}

File.propTypes = {
    file: PropTypes.shape({
        description: PropTypes.string.isRequired,
        directoryId: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        position: PropTypes.number.isRequired,
        tags: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired
    })
};

export default File;
