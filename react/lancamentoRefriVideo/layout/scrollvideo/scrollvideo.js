import React, { Component } from 'react';
import ScrollMagic from "scrollmagic";
//all the css animations need gsap as dependency
import gsap, { TimelineMax, TweenMax, TweenLite } from "gsap";
import './scrollvideo.global.css';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import $ from 'jquery'
import AtencaoDetalhes from '../../../lancamentoRefri/layout/atencao-detalhes/atencao-detalhes';
import Video from '../video/video';

class Scrollvideo extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			value: 0
		}
	}
    
    handleChange = (event) => {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    componentDidMount() {
        
        const video = document.querySelector(".videobg");
        const intro = document.querySelector(".intro");
        const scene1 = document.querySelector(".scene1");
        const scene2 = document.querySelector(".scene2");
        const scene3 = document.querySelector(".scene3");
        const scene4 = document.querySelector(".scene4");
        //END SECTION
        const section = document.querySelector("section");

        //SCROLLMAGIC
        const controller = new ScrollMagic.Controller({addIndicators: true});

        //Pause Video
        function pauseVideo() {
            video.pause();
        }

        $(window).bind('mousewheel DOMMouseScroll', function(event){
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            video.currentTime -= 0.1;
            }
            else {
            video.currentTime += 0.1;
            }
        });

        $("#gelo").click(function(e) {
            e.preventDefault();
            video.currentTime = 6.5;
            $("#agua").removeClass('active');
            $(this).addClass('active');
            video.play()
        });
        $("#agua").click(function(e) {
            e.preventDefault();
            video.currentTime = 9.3;
            $("#gelo").removeClass('active');
            $(this).addClass('active');
            video.play()
        });


        /** Scene 1 - PLAY */
        video.play()

        video.addEventListener('timeupdate', (event) => {
            /** Scene 1 - PAUSE */
            if(video.currentTime >= 2.2 && video.currentTime <= 2.7){
                video.pause()
                TweenLite.to(scene1, 1, {opacity: 1});
                TweenLite.to([scene2,scene3,scene4], 1, {opacity: 0});
            }
            /** Scene 2 - PLAY */
            if(video.currentTime >= 2.8 && video.currentTime <= 3.7){
                video.play()
                TweenLite.to(scene1, 1, {opacity: 0});
            }
            /** Scene 2 */
            if(video.currentTime >= 6.0 && video.currentTime <= 6.7){
                TweenLite.to(scene2, 1, {opacity: 1, zIndex:3,});
                TweenLite.to([scene1,scene3,scene4], 1, {opacity: 0});
                $("#gelo").addClass('active');
            }
            /** Scene 2 */
            if(video.currentTime >= 9.5){
                $("#gelo").removeClass('active');
                $("#agua").addClass('active');
            }
            /** Scene 2 - PAUSE */
            if(video.currentTime >= 14.7 && video.currentTime <= 15.4){
                video.pause()
            }
            /** Scene 3 - PLAY */
            if(video.currentTime >= 15.5 &&  video.currentTime <= 16.2){
                TweenLite.to(scene2, 1, {opacity: 0, zIndex:2,});
                video.play()
            }
            /** Scene 3 - PAUSE */
            if(video.currentTime >= 17.8 &&  video.currentTime <= 18.3){
                TweenLite.to(scene3, 1, {opacity: 1, zIndex:3,});
                video.pause()
                TweenLite.to([scene1,scene2,scene4], 1, {opacity: 0});
            }
            /** Scene 4 - PLAY */
            if(video.currentTime >= 18.4 &&  video.currentTime <= 19.1){
                TweenLite.to(scene3, 1, {opacity: 0, zIndex:2,});
                video.play()
            }
            /** Scene 4 - PAUSE */
            if(video.currentTime >= 32){
                video.pause()
                TweenLite.to(scene4, 1, {opacity: 1, zIndex:3,});
                TweenLite.to([scene1,scene2,scene3], 1, {opacity: 0});
            }
          });

        //Scenes
        /** Intro */
        let scenes = new ScrollMagic.Scene({
            duration: 1600,
            triggerElement: intro,
            triggerHook: 0
        })
        .addTo(controller)
        .setPin(intro)
  }

  render() {
    return (
      <>
        <div className="intro">
            <div className="scene1">
                <div className="scene1__content">
                    <h2>Brastemp Inverse | 4</h2>
                    <p>Máximo design, máxima sofisticação. Com 4 compartimentos e mais de 500L para você armazenar tudo o que quiser.</p>
                </div>
            </div>
            <div className="scene2">
                <div className="scene2__content">
                    <div className="scene2__content-grid">
                        <div className="scene2__content-col1">
                            <h2>Dispenser de água e gelo</h2>
                            <p>Tenha água fresca e mais de 1,5kg de gelo por dia e ainda escolha entre gelo em cubos ou gelo picado</p>
                        </div>
                        <div className="scene2__content-col2">
                            <div class="switch-dispenser__video">
                                <a id="gelo" href="#">Gelo</a>
                                <span class="line"></span>
                                <a id="agua" href="#">Água</a>
                            </div>
                        </div>
                    </div>
                    <div className="scene2__content-mouse">
                        Role para ver mais
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="scene3">
                <div className="scene3__content">
                    <div className="scene3__content-text">
                        <h2>Fresh Control</h2>
                        <p>Com o exclusivo sistema Fresh Control, conserve os alimentos frescos por até 15 dias e elimine até 99% das bactérias em qualquer lugar da geladeira</p>
                    </div>
                    <div className="scene3__content-filter"/>
                </div>
            </div>
            <div className="scene4">
                <div className="scene4__content">
                <div id="convertible-space" className={`convertible-space  ${this.state.value < 110 ? "vinhos" : ""} ${this.state.value > 110 && this.state.value < 260 ? "frutas-vegetais" : "" } ${this.state.value > 260 && this.state.value < 550 ? "carnes-peixes" : "" } ${this.state.value > 550 && this.state.value < 740 ? "congelamento-suave" : "" } ${this.state.value > 740 && this.state.value < 920 ? "congelamento-medio" : "" } ${this.state.value > 920 ? "congelamento-intenso" : "" } `}>

<Title setClass="center" textMF="Convertible Space" textDF="Convertible Space"/>

<p>Compartimento com controle independente <br className="mobile"></br> de <br className="desktop"></br> temperatura, você escolhe entre freezer ou <br className="mobile"></br><br className="desktop"></br> refrigerador com mais de 12 opções de <br className="mobile"></br><br className="desktop"></br> temperatura</p>

<div className="line-chose">

    <div className="line-text">
        <h3>MODO<br></br>REFRIGERADOR</h3>
        <p className={`${this.state.value < 110 ? "active" : "" }`}>10°C</p>
        <p className={`${this.state.value > 110 && this.state.value < 260   ? "active" : "" }`}>4°C</p>
        <p className={`${this.state.value > 260 && this.state.value < 550 ? "active" : "" }`}>0°C</p>
        <h3>MODO<br></br>FREEZER</h3>
        <p className={`${this.state.value > 550 && this.state.value < 740 ? "active" : "" }`}>-7°C</p>
        <p className={`${this.state.value > 740 && this.state.value < 920 ? "active" : "" }`}>-12°C</p>
        <p className={`${this.state.value > 920 ? "active" : "" }`}>-16°C a<br></br>22°C</p>
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
                </div>
            </div>
            <video className="videobg" preload="true" muted>
                <source src="https://consulwp.s3.amazonaws.com/wp-content/uploads/2020/09/Brastemp_Jupter_Interacao_P013-2.mp4" type="video/mp4" />
            </video>
        </div>
        <section>
            <AtencaoDetalhes/>
            <Video/>
        </section>
      </>
    );
  }
}

export default Scrollvideo;