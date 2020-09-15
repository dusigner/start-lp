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

        console.log(this.props);
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