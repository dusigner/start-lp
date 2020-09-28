import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./menu.global.css";

class Menu extends React.Component {

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);

        // Inicio Tag
        const linksMenu = document.querySelectorAll('.tagMenu');
        
        if (this.props.versao == "qrcode") {

            linksMenu.forEach(element => {
                element.addEventListener('click', ()=>{
                    
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_external',
                        action: 'click_header_inverse4 ',
                        label: element.dataset.tag,
                    })
    
                })
            });

        }

        if (this.props.versao == "video") {

            linksMenu.forEach(element => {
                element.addEventListener('click', ()=>{
                    
                    dataLayer.push({
                        event: 'generic',
                        category: 'jupiter_inverse4_lp_internal_mobile',
                        action: 'click_header_inverse4 ',
                        label: element.dataset.tag,
                    })
    
                })
            });
            
        }
        // Fim Tag
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
            
            links.forEach(
                (link) => link.classList.remove('active')
                
            );
            links[index].classList.add('active');

            const menu = document.getElementsByClassName('menu__lp')[0];
            const active = document.querySelectorAll('nav .active');
            const height = document.getElementsByClassName("geladeira-inverse")[0].clientHeight;
            
                menu.scrollLeft = active[0].offsetLeft - 10;
            
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
                                <AnchorLink offset={() => 55} href='#geladeira-inverse-4' name="geladeira-inverse" className="links tagMenu" data-tag="click_geladeira_4_portas">
                                    <h1>Geladeira 4 Portas</h1>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#dispenser-de-agua-e-gelo' name="dispenser-de-agua-e-gelo" className="links tagMenu" data-tag="click_dispenser_de_agua_e_gelo">
                                    <span>Dispenser de água e gelo</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#fresh-control' name="fresh-control" className="links tagMenu" data-tag="click_fresh_control">
                                    <span>Fresh Control</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#convertible-space' name="convertible-space" className="links tagMenu" data-tag="click_convertible_space">
                                    <span>Convertible Space</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#atencao-detalhes' name="atencao-detalhes" className="links tagMenu" data-tag="click_atencao_nos_detalhes">
                                    <span>Atenção nos detalhes</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#especificacoes' name="especificacoes" className="links tagMenu" data-tag="click_especificacoes">
                                    <span>Especificações</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#ja-tenho' name="ja-tenho" className="links">
                                    <span>Já tenho essa geladeira</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#video-inverse4' name="video-inverse4">
                                    <span>Ver vídeo</span>
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