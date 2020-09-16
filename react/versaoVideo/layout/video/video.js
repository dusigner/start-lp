import React from 'react';
//components
import Title from '../../components/title/title';
import Video from '../../components/Video/Video';
import { Picture } from 'react-responsive-picture';
import './video.global.css';

//IMG
const imgMobile = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inverse-4-mob.png';
const imgTablet = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inverse-4-tab.png';
const imgDesktop = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inverse-4-desk.png';

class GeladeiraInverse extends React.Component {

    componentDidMount(){
        const video = document.querySelector("video")
    }

    render() {
        return (
            <div id="video-inverse4" className="video-refri section observevideo">
                <Video
                    poster="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/poster-video-geladeira-inverse-4.jpg" 
                    setSrc="https://consulwp.s3.amazonaws.com/wp-content/uploads/2020/09/brastemp_lancamento_geladeira_jupiter_oti.mp4"/>

            </div>
        )
    }
}
export default GeladeiraInverse;