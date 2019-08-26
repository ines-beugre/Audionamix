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
            isPlayed: false,
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
        this.setState({isPlayed: true});
        this.musicPlayer.handlePlay();
        this.voicePlayer.handlePlay();
    }

    handlePause = (e) => {
        e.preventDefault();
        this.setState({isPlayed: false});
        this.musicPlayer.handlePause();
        this.voicePlayer.handlePause();
    }

    render() {
        const {music, voice, isPlayed} = this.state;
        return (
            <div className="audio">
                <div className="audio-liste">
                    <div className="audio-unique">
                        <Uploader label="Télécharger la musique " onUpload={this.handleMusicUpload}/>
                        <AudioPlayer
                            file={music}
                            ref={instance => this.musicPlayer = instance}
                        />
                    </div>

                    <div className="audio-unique">
                        <Uploader label="Télécharger les paroles" onUpload={this.handleVoiceUpload}/>
                        <AudioPlayer
                            file={voice}
                            ref={instance => this.voicePlayer = instance}
                        />
                    </div>
                </div>

                {
                    !isPlayed ?
                <button onClick={this.handlePlay}><i className="fas fa-play"/> </button>
                        :
                        <button onClick={this.handlePause}><i className="fas fa-pause"/></button>

                }
            </div>
        )

    }
}

