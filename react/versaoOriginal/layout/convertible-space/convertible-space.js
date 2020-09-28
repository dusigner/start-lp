import React from 'react';
//components
import Title from '../../components/title/title';
import './convertible-space.global.css';

let tag;
let versao; 

class ConvertibleSpace extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			value: 0
		}
    }
    
    componentDidMount() {

        // Inicio Tag
        var sec1,sec4,sec10;
        let vali1=0,vali2=0,vali3=0;
        versao = this.props.versao;

        const observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                
                if (versao == 'qrcode'){
                    if (vali1 == 0){
                        sec1 = setTimeout(()=>{
                            dataLayer.push({
                                event: 'generic',
                                category: 'jupiter_inverse4_lp_external',
                                action: 'visibility_convertible_space ',
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
                                action: 'visibility_convertible_space ',
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
                                action: 'visibility_convertible_space ',
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
                                action: 'visibility_convertible_space ',
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
                                action: 'visibility_convertible_space ',
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
                                action: 'visibility_convertible_space ',
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
        
        observer.observe(document.querySelector("#convertible-space"));
        //Fim tag
    }

    
    handleChange = (event) => {
        
        if ( window.innerWidth <= 1024) {

            if (this.state.value < event.target.value) {

                if ( event.target.value > 0 && event.target.value < 170 ){
                    this.setState({value: 170});
                } else if (event.target.value > 170 && event.target.value < 330) {
                    this.setState({value: 330});
                } else if (event.target.value > 330 && event.target.value < 640) {
                    this.setState({value: 640});
                } else if (event.target.value > 640 && event.target.value < 810) {
                    this.setState({value: 810});
                } else if (event.target.value > 810) {
                    this.setState({value: 1000});
                }

            } else if (this.state.value > event.target.value) {

                if (event.target.value < 1000 && event.target.value > 810) {
                    this.setState({value: 810});
                } else if (event.target.value < 810 && event.target.value > 640) {
                    this.setState({value: 640});
                } else if (event.target.value < 640 && event.target.value > 340) {
                    this.setState({value: 340});
                } else if (event.target.value < 340 && event.target.value > 170) {
                    this.setState({value: 170});
                } else if (event.target.value < 170) {
                    this.setState({value: 0});
                }

            }   

        } else {
            this.setState({value: event.target.value});
        }

        if (this.state.value < 110) {
            clearTimeout(tag);
            if (versao=="qrcode"){
                tag = setTimeout(()=>{ 
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_external',
                        action: 'slider_convertible_space ',
                        label: 'vinhos_e_cervejas_artesanais'
                    })
                }, 1000);
            }
            if (versao=="video"){
                tag = setTimeout(()=>{ 
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_internal_mobile',
                        action: 'slider_convertible_space ',
                        label: 'vinhos_e_cervejas_artesanais'
                    })
                }, 1000);
            }
        }
        if (this.state.value > 110 && this.state.value < 260) {
            clearTimeout(tag);
            if (versao=="qrcode"){
                tag = setTimeout(()=>{ 
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_external',
                        action: 'slider_convertible_space ',
                        label: 'frutas_e_vegetais'
                    })
                }, 1000);
            }
            if (versao=="video"){
                tag = setTimeout(()=>{ 
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_internal_mobile',
                        action: 'slider_convertible_space ',
                        label: 'frutas_e_vegetais'
                    })
                }, 1000);
            }
        }
        if (this.state.value > 260 && this.state.value < 550) {
            clearTimeout(tag);
            if (versao=="qrcode"){
                tag = setTimeout(()=>{ 
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_external',
                        action: 'slider_convertible_space ',
                        label: 'carnes_e_peixes'
                    })
                }, 1000);
            }
            if (versao=="video"){
                tag = setTimeout(()=>{ 
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_internal_mobile',
                        action: 'slider_convertible_space ',
                        label: 'carnes_e_peixes'
                    })
                }, 1000);
            }
        }
        if (this.state.value > 550 && this.state.value < 740) {
            clearTimeout(tag);
            if (versao=="qrcode"){
                tag = setTimeout(()=>{ 
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_external',
                        action: 'slider_convertible_space ',
                        label: 'congelamento_suave'
                    })
                }, 1000);
            }
            if (versao=="video"){
                tag = setTimeout(()=>{ 
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_internal_mobile',
                        action: 'slider_convertible_space ',
                        label: 'congelamento_suave'
                    })
                }, 1000);
            }
        }
        if (this.state.value > 740 && this.state.value < 920) {
            clearTimeout(tag);
            if (versao=="qrcode"){
                tag = setTimeout(()=>{ 
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_external',
                        action: 'slider_convertible_space ',
                        label: 'congelamento_medio'
                    })
                }, 1000);
            }
            if (versao=="video"){
                tag = setTimeout(()=>{ 
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_internal_mobile',
                        action: 'slider_convertible_space ',
                        label: 'congelamento_medio'
                    })
                }, 1000);
            }
        }
        if (this.state.value > 920) {
            clearTimeout(tag);
            if (versao=="qrcode"){
                tag = setTimeout(()=>{ 
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_external',
                        action: 'slider_convertible_space ',
                        label: 'congelamento_intenso'
                    })
                }, 1000);
            }
            if (versao=="video"){
                tag = setTimeout(()=>{ 
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_internal_mobile',
                        action: 'slider_convertible_space ',
                        label: 'congelamento_intenso'
                    })
                }, 1000);
            }
        }

    }

    btn_vinho = (event) => { this.setState({value: 0}); }
    btn_fruta = (event) => { this.setState({value: 170}); }
    btn_carne = (event) => { this.setState({value: 330}); }
    btn_suave = (event) => { this.setState({value: 640}); }
    btn_medio = (event) => { this.setState({value: 810}); }
    btn_intenso = (event) => { this.setState({value: 1000}); }

    render() {

        return (
            <div id="convertible-space" className={`convertible-space section ${this.state.value < 110 ? "vinhos" : ""} ${this.state.value > 110 && this.state.value < 260 ? "frutas-vegetais" : "" } ${this.state.value > 260 && this.state.value < 550 ? "carnes-peixes" : "" } ${this.state.value > 550 && this.state.value < 740 ? "congelamento-suave" : "" } ${this.state.value > 740 && this.state.value < 920 ? "congelamento-medio" : "" } ${this.state.value > 920 ? "congelamento-intenso" : "" } `}>

                <Title setClass="center" textMF="Convertible Space" textDF="Convertible Space"/>

                <p>Compartimento com controle independente <br className="mobile"></br> de <br className="desktop"></br> temperatura, você escolhe entre freezer ou <br className="mobile"></br><br className="desktop"></br> refrigerador com mais de 12 opções de <br className="mobile"></br><br className="desktop"></br> temperatura</p>

                <div className="line-chose">

                    <div className="line-text">
                        <h3>MODO<br></br>REFRIGERADOR</h3>
                        <p className={`${this.state.value < 110 ? "active" : "" }`} onClick={this.btn_vinho}>10°C</p>
                        <p className={`${this.state.value > 110 && this.state.value < 260   ? "active" : "" }`} onClick={this.btn_fruta}>4°C</p>
                        <p className={`${this.state.value > 260 && this.state.value < 550 ? "active" : "" }`} onClick={this.btn_carne}>0°C</p>
                        <h3>MODO<br></br>FREEZER</h3>
                        <p className={`${this.state.value > 550 && this.state.value < 740 ? "active" : "" }`} onClick={this.btn_suave}>-7°C</p>
                        <p className={`${this.state.value > 740 && this.state.value < 920 ? "active" : "" }`} onClick={this.btn_medio}>-12°C</p>
                        <p className={`${this.state.value > 920 ? "active" : "" }`} onClick={this.btn_intenso}>-16°C a<br></br>22°C</p>
                    </div>

                    <div className="line-text-index">
                        <p className={`${this.state.value < 110 ? "active" : "" }`}>Vinhos e <br></br>cervejas artesanais</p>
                        <p className={`${this.state.value > 110 && this.state.value < 260   ? "active" : "" }`}>Frutas e <br></br> vegetais</p>
                        <p className={`${this.state.value > 260 && this.state.value < 550 ? "active" : "" }`}>Carnes e <br></br> peixes</p>
                        <p className={`${this.state.value > 550 && this.state.value < 740 ? "active" : "" }`}>Congelamento <br></br> suave</p>
                        <p className={`${this.state.value > 740 && this.state.value < 920 ? "active" : "" }`}>Congelamento <br></br> médio</p>
                        <p className={`${this.state.value > 920 ? "active" : "" }`}>Congelamento <br></br> intenso</p>
                    </div>

                    <input 
                    className="slider"
                    type="range"
                    min="0" max="1000" 
                    value={this.state.value} 
                    onChange={this.handleChange}
                    data-orientation="vertical"
                    step="1"/>

                </div>

            </div>
        )
    }
}
export default ConvertibleSpace;