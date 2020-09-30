import React from 'react';
//components
import Title from '../../components/title/title';
import './fresh-control.global.css';

class FrechControl extends React.Component {

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
                                action: 'visibility_fresh_control ',
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
                                action: 'visibility_fresh_control ',
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
                                action: 'visibility_fresh_control ',
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
                                action: 'visibility_fresh_control ',
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
                                action: 'visibility_fresh_control ',
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
                                action: 'visibility_fresh_control ',
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
        
        observer.observe(document.querySelector("#fresh-control"));
        //Fim tag
    }

    render() {
        return (
            <div id="fresh-control" className="fresh-control section">

                <Title setClass="center" textMF="Fresh Control" textDF="Fresh Control"/>

                <p>
                    Tecnologia que ajuda a conservar seus alimentos frescos por até 15 dias² e elimina até 99% das bactérias³ da sua geladeira.
                </p>

                <div className="fresh-animate">
                    <img src="https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2020/09/FreshControl-Brastemp.gif"></img>
                </div>

                <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/freshcontrol.png"></img>

            </div>
        )
    }
}
export default FrechControl;