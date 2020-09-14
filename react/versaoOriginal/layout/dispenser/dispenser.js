import React from 'react';
//components
import Title from '../../components/title/title';
import './dispenser.global.css';

// img
let agua="https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2020/09/agua-ot.gif",
    gelo="https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2020/09/gelo-ot.gif",
    estatico="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/gelo-ot.gif";



class Dispenser extends React.Component {

    componentDidMount(){


        let target = document.querySelector('.interactive');
        let links = document.querySelectorAll('#dispenser-de-agua-e-gelo .switch-dispenser a')

        links.forEach(element => {
            element.addEventListener('click', ()=>{

                links.forEach(btn => {
                    btn.classList.remove('active');
                });

                if (element.dataset.agua == "true") {
                    element.classList.add('active');
                    target.src = agua;
                }

                if (element.dataset.gelo == "true") {
                    element.classList.add('active');
                    target.src = gelo;
                }

            })
        });

    }

    

    render() {

        return (
            <div id="dispenser-de-agua-e-gelo" className="dispenser-de-agua-e-gelo section">

                <Title setClass="center" textMF="Dispenser de água e gelo" textDF="Dispenser de água e gelo"/>

                <p>Tenha água fresca e mais de 1,5kg de gelo por <br className="mobile"></br> dia e ainda <br className="desktop"></br> escolha entre gelo em cubos ou <br className="mobile"></br> gelo picado</p>

                <div className="switch-dispenser">
                    <a data-gelo="true">Gelo</a>
                    <span className="line"></span>
                    <a data-agua="true">Água</a>
                </div>

                <img 
                    className="interactive"
                    src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/gelo-ot.gif"
                ></img>

                <img src={agua} className="invisible"></img>
                <img src={gelo} className="invisible"></img>
                <div className="overflow_img">
                    <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/dispenser-bg.png"></img>
                </div>
            </div>
        )
    }
}
export default Dispenser;