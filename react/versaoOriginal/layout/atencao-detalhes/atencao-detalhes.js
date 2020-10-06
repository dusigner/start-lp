import React from 'react';
//components
import Title from '../../components/title/title';
import './atencao-detalhes.global.css';

class AtencaoDetalhes extends React.Component {

    componentDidMount() {

        // Inicio Tag
        var sec1,sec4,sec10;
        let vali1=0,vali2=0,vali3=0;
        const versao = this.props.versao; 

        const observer1 = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                
                if (versao == 'qrcode'){
                    if (vali1 == 0){
                        sec1 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_easy_access ',
                                label: '1',
                            });
                        }, 3000)
                        vali1 = 1;
                    }
                    if (vali2 == 0){
                        sec4 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_easy_access ',
                                label: '4',
                            });
                        }, 4000);
                        vali2 = 1;
                    }
                    if (vali3 == 0){
                        sec10 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_easy_access ',
                                label: '10',
                            });
                        }, 10000);
                        vali3 = 1;
                    }
                }

                if (versao == 'video'){

                    if(window.innerWidth < 1025){
                        if (vali1 == 0){
                            sec1 = setTimeout(()=>{ 
                                dataLayer.push({
                                    event: 'generic',
                                    category: 'jupiter_inverse4_lp_internal_mobile',
                                    action: 'visibility_easy_access',
                                    label: 1
                                });
                            }, 1000);
                            vali1 = 1;
                        }
                        if (vali2 == 0){
                            sec4 = setTimeout(()=>{
                                dataLayer.push({
                                    event: 'generic',
                                    category: 'jupiter_inverse4_lp_internal_mobile',
                                    action: 'visibility_easy_access',
                                    label: 4
                                });
                            }, 4000);
                            vali2 = 1;
                        }
                        if (vali3 == 0){
                            sec10 = setTimeout(()=>{
                                dataLayer.push({
                                    event: 'generic',
                                    category: 'jupiter_inverse4_lp_internal_mobile',
                                    action: 'visibility_easy_access',
                                    label: 10
                                });
                            }, 10000);
                            vali3 = 1;
                        }
                    } else {
                        if (vali1 == 0){
                            sec1 = setTimeout(()=>{ 
                                dataLayer.push({
                                    event: 'generic',
                                    category: 'jupiter_inverse4_lp_internal_desktop',
                                    action: 'visibility_easy_access',
                                    label: 1
                                });
                            }, 1000);
                            vali1 = 1;
                        }
                        if (vali2 == 0){
                            sec4 = setTimeout(()=>{
                                dataLayer.push({
                                    event: 'generic',
                                    category: 'jupiter_inverse4_lp_internal_desktop',
                                    action: 'visibility_easy_access',
                                    label: 4
                                });
                            }, 4000);
                            vali2 = 1;
                        }
                        if (vali3 == 0){
                            sec10 = setTimeout(()=>{
                                dataLayer.push({
                                    event: 'generic',
                                    category: 'jupiter_inverse4_lp_internal_desktop',
                                    action: 'visibility_easy_access',
                                    label: 10
                                });
                            }, 10000);
                            vali3 = 1;
                        }
                    }
                }

            } else {
                clearTimeout(sec1);
                clearTimeout(sec4);
                clearTimeout(sec10);
            }
        }, { threshold: [0.5] });

        const observer2 = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                
                if (versao == 'qrcode'){
                    if (vali1 == 0){
                        sec1 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_in_dor_ice ',
                                label: '1',
                            });
                        }, 3000)
                        vali1 = 1;
                    }
                    if (vali2 == 0){
                        sec4 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_in_dor_ice ',
                                label: '4',
                            });
                        }, 4000);
                        vali2 = 1;
                    }
                    if (vali3 == 0){
                        sec10 = setTimeout(()=>{ 
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_in_dor_ice ',
                                label: '10',
                            });
                        }, 10000);
                        vali3 = 1;
                    }
                }

                if (versao == 'video'){

                    if(window.innerWidth < 1025){
                        if (vali1 == 0){
                            sec1 = setTimeout(()=>{ 
                                dataLayer.push({
                                    event: 'generic',
                                    category: 'jupiter_inverse4_lp_internal_mobile',
                                    action: 'visibility_in_dor_ice',
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
                                    action: 'visibility_in_dor_ice',
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
                                    action: 'visibility_in_dor_ice',
                                    label: '10'
                                });
                            }, 10000);
                            vali3 = 1;
                        }
                    } else {
                        if (vali1 == 0){
                            sec1 = setTimeout(()=>{ 
                                dataLayer.push({
                                    event: 'generic',
                                    category: 'jupiter_inverse4_lp_internal_desktop',
                                    action: 'visibility_in_dor_ice',
                                    label: '1'
                                });
                            }, 1000);
                            vali1 = 1;
                        }
                        if (vali2 == 0){
                            sec4 = setTimeout(()=>{
                                dataLayer.push({
                                    event: 'generic',
                                    category: 'jupiter_inverse4_lp_internal_desktop',
                                    action: 'visibility_in_dor_ice',
                                    label: '4'
                                });
                            }, 4000);
                            vali2 = 1;
                        }
                        if (vali3 == 0){
                            sec10 = setTimeout(()=>{
                                dataLayer.push({
                                    event: 'generic',
                                    category: 'jupiter_inverse4_lp_internal_desktop',
                                    action: 'visibility_in_dor_ice',
                                    label: '10'
                                });
                            }, 10000);
                            vali3 = 1;
                        }
                    }
                }

            } else {
                clearTimeout(sec1);
                clearTimeout(sec4);
                clearTimeout(sec10);
            }
        }, { threshold: [0.5] });

        observer1.observe(document.querySelector("#easy-access"));
        observer2.observe(document.querySelector("#in-dor-ice"));
        //Fim tag
    }

    render() {
        return (
            <div id="atencao-detalhes" className="atencao-detalhes section">

                <Title setClass="center" textMF="Atenção aos detalhes" textDF="Atenção aos" textDS="detalhes"/>

                <div id="easy-access" className="acesso-info">
                    <div>
                        <h3>Easy Access</h3>
                        <p>
                            Deslize a primeira prateleira do freezer e 
                            acesse os alimentos do fundo facilmente, 
                            além de conseguir armazenar potes altos 
                            ou com tampa.
                        </p>
                    </div>
                    <picture>
                        <div className="efectHover">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/easyAccess.png"></img>
                        </div>
                    </picture>
                </div>

                <div id="in-dor-ice" className="acesso-info">
                    <div>
                        <h3>In Door Ice</h3>
                        <p>
                            Fabricação de gelo integrada à porta, o que 
                            dá mais espaço interno para a sua geladeira.
                        </p>
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