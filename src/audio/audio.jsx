import React, {Component} from 'react';
import './audio.scss';

export default class Audio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: ""
        }
    }

    handleUpload = (e) => {
        // Récupère le fichier téléchargé de la balise input
        const files = e.target.files;

        let reader = new FileReader();
        // Permet de lire le fichier téléchargé
        reader.readAsDataURL(files[0]);

        // Permet d'effectuer une action une fois le téléchargement du fichier terminé
        reader.onload = (e) => {
            console.log(e.target.result);
            //Enregistre le resultat du téléchargement dans le state
            this.setState({file: e.target.result});
        }
    }

    render() {

        return (
            <section>
                <div>
                    <input type="file" onChange={this.handleUpload}/>
                    <input type="file" onChange={this.handleUpload}/>
                </div>

                <figure>
                    <figcaption></figcaption>
                    <audio
                        controls
                        src={this.state.file}>
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                </figure>

            </section>
        )

    }
}
