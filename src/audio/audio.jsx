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
        this.musicPlayer.handlePlay();
        this.voicePlayer.handlePlay();
    }

    render() {
        const {music, voice} = this.state;
        return (
            <div className="audio">
                <div className="audio-unique">
                    <div>
                        <Uploader label="Télécharger la musique " onUpload={this.handleMusicUpload}/>
                        <AudioPlayer
                            file={music}
                            ref={instance => this.musicPlayer = instance}
                        />
                    </div>

                    <div>
                        <Uploader label="Télécharger la voix" onUpload={this.handleVoiceUpload}/>
                        <AudioPlayer
                            file={voice}
                            ref={instance => this.voicePlayer = instance}
                        />
                    </div>
                </div>

                <button onClick={this.handlePlay}><i className="fas fa-play"/> </button>
            </div>
        )

    }
}

