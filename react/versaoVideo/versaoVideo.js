import React, { Component } from 'react';
import Headroom from 'react-headroom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollvideo from "./layout/scrollvideo/scrollvideo";
import EspecificacoesTecnicas from '../versaoOriginal/layout/especificacoes/especificacoes'
import $ from 'jquery'

// CSSs
import './versaoVideo.global.css';
import "./components/menu/menu.global.css";

class VersaoVideo extends React.Component {

	constructor(props) {
		super();
		this.state = {
			visao_geral: !false,
			especificacoes: false,
		};
    }

	handleClick(e) {
		if(e == "especificacoes"){
			$(window).scrollTop(0);
			this.setState({
				visao_geral: false,
				especificacoes: !false,
			})
		} else {
			this.setState({
				visao_geral: !false,
				especificacoes: false,
			})
		}
	}

	render() {

		return (
			<div className="refrivideo">
				<Headroom disableInlineStyles>
					<>
					<div className="menu__lp">
						<div className="menu__lp-wrap">
							<h1>Geladeira 4 Portas</h1>
							<nav id="nav">
								<ul>
									<li>
										<a href='#visao_geral' onClick={() => this.handleClick("visao_geral")} className={`${this.state.visao_geral ? "active link" : "link" }`}>
											<span>Visão Geral</span>
										</a>
									</li>
									<li>
										<a href='#especificacoes' onClick={() => this.handleClick("especificacoes")} className={`${this.state.especificacoes ? "active link" : "link" }`}>
											<span>Especificações técnicas</span>
										</a>
									</li>
									<li>
										<a href='#vitrine' name="menu_superior" className="links">
											<span>Comprar</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					</>
				</Headroom>
				{this.state.visao_geral && (
					<Scrollvideo />
				)}
				{this.state.especificacoes && (
					<EspecificacoesTecnicas />
				)}
			</div>
		)
	}
}
export default VersaoVideo;
