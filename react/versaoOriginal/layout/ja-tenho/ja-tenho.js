import React from 'react';
//components
import Title from '../../components/title/title';
import { Picture } from 'react-responsive-picture';
import './ja-tenho.global.css';

//IMG
const imgMobile = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/feature.png';
const imgTablet = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/feature.png';
const imgDesktop = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/feature.png';

class JaTenho extends React.Component {

    componentWillUnmount() {
    }

    render() {
        return (
            <div id="jatenho" className="ja-tenho">

                <section>
                    <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/brastemp-geladeira-inverse4-congelamento-intenso.png"/>
                </section>

            </div>
        )
    }
}
export default JaTenho;