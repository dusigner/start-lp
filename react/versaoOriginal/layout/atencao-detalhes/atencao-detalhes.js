import React from 'react';
//components
import Title from '../../components/title/title';
import './atencao-detalhes.global.css';



class AtencaoDetalhes extends React.Component {

    render() {
        return (
            <div id="atencao-detalhes" className="atencao-detalhes section">

                <Title setClass="center" textMF="Atenção aos detalhes" textDF="Atenção aos" textDS="detalhes"/>

                <div className="acesso-info">
                    <div>
                        <h3>Easy Access</h3>
                        <p>Deslize a bandeja e acesse os produtos <br></br> do dia a dia</p>
                    </div>
                    <picture>
                        <div className="efectHover">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/easyAccess.png"></img>
                        </div>
                    </picture>
                </div>

                <div className="acesso-info">
                    <div>
                        <h3>In Door Ice</h3>
                        <p>Exclusiva fabricação de gelo integrada <br></br> à porta: mais espaço interno na sua <br></br> geladeira</p>
                    </div>
                    <picture>
                        <div className="efectHover">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inDorIce.png"></img>
                        </div>
                    </picture>
                </div>

            </div>
        )
    }
}
export default AtencaoDetalhes;