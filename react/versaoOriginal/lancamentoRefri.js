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
import './lancamentorefri.global.css';

class LancamentoRefri extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render() {

		return (
			<div className="lancamento__refri">

				<Headroom disableInlineStyles>
					{ this.props.versao == "qrcode" && <MenuEstatico/> }
					{ this.props.versao == "video" && <Menu/> }
				</Headroom>

				<GeladeiraInverse></GeladeiraInverse>
				<Dispenser></Dispenser>
				<FreshControl></FreshControl>
				<ConvertibleSpace></ConvertibleSpace>
				<AtencaoDetalhes></AtencaoDetalhes>
				<Video></Video>
				{ this.props.versao == "qrcode" && <Vitrine/> }
				{ this.props.versao == "video" && <VitrineCompra/> }
				<EspecificacoesTecnicas></EspecificacoesTecnicas>

			</div>
		)
	}
}
export default LancamentoRefri;
