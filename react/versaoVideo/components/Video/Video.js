import React, { Component } from 'react'

class Video extends React.Component {


    /** TAGUEAMENTO VÍDEO */
    // componentDidMount() {
        
    //     const video = document.getElementById("myVideo");

    //     let firstPush = 0,
    //         secondPush = 0,
    //         thirdPush = 0,
    //         fourthPush = 0;

    //     video.addEventListener("timeupdate", function(){

    //         const videoTime = (video.currentTime / video.duration * 100).toFixed(2);

    //         if (firstPush==0) {
    //             if (videoTime >= 25){
    //                 dataLayer.push({
    //                     event: 'generic',                     
    //                     category: 'lavadora_edge',
    //                     action: 'video_nova_geração',
    //                     label: '25'
    //                 })
    //                 firstPush=1;
    //             }
    //         }
    //         if (secondPush==0) {
    //             if (videoTime >= 50){
    //                 dataLayer.push({
    //                     event: 'generic',                     
    //                     category: 'lavadora_edge',
    //                     action: 'video_nova_geração',
    //                     label: '50'
    //                 })
    //                 secondPush=1;
    //             }
    //         }
    //         if (thirdPush==0) {
    //             if (videoTime >= 75){
    //                 dataLayer.push({
    //                     event: 'generic',                     
    //                     category: 'lavadora_edge',
    //                     action: 'video_nova_geração',
    //                     label: '75'
    //                 })
    //                 thirdPush=1;
    //             }
    //         }
    //         if (fourthPush==0) {
    //             if (videoTime >= 100){
    //                 dataLayer.push({
    //                     event: 'generic',                     
    //                     category: 'lavadora_edge',
    //                     action: 'video_nova_geração',
    //                     label: '100'
    //                 })
    //                 fourthPush=1;
    //             }
    //         }

    //     })
    //     //window.addEventListener('scroll', this.onWindowScroll);
    // }
     
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.onWindowScroll);
    // }
    /** OBSERVER VIDEO */
    // onWindowScroll = () => {

    //     const vid = document.getElementById("myVideo");

    //     function playVid() {
    //         vid.play();
    //     }

    //     function pauseVid() {
    //         vid.pause();
    //     }

    //     const observer = new IntersectionObserver(function(entries) {
    //         if(entries[0].isIntersecting === true) {
    //             vid.play();
                
    //         } else {
    //             vid.pause();
    //         }
    //     }, { threshold: [0.5] });
        
    //     observer.observe(document.querySelector("#myVideo"));
    // }

    constructor(props) {
        super(props);
    }

    handleClick() {
        this.refs.posterRef.style.display = "none";
        this.refs.videoRef.play();
    }

    render() {
        return (
            <div id="play__video" onClick={() => this.handleClick()}>
                <div className="poster__video"  ref="posterRef">
                    <svg width="186" height="186" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M76.5698 58.72L77.477 57.5254C77.0232 57.1808 76.4134 57.1231 75.903 57.3763C75.3926 57.6296 75.0698 58.1502 75.0698 58.72H76.5698ZM122.05 93.26L122.957 94.4546C123.33 94.1709 123.55 93.729 123.55 93.26C123.55 92.791 123.33 92.3491 122.957 92.0654L122.05 93.26ZM76.5698 127.8H75.0698C75.0698 128.37 75.3926 128.89 75.903 129.144C76.4134 129.397 77.0232 129.339 77.477 128.995L76.5698 127.8ZM1.50977 92.68L3.00977 92.68L3.00977 92.6797L1.50977 92.68ZM75.6626 59.9146L121.143 94.4546L122.957 92.0654L77.477 57.5254L75.6626 59.9146ZM121.143 92.0654L75.6626 126.605L77.477 128.995L122.957 94.4546L121.143 92.0654ZM78.0698 127.8V58.72H75.0698V127.8H78.0698ZM182.37 92.68C182.37 142.212 142.221 182.36 92.6898 182.36V185.36C143.878 185.36 185.37 143.868 185.37 92.68H182.37ZM92.6898 182.36C43.1582 182.36 3.00977 142.212 3.00977 92.68H0.00976746C0.00976746 143.868 41.5013 185.36 92.6898 185.36V182.36ZM3.00977 92.6797C2.99993 43.1484 43.1481 3 92.6798 3V0C41.4914 0 -0.000397067 41.4916 0.00976749 92.6803L3.00977 92.6797ZM92.6798 3C142.212 3 182.37 43.1486 182.37 92.68H185.37C185.37 41.4914 143.868 0 92.6798 0V3Z" fill="#F08B1D"/>
                    </svg>
                    <img src={this.props.poster}/>
                </div>
                <video id="myVideo" ref="videoRef" poster={this.props.poster} className="video" width="100%" height="100%" controls>
                    <source src={this.props.setSrc} type="video/mp4"></source>
                </video>
            </div>
        )
    }
}
export default Video;
