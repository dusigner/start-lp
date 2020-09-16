import React, { Component } from 'react';
import Headroom from 'react-headroom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import disableScroll from 'disable-scroll';
import Scrollvideo from "./layout/scrollvideo/scrollvideo";
import EspecificacoesTecnicas from '../versaoOriginal/layout/especificacoes/especificacoes'
import $ from 'jquery'
import VitrineCompra from '../versaoOriginal/layout/vitrine-compra/vitrine'
import AtencaoDetalhes from '../versaoOriginal/layout/atencao-detalhes/atencao-detalhes';
import Video from './layout/video/video';

// CSSs
import './versaoVideo.global.css';
import "./components/menu/menu.global.css";

class VersaoVideo extends React.Component {

	constructor(props) {
		super();
		this.state = {
			visao_geral: true,
			video: true,
			especificacoes: false,
			vitrine: false
		};
	}
	
     componentDidMount() {
		window.addEventListener('scroll', this.onWindowScroll)
		if(this.state.visao_geral){
			setTimeout(function() { 
				disableScroll.on()
			}, 2000);
		}
     }
    
     componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll);
     }
    /* OBSERVER IDs */
	onWindowScroll = () => {
		if(this.state.visao_geral) {
			const introActive = new IntersectionObserver(function(entries) {
				if(entries[0].isIntersecting === true) {
					$("#visao_geral").addClass("active")
				} else {
					$("#visao_geral").removeClass("active")
				}
			}, { threshold: [0.5] });
		
			introActive.observe(document.querySelector(".intro"));

			const videoActive = new IntersectionObserver(function(entries) {
				if(entries[0].isIntersecting === true) {
					$("#ver_video").addClass("active")
				} else {
					$("#ver_video").removeClass("active")
				}
			}, { threshold: [0.5] });
		
			videoActive.observe(document.querySelector(".observevideo"));
		}
	}

	handleClick(e) {
		if(e == "especificacoes"){
			disableScroll.off()
			this.setState({
				visao_geral: false,
				video: false,
				especificacoes: true,
				vitrine: false,
			})
		}else if(e == "video"){
			disableScroll.off()
			this.setState({
				visao_geral: true,
				video: true,
				especificacoes: false,
				vitrine: false,
			})
			
		}
		 else if(e == "visao_geral") {
			this.setState({
				visao_geral: true,
				video: true,
				especificacoes: false,
				vitrine: false,
			})
		} else if(e == "vitrine") {
			disableScroll.off()
			this.setState({
				visao_geral: false,
				video: false,
				especificacoes: false,
				vitrine: true,
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
										<a href='#geral' id="visao_geral" onClick={() => this.handleClick("visao_geral")} className="link">
											<span>Visão Geral</span>
										</a>
									</li>
									<li>
										<a href='#video-inverse4' id="ver_video" onClick={() => this.handleClick("video")} className="link">
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
					<section id="geral">
						<Scrollvideo />
					</section>
				)}
				{this.state.video && (
					<section className="observerSection">
						<AtencaoDetalhes/>
						<Video/>
					</section>
				)}
				{this.state.especificacoes && (
					<section>
						<EspecificacoesTecnicas />
						</section>
				)}
				{this.state.vitrine && (
					<section>
						<VitrineCompra/>
					</section>
				)}
			</div>
		)
	}
}
export default VersaoVideo;
