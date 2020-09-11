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
            <div id="vitrine" className="vitrine -sem-compra section">

                <h2>Geladeira Brastemp Inverse | 4</h2>
                <h3>543 litros cor Inox com Convertible Space</h3>
                <h4>BRO90AK</h4>

                <Slider
                    className="galeria-slider"
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    <div className="item">
                        <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/produto-vitrine-.png"></img>
                    </div>
                    <div className="item">
                        <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/produto-vitrine-1-.png"></img>
                    </div>
                    <div className="item">
                        <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/produto-vitrine-2-.png"></img>
                    </div>
                    <div className="item">
                        <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/produto-vitrine-3-.png"></img>
                    </div>
                    <div className="item">
                        <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/produto-vitrine-4-.png"></img>
                    </div>
                </Slider>

                <Slider
                className="galeria-slider-thumb"
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
                slidesToShow={5}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                >
                    <div className="item">
                        <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/produto-vitrine-.png"></img>
                    </div>
                    <div className="item">
                        <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/produto-vitrine-1-.png"></img>
                    </div>
                    <div className="item">
                        <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/produto-vitrine-2-.png"></img>
                    </div>
                    <div className="item">
                        <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/produto-vitrine-3-.png"></img>
                    </div>
                    <div className="item">
                        <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/produto-vitrine-4-.png"></img>
                    </div>
                </Slider>
            </div>
        );
      }

}
export default Vitrine;