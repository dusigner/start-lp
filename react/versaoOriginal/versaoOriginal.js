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
					{ this.props.versao == "qrcode" && <MenuEstatico/> }
					{ this.props.versao == "video" &&  <Menu/> }
				</Headroom>

				<GeladeiraInverse versao={this.props.versao}></GeladeiraInverse>
				<Dispenser></Dispenser>
				<FreshControl></FreshControl>
				<ConvertibleSpace></ConvertibleSpace>
				<AtencaoDetalhes></AtencaoDetalhes>
				<Video></Video>
				{ this.props.versao == "qrcode" && <Vitrine/> }
				{ this.props.versao == "qrcode" && <JaTenho/> }
				{ this.props.versao == "video" && <VitrineCompra/> }
				<EspecificacoesTecnicas></EspecificacoesTecnicas>

			</div>
		)
	}
}
export default versaoOriginal;
