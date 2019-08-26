import React, {Component} from 'react';

export default class Uploader extends Component {

    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        const files = e.target.files; // Récupère le fichier téléchargé de la balise input

        let reader = new FileReader();
        reader.readAsDataURL(files[0]); // Permet de lire le fichier téléchargé (le premier)

        // Permet d'effectuer une action une fois le téléchargement du fichier terminé
        reader.onload = (e) => {
            this.props.onUpload(e.target.result)
        }
    }

    render() {
        return(
            <div>
                <label>
                    {this.props.label}
                    <input type="file" onChange={this.handleChange} />
                </label>

            </div>
        )
    }
}
