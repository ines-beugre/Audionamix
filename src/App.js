import React, {Component} from 'react';
import './App.css';
import Audio from './audio/audio';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <div className="App">

                <header className="App-header ">
                    <h5>Hello to Audionamix</h5>
                </header>

                <main className="app-main">
                    <Audio/>
                    {/*<Audio/>*/}

                </main>
            </div>
        );
    }

}

export default App;
