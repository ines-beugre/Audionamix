import React, {Component} from 'react';

export default class AudioPlayer extends Component {

    constructor() {
        super();
    }

    render() {
        const {file} = this.props;
        return (
            <div>
                <figure>
                    <figcaption></figcaption>
                    <audio
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
