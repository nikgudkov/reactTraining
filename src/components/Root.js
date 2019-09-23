import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {PropTypes} from 'prop-types'
import {Provider} from 'react-redux'
import {Route} from 'react-router-dom'
import App from "./App";
import AddFolderPanel from "./actions/AddFolderPanel";

const Root = ({store}) => (
    <Provider store={store}>
        <div>
            <div className="App">
                <header className="App-header">

                    <div className="container manager-panel">
                        <p className="row border-bottom">Manager</p>

                        <Route exact path="/" component={App}/>
                        <Route path="/add_folder" component={AddFolderPanel}/>

                    </div>

                </header>
            </div>
        </div>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root;
