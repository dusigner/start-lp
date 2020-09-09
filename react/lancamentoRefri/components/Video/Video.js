import React, { Component } from 'react'

class Video extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.onWindowScroll);
        var video = document.getElementById("myVideo");

        let firstPush = 0,
            secondPush = 0,
            thirdPush = 0,
            fourthPush = 0;

        video.addEventListener("timeupdate", function(){

            const videoTime = (video.currentTime / video.duration * 100).toFixed(2);

            if (firstPush==0) {
                if (videoTime >= 25){
                    dataLayer.push({
                        event: 'generic',                     
                        category: 'lavadora_edge',
                        action: 'video_nova_geração',
                        label: '25'
                    })
                    firstPush=1;
                }
            }
            if (secondPush==0) {
                if (videoTime >= 50){
                    dataLayer.push({
                        event: 'generic',                     
                        category: 'lavadora_edge',
                        action: 'video_nova_geração',
                        label: '50'
                    })
                    secondPush=1;
                }
            }
            if (thirdPush==0) {
                if (videoTime >= 75){
                    dataLayer.push({
                        event: 'generic',                     
                        category: 'lavadora_edge',
                        action: 'video_nova_geração',
                        label: '75'
                    })
                    thirdPush=1;
                }
            }
            if (fourthPush==0) {
                if (videoTime >= 100){
                    dataLayer.push({
                        event: 'generic',                     
                        category: 'lavadora_edge',
                        action: 'video_nova_geração',
                        label: '100'
                    })
                    fourthPush=1;
                }
            }

        })
    }
     
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll);
    }

    onWindowScroll = () => {

        const vid = document.getElementById("myVideo");

        function playVid() {
            vid.play();
        }

        function pauseVid() {
            vid.pause();
        }

        const observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                vid.play();
                
            } else {
                vid.pause();
            }
        }, { threshold: [0.5] });
        
        observer.observe(document.querySelector("#myVideo"));
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <video id="myVideo" className="video" width="100%" height="100%" muted controls>
                <source src={this.props.setSrc} type="video/mp4"></source>
            </video>
        )
    }
}
export default Video;
