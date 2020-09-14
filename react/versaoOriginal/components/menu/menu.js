import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./menu.global.css";

class Menu extends React.Component {

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }
  
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {

        const links = document.querySelectorAll('.links');
        const sections = document.querySelectorAll('.section');

        function changeLinkState() {
            let index = sections.length;

            while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
            
            links.forEach((link) => link.classList.remove('active'));
            links[index].classList.add('active');

            const menu = document.getElementsByClassName('menu__lp')[0];
            const active = document.querySelectorAll('nav .active');
            const height = document.getElementsByClassName("geladeira-inverse")[0].clientHeight;
            if(document.documentElement.scrollTop > height + 300){
                menu.scrollLeft = active[0].offsetLeft - (screen.width / 2 - active[0].offsetWidth / 2);  
            }else {
                menu.scrollLeft = active[0].offsetLeft - 10;
            }
        }

        changeLinkState();
        window.addEventListener('scroll', changeLinkState);

    };

    render() {
        return (
            <div className="menu__lp">
                <div className="menu__lp-wrap">
                    
                    <nav id="nav">
                        <ul>
                            <li>
                                <AnchorLink offset={() => 55} href='#geladeira-inverse-4' name="geladeira-inverse" className="links">
                                    <h1>Geladeira 4 portas</h1>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#dispenser-de-agua-e-gelo' name="dispenser-de-agua-e-gelo" className="links">
                                    <span>Dispenser de água e gelo</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#fresh-control' name="fresh-control" className="links">
                                    <span>Fresh Control</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#convertible-space' name="convertible-space" className="links">
                                    <span>Convertible Space</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#atencao-detalhes' name="atencao-detalhes" className="links">
                                    <span>Atenção nos detalhes</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#especificacoes' name="especificacoes" className="links">
                                    <span>Especificações</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#vitrine' name="video-refri">
                                    <span>Comprar</span>
                                </AnchorLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Menu;