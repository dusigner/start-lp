import React from 'react';
//components
import Title from '../../components/title/title';
import { Picture } from 'react-responsive-picture';
import './geladeira-inverse.global.css';

//IMG
const imgMobile = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inverse-4-mob.png';
const imgTablet = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inverse-4-tab.png';
const imgDesktop = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inverse-4-desk.png';

class GeladeiraInverse extends React.Component {

    constructor(props) {
        super(props);
    }

    
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
                                action: 'visibility_brastemp_inverse_4 ',
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
                                action: 'visibility_brastemp_inverse_4 ',
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
                                action: 'visibility_brastemp_inverse_4 ',
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
                                action: 'visibility_brastemp_inverse_4 ',
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
                                action: 'visibility_brastemp_inverse_4 ',
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
                                action: 'visibility_brastemp_inverse_4 ',
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
        
        observer.observe(document.querySelector("#geladeira-inverse-4"));
        //Fim tag
    }

    render() {
        return (
            <div id="geladeira-inverse-4" className="geladeira-inverse section">

                <Title setClass="center" textMF="Brastemp Inverse | 4" textDF="Brastemp Inverse | 4"/>

                <p>
                        Máximo design, máxima sofisticação. Com 
                        <br className="mobile"></br> 4 compartimentos
                        <br className="desktop"></br> e mais de
                        { this.props.versao == "qrcode" && <> 500L </> }
					    { this.props.versao == "video" && <> <a href="https://www.brastemp.com.br/eletrodomesticos/geladeira---refrigerador" title="Geladeira Brastemp">500L</a> </> }
                        para 
                        <br className="mobile"></br> você armazenar tudo o que quiser. 
                </p>

                <div >
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

            </div>
        )
    }
}
export default GeladeiraInverse;