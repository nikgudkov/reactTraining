import React, {Component} from 'react'
import UserActionsPanel from "./actions/UserActionsPanel";
import FoldersPanel from "./folders/FoldersPanel";
import SearchPanel from "./search/SearchPanel";
import FilesPanel from "./files/FilesPanel";

class App extends Component {
    
    render() {
        return (
            <div className="row">
                <div className="col-md-1">
                    <UserActionsPanel history={this.props.history}/>
                </div>
                <div className="col-md-5">
                    <FoldersPanel/>
                </div>
                <div className="col-md-6">
                    <SearchPanel/>
                    <FilesPanel/>
                </div>
            </div>

        )
    }
}

export default App;