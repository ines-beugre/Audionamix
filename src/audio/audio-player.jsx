import React, {Component} from 'react';

export default class AudioPlayer extends Component {

    constructor() {
        super();
    }

    handlePlay = () => {
        this.audio.play().then(() => {
            console.log("---");
        })
            .catch((error) => {
                console.log("Erreur: " +error);
            });
    }

    render() {
        const {file} = this.props;
        return (
            <div>
                <figure>
                    <figcaption></figcaption>
                    <audio
                        ref={instance => this.audio = instance}
                        controls
                        src={file}
                    >
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                </figure>
            </div>
        )
    }
}
