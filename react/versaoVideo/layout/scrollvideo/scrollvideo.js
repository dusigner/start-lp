import React, { Component } from 'react';
import ScrollMagic from "scrollmagic";
//all the css animations need gsap as dependency
import gsap, { TimelineMax, TweenMax, TweenLite } from "gsap";
import './scrollvideo.global.css';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import $ from 'jquery'
import AtencaoDetalhes from '../../../versaoOriginal/layout/atencao-detalhes/atencao-detalhes';
import Video from '../video/video';
import Title from '../../../versaoOriginal/components/title/title'

const _isMounted = false;
class Scrollvideo extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            value: 0,
            lastScroll: 0,
            mobile: false
        }
    }
    
    componentDidMount() {   


        if(window.screen.width < 1025){
            this.setState({
                mobile: true
            })
        } else {
            this.setState({
                mobile: false
            })
        }
        
        

        this._isMounted = true;    
        const video = document.querySelector(".videobg");
        const intro = document.querySelector(".intro");
        const scene1 = document.querySelector(".scene1");
        const scene2 = document.querySelector(".scene2");
        const scene3 = document.querySelector(".scene3");
        const scene4 = document.querySelector(".scene4");
        //END SECTION
        const section = document.querySelector("section");

        //SCROLLMAGIC
        const controller = new ScrollMagic.Controller({addIndicators: false});

        $(window).on("scroll", function() {
            var st = $(this).scrollTop();
            if (st == 0){
                video.currentTime = 0;
                video.play()
            }
            if (st > 1718){
                video.currentTime = 32;
                video.pause()
            }
        });

        $(window).bind('mousewheel DOMMouseScroll', function(event){
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                video.currentTime -= 0.1;
                video.pause()
            } else if(video.currentTime >= 32) {
                video.currentTime = 32;
                video.pause()
            } else {
                video.currentTime += 0.1;
                video.play()
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
            if(video.currentTime >= 0 && video.currentTime < 2.2){
                TweenLite.to([scene1, scene2,scene3,scene4], 1, {opacity: 0});
            }
            if(video.currentTime >= 2.2 && video.currentTime <= 2.5){
                video.pause()
                TweenLite.to(scene1, 1, {opacity: 1});
                TweenLite.to([scene2,scene3,scene4], 1, {opacity: 0});
            }
            /** Scene 2 - PLAY */
            if(video.currentTime >= 2.6 && video.currentTime <= 3.7){
                TweenLite.to(scene1, 1, {opacity: 0});
            }
            if(video.currentTime < 6.0 && video.currentTime > 13.9){
                $("#gelo","#agua").removeClass('active');
            }
            /** Scene 2 */
            if(video.currentTime >= 6.0 && video.currentTime <= 6.7){
                TweenLite.to(scene2, 1, {opacity: 1, zIndex:3,});
                TweenLite.to([scene1,scene3,scene4], 1, {opacity: 0});
                $("#agua").removeClass('active');
                $("#gelo").addClass('active');
            }
            /** Scene 2 */
            if(video.currentTime >= 9.5 && video.currentTime <= 13.9){
                $("#gelo").removeClass('active');
                $("#agua").addClass('active');
            }
            /** Scene 2 - PAUSE */
            if(video.currentTime >= 14.7 && video.currentTime <= 15.0){
                video.pause()
            }
            /** Scene 3 - PLAY */
            if(video.currentTime >= 15.1 &&  video.currentTime <= 16.2){
                TweenLite.to(scene2, 1, {opacity: 0, zIndex:2,});
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
            }
            if(video.currentTime >= 25 && video.currentTime <= 25.3){
                TweenLite.to(scene4, 1, {opacity: 1, zIndex:3,});
                TweenLite.to([scene1,scene2,scene3], 1, {opacity: 0});
            }
       
            if(video.currentTime >= 25){
                $(".slider").val(26)
                this.setState({value: 26});
            }
            if(video.currentTime >= 26.5){
                $(".slider").val(180)
                this.setState({value: 180})
            }
            if(video.currentTime >= 27.5){
                $(".slider").val(337)
                this.setState({value: 337})
            }
            if(video.currentTime >= 28.5){
                $(".slider").val(651)
                this.setState({value: 651})
            }
            if(video.currentTime >= 29.5){
                $(".slider").val(811)
                this.setState({value: 811})
            }
            if(video.currentTime >= 30.5){
                $(".slider").val(1000)
                this.setState({value: 1000})
            }
            /** Scene 4 - PAUSE */
            if(video.currentTime >= 32){
                video.pause()
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

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleChange=(e)=>{

        const video = document.querySelector(".videobg");

        this.setState({value: e.target.value});

        if(e.target.value < 110){
            video.currentTime = "25.708"
        }
        if(e.target.value > 110 && e.target.value < 260){
            video.currentTime = "27.166"
        }
        if(e.target.value > 260 && e.target.value < 550){
            video.currentTime = "28.250"
        }
        if(e.target.value > 550 && e.target.value < 740){
            video.currentTime = "29.250"
        }
        if(e.target.value > 740 && e.target.value < 920 ){
            video.currentTime = "30.291"
        }
        if(e.target.value > 920){
            video.currentTime = "31.666"
        }
    }


  render() {
    return (
      <div>
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
                            <div className="switch-dispenser__video">
                                <a id="gelo" href="#">Gelo</a>
                                <span className="line"></span>
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
                <div className="convertible__space scene4__content">
                    <div>
                        <Title setClass="center" textMF="Convertible Space" textDF="Convertible Space"/>
                        <p>Compartimento com controle independente <br className="mobile"></br> de <br className="desktop"></br> temperatura, você escolhe entre freezer ou <br className="mobile"></br><br className="desktop"></br> refrigerador com mais de 12 opções de <br className="mobile"></br><br className="desktop"></br> temperatura</p>
                    </div>
                    <div>
                        <div className="line-chose">
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
                                onInput={this.handleChange}
                                // onInput={ this.handleInput.bind(this)}
                                />

                            <div className="line-text">
                                <h3>MODO<br></br>REFRIGERADOR</h3>
                                <p className={`${this.state.value < 110 ? "active" : "" }`}>10°C</p>
                                <p className={`${this.state.value > 110 && this.state.value < 260 ? "active" : "" }`}>4°C</p>
                                <p className={`${this.state.value > 260 && this.state.value < 550 ? "active" : "" }`}>0°C</p>
                                <h3>MODO<br></br>FREEZER</h3>
                                <p className={`${this.state.value > 550 && this.state.value < 740 ? "active" : "" }`}>-7°C</p>
                                <p className={`${this.state.value > 740 && this.state.value < 920 ? "active" : "" }`}>-12°C</p>
                                <p className={`${this.state.value > 920 ? "active" : "" }`}>-16°C a<br></br>22°C</p>
                            </div>
                            <div className="bg-filter"></div>
                        </div>
                    </div>
                </div>
            </div>
            <video className="videobg" preload="true" muted>
                <source src="https://consulwp.s3.amazonaws.com/wp-content/uploads/2020/09/Brastemp_Jupter_Interacao_P013-2.mp4" type="video/mp4" />
            </video>
        </div>
        {!this.state.mobile && (
            <section>
                <AtencaoDetalhes/>
                <Video/>
            </section>
        )}
      </div>
    );
  }
}

export default Scrollvideo;