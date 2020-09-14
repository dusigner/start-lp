import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import "./menu.css";

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

            while(--index && window.scrollY + 55 < sections[index].offsetTop) {}
            
            links.forEach((link) => link.classList.remove('active'));
            links[index].classList.add('active');

            const menu = document.getElementsByClassName('menu-edge')[0 ];
            const active = document.querySelectorAll('nav .active');
            if(document.documentElement.scrollTop > height + 300) menu.scrollLeft = active[0].offsetLeft - 10;
            else menu.scrollLeft = active[0].offsetLeft - 10;

        }

        changeLinkState();
        window.addEventListener('scroll', changeLinkState);

    };

    handleScroll() {
		
	}
		 
  

    render() {
        return (
        <div className="menu-edge">
            <nav id="nav">
                <AnchorLink offset={() => 100} href='#geladeira-inverse-4' className="links">
                    <h1>Geladeira 4 portas</h1>
                </AnchorLink>
                <AnchorLink offset={() => 0} href='#dispenser-de-agua-e-gelo' className="links">
                    <span>Dispenser de água e gelo</span>
                </AnchorLink>
                <AnchorLink offset={() => 55} href='#fresh-control' className="links">
                    <span>Fresh Control</span>
                </AnchorLink>
                <AnchorLink offset={() => -100} href='#convertable-space' className="links">
                    <span>Convertable Space</span>
                </AnchorLink>
                <AnchorLink offset={() => 55} href='#atencao-nos-detalhes' className="links">
                    <span>Atenção nos detalhes</span>
                </AnchorLink>
                <AnchorLink offset={() => 55} href='#especificacoes' className="links">
                    <span>Especificações</span>
                </AnchorLink>
                <AnchorLink offset={() => 55} href='#ver-video' className="links">
                    <span>Ver vídeo</span>
                </AnchorLink>
            </nav>
        </div>
    )
    }
}
export default Menu;