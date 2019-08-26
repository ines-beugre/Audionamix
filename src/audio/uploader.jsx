import React, {Component} from 'react';
import './uploader.scss';
export default class Uploader extends Component {

    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        // Récupère le fichier téléchargé de la balise input
        const files = e.target.files;
        let reader = new FileReader();

        // Permet de lire le fichier téléchargé (le premier)
        reader.readAsDataURL(files[0]);

        // Permet d'effectuer une action une fois le téléchargement du fichier terminé
        reader.onload = (e) => {
            this.props.onUpload(e.target.result)
        }
    }

    render() {
        return(
            <div className="uploader">
                <label>
                    {this.props.label}
                    <input type="file" onChange={this.handleChange} />
                </label>

            </div>
        )
    }
}
