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
import Jatenho from '../versaoOriginal/layout/ja-tenho/ja-tenho'
import AlertJatenho from '../versaoOriginal/components/alert-jatenho/alert-jatenho'

// CSSs
import './versaoVideo.global.css';
/*import "./components/menu/menu.global.css";*/

class VersaoVideo extends React.Component {

	constructor(props) {
		super();
		this.state = {
			visao_geral: true,
			video: false,
			especificacoes: false,
			vitrine: false,
			jatenho: false
		};
	}
	 
	 componentDidMount() {
		window.addEventListener('scroll', this.onWindowScroll)
		
		// Inicio Tag
		const linksMenu = document.querySelectorAll('.tagMenu');
		
		if (this.props.versao == "video") {

			linksMenu.forEach(element => {

				element.addEventListener('click', ()=>{
					
					dataLayer.push({
						event: 'generic',
						category: 'jupiter_inverse4_lp_internal_desktop',
						action: 'click_header_inverse4 ',
						label: element.dataset.tag,
					})
	
				})
			});

		}
		// Fim Tag
    }
    
     componentWillUnmount() {
		window.removeEventListener('scroll', this.onWindowScroll);
		disableScroll.off()
     }
    /* OBSERVER IDs */
	onWindowScroll = () => {

		if(window.scrollY == 0 && this.state.visao_geral){
            disableScroll.on()
        }

		if(this.state.visao_geral) {
			const introActive = new IntersectionObserver(function(entries) {
				if(entries[0].isIntersecting === true) {
					$("#visao_geral").addClass("active")
				} else {
					$("#visao_geral").removeClass("active")
				}
			}, { threshold: [0.6] });
		
			introActive.observe(document.querySelector(".intro"));

			const videoActive = new IntersectionObserver(function(entries) {
				if(entries[0].isIntersecting === true) {
					$("#ver_video").addClass("active")
				} else {
					$("#ver_video").removeClass("active")
				}
			}, { threshold: [0.5] });
		
			videoActive.observe(document.querySelector(".observerSection"));
		}
	}

	handleClick(e) {
		const video = document.querySelector(".videobg");

		if(e == "visao_geral") {
			window.scrollTo(0, 0)
			this.setState({
				visao_geral: true,
				video: false,
				especificacoes: false,
				vitrine: false,
				jatenho: false
			})
		}
		if(e == "video"){
			disableScroll.off()
			this.setState({
				visao_geral: false,
				video: true,
				especificacoes: false,
				vitrine: false,
				jatenho: false
			})
			
		}
		if(e == "especificacoes"){
			disableScroll.off()
			window.scrollTo(0, 0)
			this.setState({
				visao_geral: false,
				video: false,
				especificacoes: true,
				vitrine: false,
				jatenho: false
			})
		} 
		if(e == "vitrine") {
			window.scrollTo(0, 0)
			disableScroll.off()
			if(!this.state.vitrine){
				this.setState({
					visao_geral: false,
					video: false,
					especificacoes: false,
					vitrine: true,
					jatenho: false
				})
			} else {
				this.setState({
					visao_geral: true,
					video: false,
					especificacoes: false,
					vitrine: false,
					jatenho: false
				})
			}
			
		
			
		}
		if(e == "jatenho") {
			window.scrollTo(0, 0)
			disableScroll.off()
			this.setState({
				visao_geral: false,
				video: false,
				especificacoes: false,
				vitrine: false,
				jatenho: true
			})
		}
	}

	handerJatenho=()=>{
		window.scrollTo(0, 0)
			disableScroll.off()
			this.setState({
				visao_geral: false,
				video: false,
				especificacoes: false,
				vitrine: false,
				jatenho: true
			})
	}
	
	render() {
		
		return (
			<div className="versaoVideo">
				<Headroom disableInlineStyles>
					<>
					<div className="menu__lp">
						<div className="menu__lp-wrap">
							<a href="https://www.brastemp.com.br/eletrodomesticos/geladeira---refrigerador/4-portas" title="Geladeira 4 Portas" className="linkH1 tagMenu" data-tag="geladeira_4portas">
								<h1>Geladeira 4 Portas</h1>
							</a>
							<nav id="nav">
								<ul>
									<li>
										<a id="visao_geral" onClick={() => this.handleClick("visao_geral")} className={`${this.state.visao_geral ? "active link" : "link" } tagMenu`} data-tag="visao_geral">
											<span>Visão Geral</span>
										</a>
									</li>
									<li>
										<a id="ver_video" onClick={() => this.handleClick("video")}className={`${this.state.video ? "active link" : "link" } tagMenu`} data-tag="ver_video">
											<span>Ver Vídeo</span>
										</a>
									</li>
									<li>
										<a onClick={() => this.handleClick("especificacoes")} className={`${this.state.especificacoes ? "active link" : "link" } tagMenu`} data-tag="especificacoes">
											<span>Especificações técnicas</span>
										</a>
									</li>
									<li>
										<a onClick={() => this.handleClick("jatenho")} className={`${this.state.jatenho ? "active link" : "link" } tagMenu`} data-tag="ja_tenho">
											<span>Já tenho essa geladeira</span>
										</a>
									</li>
									<li>
										<a name="menu_superior" onClick={() => this.handleClick("vitrine")} className={`${this.state.vitrine ? "active link" : "link" } tagMenu`} data-tag="comprar">
											<span>{this.state.vitrine ? "Fechar" : "Comprar" }</span>
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
						<AtencaoDetalhes versao="video"/>
						<AlertJatenho handler={this.handerJatenho}/> 
						<Video/>
						<div className="small__texts">
							<small>¹*Baseado em testes internos feitos com o modelo com pressão de água de 20 psi (14mca) : armazenamento de gelo de até 1,3 kg de uma vez/capacidade de fabricação de gelo de até 1,6kg em 24 horas</small>
							<small>²*Teste realizado com maçã, tomate, pimentão, lima e kiwi, em condições controladas de teste a 25°C de temperatura ambiente, no ajuste médio de temperatura do produto. Considerando alimentos inicialmente frescos e secos</small>
							<small>³*Considerando somente o espaço interno do refrigerador. Teste realizado no laboratório P.H. s.r.l. / TÜV SUD Group com as seguintes bactérias: Escherichia coli e Staphylococcus aureus</small>
							<small>⁴*É necessário que o fornecimento de água tenha uma pressão de 10 a 80 metros de coluna de água (m.c.a), para que o sistema de purificação de água funcione adequadamente.</small>
						</div>
					</section>
				)}
				{this.state.video && (
					<section className="observerSection">
						<Video/>
					</section>
				)}
				{this.state.especificacoes && (
					<section>
						<EspecificacoesTecnicas versao="video" />
					</section>
				)}
				{this.state.vitrine && (
					<section>
						<VitrineCompra versao="video"/>
					</section>
				)}
				{this.state.jatenho && (
					<section>
						<Jatenho versao="video"/>
					</section>
				)}
			</div>
		)
	}
}
export default VersaoVideo;
