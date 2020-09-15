import React from 'react';
//components
import Video from '../../components/Video/Video';
import './video.global.css';

class GeladeiraInverse extends React.Component {

    render() {
        return (
            <div id="video-refri" className="video-refri">

                <Video 
                    poster="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video-promo-video-thumb-brastemp-1.jpg" 
                    setSrc="http://consulwp.s3.amazonaws.com/wp-content/uploads/2020/09/brastemp_lancamento_geladeira_jupiter_oti.mp4"
                >

                </Video>

            </div>
        )
    }
}
export default GeladeiraInverse;