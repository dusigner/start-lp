import React, {Component} from 'react';
import "./scrollvideo.global.css";

class Scrollvideo extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onWindowScroll);

        const step1 = document.getElementById("step1");
        const step2 = document.getElementById("step2");
        
        const video = document.getElementById("video");

        let firstPush = 0,
            secondPush = 0,
            thirdPush = 0,
            fourthPush = 0;

        video.addEventListener("timeupdate", function(){

            const videoTimeSeconds = parseInt(video.currentTime % 60);
            const videoTime = (video.currentTime / video.duration * 100).toFixed(2);
            console.log((video.currentTime).toFixed(2))
            if((video.currentTime).toFixed(2) >= "1.00"){
                //step1.style.opacity = "1";
            }
            if ((video.currentTime).toFixed(2) >= "2.20"){
                video.pause()
            }
            // if (video.currentTime >= "02.40"){
            //     //step1.style.opacity = "0";
            //     video.play()
            // }
            // if (video.currentTime >= "06.00"){
            //     //step2.style.opacity = "1";
            // }
            // if (video.currentTime >= "14.05"){
            //     video.pause()
            // }

        })
    }
     
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll);
    }

    onWindowScroll = () => {

        const vid = document.getElementById("video");

        function playVid() {
            vid.play();
        }

        const observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                vid.play();
                console.log("play")
            } else {
                vid.pause();
                console.log("pause")
            }
        }, { threshold: [0.5] });
        
        observer.observe(document.querySelector("#step2"));
    }

    componentWillUnmount() {

        this.stopVideo()
        
    }

    stopVideo(){
        const video = document.getElementById("video");
        const step1 = document.getElementById("step1");
        const step2 = document.getElementById("step2");

        video.play();

        video.ontimeupdate = function() {videoCurrentTime()};

        function videoCurrentTime() {
            if(video.currentTime > 1.0){
                step1.style.opacity = "1";
            }
            if(video.currentTime > 2.1){
                video.pause();
            }
        }
    }

    render() {
        return (
            <>
                <video id="video" src="https://dusigner.com.br/video.mp4" preload="auto" muted controls autoPlay>
                </video>
                <div>
                    <div id="step1" className="steps">
                        <h1>Titulo 1</h1>
                        <br />01<br />01<br />01<br />01<br />01<br />01<br />01<br />01
                        <br />01<br />01<br />01<br />01<br />01<br />01<br />01<br />01
                    </div>
                    <div id="step2"  className="steps">
                        <h1>Titulo 2</h1>
                        <br />01<br />01<br />01<br />01<br />01<br />01<br />01<br />01
                        <br />01<br />01<br />01<br />01<br />01<br />01<br />01<br />01
                    </div>
                    <div id="step3"  className="steps">
                        <h1>Titulo 3</h1>
                        <br />01<br />01<br />01<br />01<br />01<br />01<br />01<br />01
                        <br />01<br />01<br />01<br />01<br />01<br />01<br />01<br />01
                    </div>
                    <div id="step4"  className="steps">
                        <h1>Titulo 4</h1>
                        <br />01<br />01<br />01<br />01<br />01<br />01<br />01<br />01
                        <br />01<br />01<br />01<br />01<br />01<br />01<br />01<br />01
                    </div>
                </div>
            </>
        )
    }
}
export default Scrollvideo;