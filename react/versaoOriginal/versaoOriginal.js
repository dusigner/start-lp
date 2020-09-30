import React, { Component } from 'react';
import Headroom from 'react-headroom';

// Layout
import MenuEstatico from './components/menu-estatico/menu'
import Menu from './components/menu/menu'
import GeladeiraInverse from './layout/geladeira-inverse/geladeira-inverse';
import Dispenser from './layout/dispenser/dispenser';
import FreshControl from './layout/fresh-control/fresh-control';
import ConvertibleSpace from './layout/convertible-space/convertible-space';
import AtencaoDetalhes from './layout/atencao-detalhes/atencao-detalhes';
import Video from '../versaoVideo/layout/video/video';
import Vitrine from './layout/vitrine/vitrine'
import VitrineCompra from './layout/vitrine-compra/vitrine'
import EspecificacoesTecnicas from './layout/especificacoes/especificacoes';
import JaTenho from './layout/ja-tenho/ja-tenho'
import AlertJatenho from './components/alert-jatenho/alert-jatenho';

// Assets
import "./components/menu-estatico/menu.global.css";
import './versaoOriginal.global.css';

class versaoOriginal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			versaoEstatica: true,
			jatenho: false
		};
	}

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
		const menu = document.getElementsByClassName('menu__lp')[0];
		const active = document.querySelectorAll('nav .active');
		
		if(!this.state.jatenho){
				let index = sections.length;
	
				while(--index && window.scrollY + 55 < sections[index].offsetTop) {}
				
				links.forEach(
					(link) => link.classList.remove('active')
					
				);
				links[index].classList.add('active');
				
				if(window.innerWidth < 1024){
					if(document.documentElement.scrollTop > 300){
						menu.scrollLeft = active[0].offsetLeft - (screen.width / 2 - active[0].offsetWidth / 2 - 80);  
					}else {
						menu.scrollLeft = active[0].offsetLeft - 10;
					}
				}
		} else {
			links.forEach(
				(link) => link.classList.remove('active')
			);
			menu.scrollLeft = active[0].offsetLeft - 10;
		}
        

        
        

	};
	
	handleClick=(e)=> {
		
		if(e == "ja-tenho") {
			const menu = document.getElementsByClassName('menu__lp')[0];
			const active = document.querySelectorAll('.ja-tenho');
			menu.scrollLeft = active.offsetLeft
			this.setState({
				jatenho: true,
				versaoEstatica: false,
			})
		} else {
			this.setState({
				jatenho: false,
				versaoEstatica: true,
			})
			e.persist();

			setTimeout(()=>{ 
				let sections = document.getElementById(e.target.getAttribute("name")).offsetTop - 50;
				window.scrollTo(0, sections)
		 	}, 500);
		}
	}

	handerJatenho=()=>{
		this.setState({
			jatenho: true,
			versaoEstatica: false,
		})
	}

	render() {

		return (
			<div className="versaoOriginal">
				<Headroom disableInlineStyles>
					<div className="menu__lp">
						<div className="menu__lp-wrap">
							<nav id="nav">
								<ul>
									<li>
										<a 
											onClick={(e) => {this.handleClick(e)}} 
											href='#geladeira-inverse-4' 
											name="geladeira-inverse-4"
											className={`${this.state.jatenho ? "links menu__title tagMenu" : "links menu__title" }`} 
											data-tag="click_geladeira_4_portas">
											Geladeira 4 Portas
										</a>
									</li>
									<li>
										<a onClick={(e) => {this.handleClick(e)}} href='#dispenser-de-agua-e-gelo' name="dispenser-de-agua-e-gelo" className="links tagMenu" data-tag="click_dispenser_de_agua_e_gelo">
											Dispenser de água e gelo
										</a>
									</li>
									<li>
										<a onClick={(e) => this.handleClick(e)} href='#fresh-control' name="fresh-control" className="links tagMenu" data-tag="click_fresh_control">
											Fresh Control
										</a>
									</li>
									<li>
										<a onClick={(e) => this.handleClick(e)} href='#convertible-space' name="convertible-space" className="links tagMenu" data-tag="click_convertible_space">
											Convertible Space
										</a>
									</li>
									<li>
										<a onClick={(e) => this.handleClick(e)} href='#atencao-detalhes' name="atencao-detalhes" className="links tagMenu" data-tag="click_atencao_aos_detalhes">
											Atenção aos detalhes
										</a>
									</li>
									{ this.props.versao == "qrcode" && (
										<li className="btnAct">
											<a onClick={(e) => this.handleClick(e)} href='#video-inverse4' name="video-inverse4" className="links tagMenu" data-tag="click_ver_video">
												Ver Vídeo
											</a>
										</li>
									)}
									{ this.props.versao == "video" && (
										<li>
											<a onClick={(e) => this.handleClick(e)} href='#video-inverse4' name="video-inverse4" className="links tagMenu" data-tag="click_ver_video">
												Ver Vídeo
											</a>
										</li>
									)} 
									{ this.props.versao == "video" && (
										<li className="btnAct">
											<a onClick={(e) => this.handleClick(e)} href='#vitrine'  className="links tagMenu" name="vitrine" data-tag="click_comprar">
												Comprar
											</a>
										</li>
									)}
									<li>
										<a onClick={(e) => this.handleClick(e)} href='#especificacoes' name="especificacoes" className="links tagMenu" data-tag="click_especificacoes">
											Especificações
										</a>
									</li>
									<li>
										<a onClick={(e) => this.handleClick("ja-tenho")} href='#ja-tenho' name="ja-tenho" className={`${this.state.jatenho ? "link active ja-tenho tagMenu" : "link ja-tenho tagMenu" }`} data-tag="click_ja_tenho">
											Já tenho essa geladeira
										</a>
									</li>

									
								</ul>
							</nav>
						</div>
					</div>
				</Headroom> 

				{this.state.jatenho && (<JaTenho/>)}

				{this.state.versaoEstatica && (
					<div>
						<GeladeiraInverse versao={this.props.versao}/>
						{ this.props.versao == "qrcode" && 
							<AlertJatenho handler={this.handerJatenho}/> 
						}
						<Dispenser versao={this.props.versao}/>
						<FreshControl versao={this.props.versao}/>
						<ConvertibleSpace versao={this.props.versao}/>
						<AtencaoDetalhes versao={this.props.versao}/>
						<Video versao={this.props.versao}/>
						{ this.props.versao == "qrcode" && <Vitrine/> }
						{ this.props.versao == "video" && <VitrineCompra/> }
						<EspecificacoesTecnicas versao={this.props.versao}/>
						<div className="small__texts">
							<small>¹*Baseado em testes internos feitos com o modelo com pressão de água de 20 psi (14mca) : armazenamento de gelo de até 1,3 kg de uma vez/capacidade de fabricação de gelo de até 1,6kg em 24 horas</small>
							<small>²*Teste realizado com maçã, tomate, pimentão, lima e kiwi, em condições controladas de teste a 25°C de temperatura ambiente, no ajuste médio de temperatura do produto. Considerando alimentos inicialmente frescos e secos</small>
							<small>³*Considerando somente o espaço interno do refrigerador. Teste realizado no laboratório P.H. s.r.l. / TÜV SUD Group com as seguintes bactérias: Escherichia coli e Staphylococcus aureus</small>
						</div>
					</div>
				)}

			</div>
		)
	}
}
export default versaoOriginal;
