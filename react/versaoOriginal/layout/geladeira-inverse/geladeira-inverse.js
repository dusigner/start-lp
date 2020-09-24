import React from 'react';
//components
import Title from '../../components/title/title';
import { Picture } from 'react-responsive-picture';
import './geladeira-inverse.global.css';

//IMG
const imgMobile = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inverse-4-mob.png';
const imgTablet = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inverse-4-tab.png';
const imgDesktop = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/inverse-4-desk.png';

class GeladeiraInverse extends React.Component {

    constructor(props) {
		super(props);
	}

    render() {
        return (
            <div id="geladeira-inverse-4" className="geladeira-inverse section">

                <Title setClass="center" textMF="Brastemp Inverse | 4" textDF="Brastemp Inverse | 4"/>

                <p>
                        Máximo design, máxima sofisticação. Com 
                        <br className="mobile"></br> 4 compartimentos
                        <br className="desktop"></br>e mais de
                        { this.props.versao == "qrcode" && <> 500L </> }
					    { this.props.versao == "video" && <> <a href="https://www.brastemp.com.br/eletrodomesticos/geladeira---refrigerador" title="Geladeira Brastemp">500L</a> </> }
                        para 
                        <br className="mobile"></br> você armazenar tudo o que quiser. 
                </p>

                <div >
                    <Picture
                        sources = {[
                            {
                                srcSet: imgMobile,
                                media: "(max-width: 767px)",
                            },
                            {
                                srcSet: imgDesktop,
                                media: "(min-width: 1024px)",
                            },
                            {
                                srcSet: imgTablet,
                                media: "(min-width: 768px)",
                            },
                        ]}
                    />
                </div>

            </div>
        )
    }
}
export default GeladeiraInverse;