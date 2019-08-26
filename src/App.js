import React, {Component} from 'react';
import './App.css';
import Audio from './audio/audio';
import '@fortawesome/fontawesome-free/css/all.min.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <div className="App">

                <header className="App-header ">
                    <p>Hello to Audionamix</p>
                </header>

                <main className="app-main">
                    <Audio/>
                    {/*<i className="fas fa-power-off"/>*/}

                </main>
            </div>
        );
    }

}

export default App;
