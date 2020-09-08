import React from 'react';
//components
import Title from '../../components/title/title';
import './fresh-control.global.css';

class FrechControl extends React.Component {

    render() {
        return (
            <div id="fresh-control" className="fresh-control">

                <Title setClass="center" textMF="Dispenser de água e gelo" textDF="Dispenser de água e gelo"/>

                <p>Tenha água fresca e mais de 1,5kg de gelo por <br className="mobile"></br> dia e ainda <br className="desktop"></br> escolha entre gelo em cubos ou <br className="mobile"></br> gelo picado</p>

                <div className="fresh-animate">
                    <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/FreshControl-Brastemp.gif"></img>
                </div>

                <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/freshcontrol.png"></img>

            </div>
        )
    }
}
export default FrechControl;