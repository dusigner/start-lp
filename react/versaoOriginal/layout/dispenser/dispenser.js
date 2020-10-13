import React from 'react';
//components
import Title from '../../components/title/title';
import './dispenser.global.css';

// img
let agua="https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2020/09/agua-ot.gif",
    gelo="https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2020/09/gelo-ot.gif",
    estatico="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/gelo-ot.gif",
    vali = 0;



class Dispenser extends React.Component {

    constructor(props) {
		super(props);
    }

    componentDidMount(){

        let target = document.querySelector('.interactive');
        let links = document.querySelectorAll('#dispenser-de-agua-e-gelo .switch-dispenser a')

        links.forEach(element => {
            element.addEventListener('click', ()=>{

                links.forEach(btn => {
                    btn.classList.remove('active');
                });

                if (element.dataset.agua == "true") {
                    element.classList.add('active');
                    target.src = agua;
                    if (versao == 'qrcode'){
                        dataLayer.push({
                            event: 'generic',
                            category: 'jupiter_inverse4_lp_external',
                            action: 'click_dispenser_de_agua_e_gelo ',
                            label: 'agua'
                        })
                    }
                    if (versao == 'video'){
                        dataLayer.push({
                            event: 'generic',
                            category: 'jupiter_inverse4_lp_internal_mobile',
                            action: 'click_dispenser_de_agua_e_gelo ',
                            label: 'agua'
                        })
                    }
                }

                if (element.dataset.gelo == "true") {
                    element.classList.add('active');
                    target.src = gelo;
                    if (versao == 'qrcode'){
                        dataLayer.push({
                            event: 'generic',
                            category: 'jupiter_inverse4_lp_external',
                            action: 'click_dispenser_de_agua_e_gelo ',
                            label: 'gelo'
                        })
                    }
                    if (versao == 'video'){
                        dataLayer.push({
                            event: 'generic',
                            category: 'jupiter_inverse4_lp_internal_mobile',
                            action: 'click_dispenser_de_agua_e_gelo ',
                            label: 'gelo'
                        })
                    }
                }

            })
        });

        window.addEventListener('scroll', this.onWindowScroll);


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
                                action: 'visibility_dispenser_de_agua_e_gelo',
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
                                action: 'visibility_dispenser_de_agua_e_gelo',
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
                                action: 'visibility_dispenser_de_agua_e_gelo',
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
                                action: 'visibility_dispenser_de_agua_e_gelo',
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
                                action: 'visibility_dispenser_de_agua_e_gelo',
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
                                action: 'visibility_dispenser_de_agua_e_gelo',
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
        
        observer.observe(document.querySelector("#dispenser-de-agua-e-gelo"));
        //Fim tag

    }
 
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll);
    }

    onWindowScroll = () => {

        if ((document.documentElement.scrollTop + 55) > document.querySelector("#dispenser-de-agua-e-gelo").offsetTop){
            
            if (vali == 0) {

                let target = document.querySelector('.interactive');
                let links = document.querySelectorAll('#dispenser-de-agua-e-gelo .switch-dispenser a');

                links[0].classList.add('active');
                target.src = gelo;

                setTimeout( function(){ 
                    links[0].classList.remove('active');
                    links[1].classList.add('active');
                    target.src = agua;
                }, 3000);

                vali = 1;
                window.removeEventListener('scroll', this.onWindowScroll);

            }

        }

    }

    

    render() {

        return (
            <div id="dispenser-de-agua-e-gelo" className="dispenser-de-agua-e-gelo section">

                <Title setClass="center" textMF="Dispenser de água e gelo⁴" textDF="Dispenser de água e gelo⁴"/>

                {/* <p>Tenha água fresca e mais de 1,5kg de gelo por <br className="mobile"></br> dia e ainda <br className="desktop"></br> escolha entre gelo em cubos ou <br className="mobile"></br> gelo picado</p> */}
                <p>
                    Tenha água fresca e mais de 1,5kg de 
                    gelo por dia¹, podendo escolher entre 
                    gelos em cubos ou picados.
                </p>

                <div className="switch-dispenser">
                    <a data-gelo="true">Gelo</a>
                    <span className="line"></span>
                    <a data-agua="true">Água</a>
                </div>

                <img 
                    className="interactive"
                    src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/gelo-ot.gif"
                ></img>

                <img src={agua} className="invisible"></img>
                <img src={gelo} className="invisible"></img>
                <div className="overflow_img">
                    <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/dispenser-bg.png"></img>
                </div>
            </div>
        )
    }
}
export default Dispenser;