import React, { Component } from 'react';
import Headroom from 'react-headroom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollvideo from "./layout/scrollvideo/scrollvideo";
import EspecificacoesTecnicas from '../versaoOriginal/layout/especificacoes/especificacoes'
import $ from 'jquery'
import VitrineCompra from '../versaoOriginal/layout/vitrine-compra/vitrine'

// CSSs
import './versaoVideo.global.css';
import "./components/menu/menu.global.css";

class VersaoVideo extends React.Component {

	constructor(props) {
		super();
		this.state = {
			visao_geral: true,
			especificacoes: false,
			vitrine: false,
		video: false
		};
	}
	
	/** TAGUEAMENTO VÍDEO */
     componentDidMount() {
        window.addEventListener('scroll', this.onWindowScroll)
     }
    
     componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll);
     }
    /* OBSERVER IDs */
	onWindowScroll = () => {
		const introActive = new IntersectionObserver(function(entries) {
			if(entries[0].isIntersecting === true) {
				$("#visao_geral").addClass("active")
				$("#ver_video").removeClass("active")
			} else {
				$("#visao_geral").removeClass("active")
				$("#ver_video").addClass("active")
			}
		}, { threshold: [0.5] });
	
		introActive.observe(document.querySelector(".intro"));

		const videoActive = new IntersectionObserver(function(entries) {
			if(entries[0].isIntersecting === true) {
				$("#ver_video").addClass("active")
			} else {
				$("#ver_video").removeClass("active")
			}
		}, { threshold: [1] });
	
		videoActive.observe(document.getElementsByClassName("observevideo"));

	
	}

	handleClick(e) {
		if(e == "especificacoes"){
			$(window).scrollTop(0);
			this.setState({
				visao_geral: false,
				especificacoes: true,
				vitrine: false,
				video: false
			})
		}else if(e == "video"){
			this.setState({
				visao_geral: true,
				especificacoes: false,
				vitrine: false,
				video: true
			})

			setTimeout(function() { 
				$(window).scrollTop(3600)
			}, 100);
		}
		 else if(e == "visao_geral") {
			$(window).scrollTop(0);
			this.setState({
				visao_geral: true,
				especificacoes: false,
				vitrine: false,
				video: false
		})} else {
			$(window).scrollTop(0);
			this.setState({
				visao_geral: false,
				especificacoes: false,
				vitrine: true,
				video: false
		})}
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
										<a href='#visao_geral' id="visao_geral" onClick={() => this.handleClick("visao_geral")} className="link">
											<span>Visão Geral</span>
										</a>
									</li>
									<li>
										<a href='#video-inverse4' id="ver_video" onClick={() => this.handleClick("video")}>
											<span>Ver Vídeo</span>
										</a>
									</li>
									<li>
										<a href='#especificacoes' onClick={() => this.handleClick("especificacoes")} className={`${this.state.especificacoes ? "active link" : "link" }`}>
											<span>Especificações técnicas</span>
										</a>
									</li>
									<li>
										<a href='#vitrine' name="menu_superior"  onClick={() => this.handleClick("vitrine")} className={`${this.state.vitrine ? "active link" : "link" }`}>
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
				{this.state.vitrine && (
					<VitrineCompra/>
				)}
			</div>
		)
	}
}
export default VersaoVideo;
