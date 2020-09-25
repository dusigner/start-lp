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


// Assets
import './versaoOriginal.global.css';

class versaoOriginal extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="versaoOriginal">

				<Headroom disableInlineStyles>
					{ this.props.versao == "qrcode" && <MenuEstatico versao={this.props.versao} /> }
					{ this.props.versao == "video" &&  <Menu versao={this.props.versao} /> }
				</Headroom>

				<GeladeiraInverse versao={this.props.versao}></GeladeiraInverse>
				<Dispenser versao={this.props.versao}></Dispenser>
				<FreshControl versao={this.props.versao}></FreshControl>
				<ConvertibleSpace versao={this.props.versao}></ConvertibleSpace>
				<AtencaoDetalhes versao={this.props.versao}></AtencaoDetalhes>
				<Video versao={this.props.versao}></Video>
				{ this.props.versao == "qrcode" && <Vitrine versao={this.props.versao}/> }
				{ this.props.versao == "video" && <VitrineCompra versao={this.props.versao}/> }
				<EspecificacoesTecnicas versao={this.props.versao}></EspecificacoesTecnicas>

			</div>
		)
	}
}
export default versaoOriginal;
