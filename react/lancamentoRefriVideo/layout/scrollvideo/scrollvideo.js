import React, { Component } from 'react';
import ScrollMagic from "scrollmagic";
//all the css animations need gsap as dependency
import gsap, { TimelineMax, TweenMax, TweenLite } from "gsap";
import './scrollvideo.global.css';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

class Scrollvideo extends React.Component {
  constructor(props) {
    super(props);
  }

    componentDidMount() {
        
        const video = document.querySelector("video");
        const sceneIntro = document.querySelector(".scene1");
        const sceneDispe = document.querySelector(".scene2");
        const sceneFresh = document.querySelector(".scene3");
        const sceneSpace = document.querySelector(".scene4");
        //END SECTION
        const section = document.querySelector("section");

        //SCROLLMAGIC
        const controller = new ScrollMagic.Controller({addIndicators: true});

        //Pause Video
        function pauseVideo() {
            video.pause();
        }

        //Scenes
        /** Intro */
        let scene1 = new ScrollMagic.Scene({
            duration: 1000,
            triggerElement: sceneIntro,
            triggerHook: 0
        })
        .addTo(controller)
        .setPin(sceneIntro)
        .on("start", 
            function () {
                video.play();
                // Exibe o Titulo
                TweenMax.fromTo(sceneIntro, 1,  { opacity: 0 }, { opacity: 1}).delay(2)
                video.addEventListener("timeupdate", function(){
                    if(video.currentTime >= 2.7){
                        video.pause()
                    }
                })
            })
        .on("update",
            function () {
                video.play()
                // Oculta o Titulo
                TweenMax.fromTo(sceneIntro, 1,  { opacity: 1 }, { opacity: 0})
                // Exibe o Dispenser
                TweenMax.fromTo(sceneDispe, 1,  { opacity: 0 }, { opacity: 1})
                video.addEventListener("timeupdate", function(){
                    if(video.currentTime >= 14.7){
                        video.pause()
                    }
                })
            })

        /** Dispenser */
        let scene2 = new ScrollMagic.Scene({
            duration: 1000,
            triggerElement: sceneDispe,
            triggerHook: 0
        })
        .addTo(controller)
        .setPin(sceneDispe)
        .on("end",
            function () {
                video.play()
                // Oculta o Titulo
                TweenMax.fromTo(sceneDispe, 1,  { opacity: 1 }, { opacity: 0})
                // Exibe o Fresh
                TweenMax.fromTo(sceneFresh, 1,  { opacity: 0 }, { opacity: 1})
                video.addEventListener("timeupdate", function(){
                    if(video.currentTime >= 20.10){
                        video.pause()
                    }
                })
            })

        /** Fresh */
        let scene3 = new ScrollMagic.Scene({
            duration: 1000,
            triggerElement: sceneFresh,
            triggerHook: 0
        })
        .addTo(controller)
        .setPin(sceneFresh)
        .on("update",
            function () {
                video.play()
                console.log("Play Video")
                // Oculta o Titulo
                TweenMax.fromTo(sceneFresh, 1,  { opacity: 1 }, { opacity: 0})
                // Exibe o Fresh
                TweenMax.fromTo(sceneSpace, 1,  { opacity: 0 }, { opacity: 1})
                video.addEventListener("timeupdate", function(){
                    if(video.currentTime >= 20.10){
                        video.pause()
                    }
                })
            })

        /** Space */
        let scene4 = new ScrollMagic.Scene({
            duration: 1000,
            triggerElement: sceneSpace,
            triggerHook: 0
        })
        .addTo(controller)
        .setPin(sceneSpace)
        .on("end",
            function () {
                video.play()
            })


            video.addEventListener("timeupdate", function(){
                console.log(video.currentTime)
            })


  }

  render() {
    return (
      <>
        <div className="scene1">
            <div className="scene1__content">
                <h2>Brastemp Inverse | 4</h2>
                <p>Máximo design, máxima sofisticação. Com 4 compartimentos e mais de 500L para você armazenar tudo o que quiser.</p>
            </div>
        </div>
        <div className="scene2">
            <div className="scene2__content">
                <h2>Brastemp Dispenser</h2>
            </div>
        </div>
        <div className="scene3">
            <div className="scene3__content">
                <h2>Brastemp Fresh</h2>
            </div>
        </div>
        <div className="scene4">
            <div className="scene4__content">
                <h2>Brastemp Space</h2>
            </div>
        </div>
        <video className="video" preload="true" controls muted>
            <source src="https://dusigner.com.br/video.mp4" type="video/mp4" />
        </video>
        <section>
            <h1>REVOLUTIONARRY</h1>
        </section>
      </>
    );
  }
}

export default Scrollvideo;