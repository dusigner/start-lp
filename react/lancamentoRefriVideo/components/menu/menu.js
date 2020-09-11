import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./menu.global.css";

class Menu extends React.Component {

    render() {
        return (
            <div className="menu__lp">
                <div className="menu__lp-wrap">
                    <h1>Geladeira 4 Portas</h1>
                    <nav id="nav">
                        <ul>
                            <li>
                                <AnchorLink offset={() => 55} href='#assistencia' name="visao_geral" className="links active">
                                    <span>Visão Geral</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#assistencia' name="especificacoes_tecnica" className="links">
                                    <span>Especificações técnicas</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink offset={() => 55} href='#vitrine' name="menu_superior" className="links">
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