import React from 'react';
//components
import Video from '../../components/Video/Video';
import './video.global.css';

class GeladeiraInverse extends React.Component {

    render() {
        return (
            <div id="video-refri" className="video-refri section">

                <Video 
                    poster="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/promo-video-thumb-brastemp.jpg" 
                    setSrc="http://consulwp.s3.amazonaws.com/wp-content/uploads/2020/09/brastemp_geladeira_jupiter_.mp4"
                >

                </Video>

            </div>
        )
    }
}
export default GeladeiraInverse;