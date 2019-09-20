import React, {Component} from 'react'
import UserActionsPanel from "./actions/UserActionsPanel";
import FoldersPanel from "./folders/FoldersPanel";
import SearchPanel from "./search/SearchPanel";
import FilesPanel from "./files/FilesPanel";


class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <UserActionsPanel/>
                            </div>
                            <div className="col-sm">
                                <FoldersPanel/>
                            </div>
                            <div className="col-sm">
                                <SearchPanel/>
                                <FilesPanel/>
                            </div>
                        </div>
                    </div>
                    
                </header>
            </div>
        )
    }
}

export default App;