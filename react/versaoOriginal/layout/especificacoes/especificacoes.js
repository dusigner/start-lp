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

    componentDidMount() {

        // Inicio Tag
        var sec1,sec4,sec10;
        let vali1=0,vali2=0,vali3=0;
        const versao = this.props.versao; 

        const observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                
                if (versao == 'qrcode'){
                    if (vali1 == 0){
                        sec1 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_especificacoes_tecnicas_tipo_de_degelo ',
                                label: '1'
                            });
                        }, 3000)
                        vali1 = 1;
                    }
                    if (vali2 == 0){
                        sec4 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_especificacoes_tecnicas_tipo_de_degelo ',
                                label: '4'
                            });
                        }, 4000);
                        vali2 = 1;
                    }
                    if (vali3 == 0){
                        sec10 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_especificacoes_tecnicas_tipo_de_degelo ',
                                label: '10'
                            });
                        }, 10000);
                        vali3 = 1;
                    }
                }

                if (versao == 'video'){
                    if (vali1 == 0){
                        sec1 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_internal_mobile',
                                action: 'visibility_especificacoes_tecnicas_tipo_de_degelo ',
                                label: '1'
                            });
                        }, 1000);
                        vali1 = 1;
                    }
                    if (vali2 == 0){
                        sec4 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_internal_mobile',
                                action: 'visibility_especificacoes_tecnicas_tipo_de_degelo ',
                                label: '4'
                            });
                        }, 4000);
                        vali2 = 1;
                    }
                    if (vali3 == 0){
                        sec10 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_internal_mobile',
                                action: 'visibility_especificacoes_tecnicas_tipo_de_degelo ',
                                label: '10'
                            });
                        }, 10000);
                        vali3 = 1;
                    }
                }

            } else {
                clearTimeout(sec1);
                clearTimeout(sec4);
                clearTimeout(sec10);
            }
        }, { threshold: [0.5] });
        
        observer.observe(document.querySelector("#especificacoes"));
        //Fim tag
    }

    componentWillUnmount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div id="especificacoes" className="especificacoes section">

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