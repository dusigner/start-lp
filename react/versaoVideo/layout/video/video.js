import React from 'react';
//components
import Title from '../../components/title/title';
import Video from '../../components/Video/Video';
import { Picture } from 'react-responsive-picture';
import './video.global.css';

//IMG
const imgMobile = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inverse-4-mob.png';
const imgTablet = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inverse-4-tab.png';
const imgDesktop = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inverse-4-desk.png';

class GeladeiraInverse extends React.Component {

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
                                action: 'visibility_video_inverse4',
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
                                action: 'visibility_video_inverse4',
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
                                action: 'visibility_video_inverse4',
                                label: '10',
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
                                action: 'visibility_video_inverse4',
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
                                action: 'visibility_video_inverse4',
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
                                action: 'visibility_video_inverse4',
                                label: 10
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
        
        observer.observe(document.querySelector("#video-inverse4"));
        //Fim tag
    }

    componentWillUnmount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div id="video-inverse4" className="video-refri observevideo">
                <Video
                    versao={this.props.versao}
                    poster="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/poster-video-geladeira-inverse-4.jpg" 
                    setSrc="https://consulwp.s3.amazonaws.com/wp-content/uploads/2020/09/brastemp_lancamento_geladeira_jupiter_oti.mp4"
                />

            </div>
        )
    }
}
export default GeladeiraInverse;