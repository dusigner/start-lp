import React from 'react';
//components
import Title from '../../components/title/title';
import './fresh-control.global.css';

class FrechControl extends React.Component {

    render() {
        return (
            <div id="fresh-control" className="fresh-control section">

                <Title setClass="center" textMF="Fresh Control" textDF="Fresh Control"/>

                <p>Com o exclusivo sistema Fresh Control, <br className="mobile"></br> conserve os alimentos frescos por até 15 dias  <br className="desktop"></br><br className="mobile"></br> e elimine até 99% das bactérias em qualquer <br className="mobile"></br> lugar da geladeira</p>

                <div className="fresh-animate">
                    <img src="https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2020/09/FreshControl-Brastemp.gif"></img>
                </div>

                <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/freshcontrol.png"></img>

            </div>
        )
    }
}
export default FrechControl;