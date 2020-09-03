import React, { Component } from 'react';
import ScrollMagic from "scrollmagic";
//all the css animations need gsap as dependency
import gsap, { TimelineMax, TweenMax, TweenLite } from "gsap";
import './scrollvideo.global.css';

class Scrollvideo extends React.Component {
  constructor(props) {
    super(props);
  }

    componentDidMount() {
        const video = document.querySelector("video");
        const scenes = document.querySelector(".scenes");
        const sceneIntro = document.querySelector(".scene1");
        const sceneDispe = document.querySelector(".scene2");
        const sceneFresh = document.querySelector(".scene3");
        //END SECTION
        const section = document.querySelector("section");
        const end = section.querySelector("h1");

        //SCROLLMAGIC
        const controller = new ScrollMagic.Controller({addIndicators: true});

        //Scenes

        let scene1 = new ScrollMagic.Scene({
            duration: 1,
            triggerElement: sceneIntro,
            triggerHook: 0
        })
        .setPin(sceneIntro)
        .addTo(controller)
        .trigger("change", scene1Anim)
        .on("leave", playVideoScene1)
        .addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});

        function pauseVideoScene1() {
            video.pause();
        }
        function playVideoScene1() {
            video.play();
        }
        
        const scene1Anim =  video.play() & TweenMax.fromTo(sceneIntro, 1,  { opacity: 0 }, { opacity: 1, onComplete:pauseVideoScene1}).delay(2)
        const scene2Anim =  video.play() & console.log("TESTE")

        let scene2 = new ScrollMagic.Scene({
            duration: 1,
            triggerElement: sceneDispe,
            triggerHook: 0
        })
        .setPin(sceneDispe)
        .addTo(controller)
        .on("enter", pauseVideoScene2)
        .addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});

        function pauseVideoScene2() {
            video.play()
            TweenMax.fromTo(sceneDispe, 1,  { opacity: 0 }, { opacity: 1, delay: 2, onComplete:pauseVideoScene1})
            video.addEventListener("timeupdate", function(){
               if(video.currentTime >= 5.0){
                   video.pause()
               }
            })
        }

        let scene3 = new ScrollMagic.Scene({
            duration: 500,
            triggerElement: sceneFresh,
            triggerHook: 0
        })
        .setPin(sceneFresh)
        .addTo(controller)
        .addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});



        // scene.on("progress", e => {
        //     console.log("Scene progress changed to " + event.progress);
        //     if(valid == 1){
        //         video.play()
        //         TweenMax.fromTo(sceneIntro, 1,  { opacity: 1 }, { opacity: 0})
                
        //     }
        //     if(video.currentTime >= "02.0"){
        //         if(valid == 2){
        //             TweenMax.fromTo(sceneIntro, 1,  { opacity: 1 }, { opacity: 0}) & 
        //             TweenMax.fromTo(sceneDispen, 1,  { opacity: 1 }, { opacity: 0})
        //         }
        //     }
        //     if(video.currentTime >= "05.0"){
        //         video.pause()
        //     }
            
            
            
            
        //     //TweenMax.fromTo(sceneDispen, 1,  { opacity: 0 }, { opacity: 1}).delay(2)
        //     scrollpos = e.scrollPos / 1000;
        // });

        


        //Scene1 Animation
        // const scene1Anim =  video.play() & TweenMax.fromTo(sceneIntro, 1,  { opacity: 0 }, { opacity: 1, onComplete:pauseVideoScene1}).delay(2)
        // const scene2Anim =  
        //     video.play() & 
        //     TweenMax.fromTo(sceneIntro, 1,  { opacity: 1 }, { opacity: 0}) & 
        //     TweenMax.fromTo(sceneDispen, 1,  { opacity: 1 }, { opacity: 0})

        //Video Animation
        // let accelamount = 0.1;
        // let scrollpos = 0;
        // let delay = 0;

        // scene.on("update", e => {
        //     scrollpos = e.scrollPos / 1000;
        // });

        // setInterval(() => {
        // delay += (scrollpos - delay) * accelamount;
        // video.currentTime = delay;
        // }, 33.3);

        // if(window.scrollY == 0){
        //     setTimeout(function(){ 
        //         window.scrollBy({
        //             top: 2200,
        //             behavior: 'smooth'
        //         }); 
        //     }, 5000);
        // }
        // if(window.scrollY > 2222){
        //     alert("oi")
        // }

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
                <h2>Brastemp Inverse | 44</h2>
                <p>Máximo design, máxima sofisticação. Com 4 compartimentos e mais de 500L para você armazenar tudo o que quiser.</p>
            </div>
        </div>
        <div className="scene3">
            <div className="scene3__content">
                <h2>Brastemp Inverse | 444</h2>
                <p>Máximo design, máxima sofisticação. Com 4 compartimentos e mais de 500L para você armazenar tudo o que quiser.</p>
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