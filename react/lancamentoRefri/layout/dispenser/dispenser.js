import React from 'react';
//components
import Title from '../../components/title/title';
import './dispenser.global.css';

class Dispenser extends React.Component {

    render() {
        return (
            <div id="dispenser-de-agua-e-gelo" className="dispenser-de-agua-e-gelo">

                <Title setClass="center" textMF="Dispenser de água e gelo" textDF="Dispenser de água e gelo"/>

                <p>Tenha água fresca e mais de 1,5kg de gelo por <br className="mobile"></br> dia e ainda <br className="desktop"></br> escolha entre gelo em cubos ou <br className="mobile"></br> gelo picado</p>

                <div className="switch-dispenser">
                    <a href="#" className="active">Gelo</a>
                    <span className="line"></span>
                    <a href="#">Água</a>
                </div>

                <img 
                    className="interactive"
                    data-agua="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/agua.gif"
                    data-gelo="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/gelo.gif"
                    data-estatico="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/gelo.gif"
                ></img>

                <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/dispenser-bg.png"></img>

            </div>
        )
    }
}
export default Dispenser;