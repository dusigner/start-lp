import React from 'react';
//components
import Title from '../../components/title/title';
import { Picture } from 'react-responsive-picture';
import './especificacoes.global.css';

//IMG
const imgMobile = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/feature.png';
const imgTablet = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/feature.png';
const imgDesktop = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/feature.png';

class EspecificacoesTecnicas extends React.Component {

    render() {
        return (
            <div id="especificacoes" className="especificacoes">

                <Title setClass="center" textMF="Especificações técnicas" textDF="Especificações técnicas"/>

                {
                    //<p>O exclusivo sistema Fresh Control combina <br className="mobile"></br> maior estabilidade de temperatura, <br className="desktop"></br> controle <br className="mobile"></br> de umidade e purificação do ar para manter <br className="mobile"></br> os alimentos bem preservados <br className="desktop"></br> em qualquer <br className="mobile"></br> lugar da geladeira.</p>
                }

                <dl className="especDiv">
                    <dt>Cor principal <br className="mobile"></br> (visão frontal)</dt>
                    <dd>Inox</dd>
                    <dt>Linha</dt>
                    <dd>Inverse</dd>
                    <dt>Capacidade total <br className="mobile"></br> líquida</dt>
                    <dd>543 Litros</dd>
                    <dt>Tipo de degelo</dt>
                    <dd>Frost Free</dd>
                    <dt>Dimensões sem embalagem</dt>
                    <dd>Largura 90.5cm <br></br> Altura 187.2cm <br></br> Profundidade 72.4cm</dd>
                    <dt>Dimensões com embalagem</dt>
                    <dd>Largura 99.1 cm <br></br> Altura 198.1cm <br></br> Profundidade 79.5cm </dd>
                    <dt>Número de portas</dt>
                    <dd>4</dd>
                    <dt>Posição do freezer</dt>
                    <dd>Embaixo</dd>
                    <dt>Painel de controle</dt>
                    <dd>Externo</dd>
                    <dt>Voltagem</dt>
                    <dd>127 V e 220 V</dd>
                    <dt>Classificação <br className="mobile"></br> energética</dt>
                    <dd>127 V - A</dd>
                    <dt>Classificação <br className="mobile"></br> energética</dt>
                    <dd>220 V - A</dd>
                </dl>

                <Picture
                    sources = {[
                        {
                            srcSet: imgMobile,
                            media: "(max-width: 767px)",
                        },
                        {
                            srcSet: imgDesktop,
                            media: "(min-width: 1024px)",
                        },
                        {
                            srcSet: imgTablet,
                            media: "(min-width: 768px)",
                        },
                    ]}
                />

            </div>
        )
    }
}
export default EspecificacoesTecnicas;