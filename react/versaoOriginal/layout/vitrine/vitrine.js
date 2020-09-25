import React, { Component } from "react";
import Slider from "../../../node_modules/react-slick";
//components
import './vitrine.global.css';

class Vitrine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
    }

    
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });

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
                                action: 'visibility_vitrine ',
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
                                action: 'visibility_vitrine ',
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
                                action: 'visibility_vitrine ',
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
        
        observer.observe(document.querySelector("#vitrine"));
        //Fim tag

    }
    
      render() {
        return (
            <div id="vitrine" className="vitrine -sem-compra">

                <div className="vitrine-info">
                    <h2>Geladeira Brastemp Inverse | 4</h2>
                    <h3>543 litros cor Inox com Convertible Space</h3>
                    <h4>BRO90AK</h4>
                </div>

                <div className="vitrine-imagens">
                    <Slider
                        className="galeria-slider"
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                    >
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-01.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-02.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-03.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-04.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-05.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-06.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-07.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-08.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-09.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-10.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-11.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-12.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-13.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-14.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-16.png"></img>
                        </div>
                    </Slider>

                    <Slider
                    className="galeria-slider-thumb"
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={5}
                    centerPadding={"0px"}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    centerMode={true}
                    >
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-01.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-02.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-03.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-04.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-05.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-06.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-07.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-08.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-09.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-10.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-11.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-12.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-13.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-14.png"></img>
                        </div>
                        <div className="item">
                            <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/vitrine-16.png"></img>
                        </div>
                    </Slider>
                </div>
                
            </div>
        );
      }

}
export default Vitrine;