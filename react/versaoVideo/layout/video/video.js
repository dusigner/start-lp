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

    render() {
        return (
            <div id="video-refri" className="video-refri section">

                <Video
                    poster="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video-promo-video-thumb-brastemp-1.jpg" 
                    setSrc="https://consulwp.s3.amazonaws.com/wp-content/uploads/2020/09/brastemp_geladeira_jupiter_.mp4"/>

            </div>
        )
    }
}
export default GeladeiraInverse;