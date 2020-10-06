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

    constructor(props) {
		super(props);
    }

    componentDidMount() {

        // Inicio Tag
        var sec1,sec4,sec10;
        let vali1t=0,vali2t=0,vali3t=0;
        let vali1p=0,vali2p=0,vali3p=0;
        let vali1c=0,vali2c=0,vali3c=0;
        const versao = this.props.versao; 

        const observe1 = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                
                if (versao == 'qrcode'){
                    if (vali1t == 0){
                        sec1 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_especificacoes_tecnicas_tipo_de_degelo ',
                                label: '1'
                            });
                        }, 3000)
                        vali1t = 1;
                    }
                    if (vali2t == 0){
                        sec4 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_especificacoes_tecnicas_tipo_de_degelo ',
                                label: '4'
                            });
                        }, 4000);
                        vali2t = 1;
                    }
                    if (vali3t == 0){
                        sec10 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_especificacoes_tecnicas_tipo_de_degelo ',
                                label: '10'
                            });
                        }, 10000);
                        vali3t = 1;
                    }
                }

                if (versao == 'video'){
                    if (vali1t == 0){
                        sec1 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_internal_mobile',
                                action: 'visibility_especificacoes_tecnicas_tipo_de_degelo ',
                                label: '1'
                            });
                        }, 1000);
                        vali1t = 1;
                    }
                    if (vali2t == 0){
                        sec4 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_internal_mobile',
                                action: 'visibility_especificacoes_tecnicas_tipo_de_degelo ',
                                label: '4'
                            });
                        }, 4000);
                        vali2t = 1;
                    }
                    if (vali3t == 0){
                        sec10 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_internal_mobile',
                                action: 'visibility_especificacoes_tecnicas_tipo_de_degelo ',
                                label: '10'
                            });
                        }, 10000);
                        vali3t = 1;
                    }
                }

            } else {
                clearTimeout(sec1);
                clearTimeout(sec4);
                clearTimeout(sec10);
            }
        }, { threshold: [0.5] });
        const observe2 = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                
                if (versao == 'qrcode'){
                    if (vali1p == 0){
                        sec1 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_especificacoes_tecnicas_posicao_do_freezer ',
                                label: '1'
                            });
                        }, 3000)
                        vali1p = 1;
                    }
                    if (vali2p == 0){
                        sec4 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_especificacoes_tecnicas_posicao_do_freezer ',
                                label: '4'
                            });
                        }, 4000);
                        vali2p = 1;
                    }
                    if (vali3p == 0){
                        sec10 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_especificacoes_tecnicas_posicao_do_freezer ',
                                label: '10'
                            });
                        }, 10000);
                        vali3p = 1;
                    }
                }

                if (versao == 'video'){
                    if (vali1p == 0){
                        sec1 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_internal_mobile',
                                action: 'visibility_especificacoes_tecnicas_posicao_do_freezer ',
                                label: '1'
                            });
                        }, 1000);
                        vali1p = 1;
                    }
                    if (vali2p == 0){
                        sec4 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_internal_mobile',
                                action: 'visibility_especificacoes_tecnicas_posicao_do_freezer ',
                                label: '4'
                            });
                        }, 4000);
                        vali2p = 1;
                    }
                    if (vali3p == 0){
                        sec10 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_internal_mobile',
                                action: 'visibility_especificacoes_tecnicas_posicao_do_freezer ',
                                label: '10'
                            });
                        }, 10000);
                        vali3p = 1;
                    }
                }

            } else {
                clearTimeout(sec1);
                clearTimeout(sec4);
                clearTimeout(sec10);
            }
        }, { threshold: [0.5] });
        const observe3 = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                
                if (versao == 'qrcode'){
                    if (vali1c == 0){
                        sec1 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_especificacoes_tecnicas_classificacao_energetica ',
                                label: '1'
                            });
                        }, 3000)
                        vali1c = 1;
                    }
                    if (vali2c == 0){
                        sec4 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_especificacoes_tecnicas_classificacao_energetica ',
                                label: '4'
                            });
                        }, 4000);
                        vali2c = 1;
                    }
                    if (vali3c == 0){
                        sec10 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_especificacoes_tecnicas_classificacao_energetica ',
                                label: '10'
                            });
                        }, 10000);
                        vali3c = 1;
                    }
                }

                if (versao == 'video'){
                    if (vali1c == 0){
                        sec1 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_internal_mobile',
                                action: 'visibility_especificacoes_tecnicas_classificacao_energetica ',
                                label: '1'
                            });
                        }, 1000);
                        vali1c = 1;
                    }
                    if (vali2c == 0){
                        sec4 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_internal_mobile',
                                action: 'visibility_especificacoes_tecnicas_classificacao_energetica ',
                                label: '4'
                            });
                        }, 4000);
                        vali2c = 1;
                    }
                    if (vali3c == 0){
                        sec10 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_internal_mobile',
                                action: 'visibility_especificacoes_tecnicas_classificacao_energetica ',
                                label: '10'
                            });
                        }, 10000);
                        vali3c = 1;
                    }
                }

            } else {
                clearTimeout(sec1);
                clearTimeout(sec4);
                clearTimeout(sec10);
            }
        }, { threshold: [0.5] });
        
        observe1.observe(document.querySelector("#tipos-de-gelo"));
        observe2.observe(document.querySelector("#posicao-do-freezer"));
        observe3.observe(document.querySelector("#classificacao-energetica"));
        //Fim tag
    }

    componentWillUnmount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div id="especificacoes" className="especificacoes section">

                <Title setClass="center" textMF="Especificações técnicas" textDF="Especificações técnicas"/>

                <dl className="especDiv">
                    <dt>Cor principal <br className="mobile"></br> (visão frontal)</dt>
                    <dd>Inox</dd>
                    <dt>Linha</dt>
                    <dd>Inverse</dd>
                    <dt>Capacidade total <br className="mobile"></br> líquida</dt>
                    <dd>543 Litros</dd>
                    <dt id="tipos-de-gelo">Tipo de degelo</dt>
                    <dd>Frost Free</dd>
                    <dt>Dimensões sem embalagem</dt>
                    <dd>Largura 91,1cm <br></br> Altura 187.7cm <br></br> Profundidade 73.3cm (com porta)<br></br> Profundidade 62.0cm (sem porta)</dd>
                    <dt>Dimensões com embalagem</dt>
                    <dd>Largura 99.6 cm <br></br> Altura 199.1cm <br></br> Profundidade 79.4cm </dd>
                    <dt>Número de portas</dt>
                    <dd>4</dd>
                    <dt id="posicao-do-freezer">Posição do freezer</dt>
                    <dd>Embaixo</dd>
                    <dt>Painel de controle</dt>
                    <dd>Externo</dd>
                    <dt>Voltagem</dt>
                    <dd>127 V e 220 V</dd>
                    <dt id="classificacao-energetica">Classificação <br className="mobile"></br> energética</dt>
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