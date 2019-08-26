import React, {Component} from 'react';
import './audio.scss';
import Uploader from './uploader';
import AudioPlayer from "./audio-player";
export default class Audio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: "",
            music: "",
            voice: "",
            files:[]
        }
    }

    handleMusicUpload = (file) => {
        this.setState({...this.state, music: file});
    }

    handleVoiceUpload = (file) => {
        this.setState({...this.state, voice: file});
    }

    handlePlay = (e) => {
        e.preventDefault();
    }

    render() {
        const {music, voice} = this.state;
        return (
            <section>
                <div>
                    <Uploader label="Télécharger la musique " onUpload={this.handleMusicUpload}/>
                    <Uploader label="Télécharger la voix " onUpload={this.handleVoiceUpload}/>
                </div>

                <AudioPlayer
                   file={music}
                   onPlay={this.handlePlay}
                />
            </section>
        )

    }
}

