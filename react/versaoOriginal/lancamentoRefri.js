import React, { Component } from 'react';
import Headroom from 'react-headroom';

// Layout
import GeladeiraInverse from './layout/geladeira-inverse/geladeira-inverse';
import Dispenser from './layout/dispenser/dispenser';
import FreshControl from './layout/fresh-control/fresh-control';
import ConvertibleSpace from './layout/convertible-space/convertible-space';
import AtencaoDetalhes from './layout/atencao-detalhes/atencao-detalhes';
import Video from './layout/video/video';
import Vitrine from './layout/vitrine/vitrine'
import Compra from './layout/compra/ModuloCompra'
import EspecificacoesTecnicas from './layout/especificacoes/especificacoes';


// Assets
import './lancamentorefri.global.css';

class LancamentoRefri extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {

	}

	render() {

		return (
			<div className="lancamento__refri">
				<Headroom disableInlineStyles>
				</Headroom>

					<GeladeiraInverse></GeladeiraInverse>
					<Dispenser></Dispenser>
					<FreshControl></FreshControl>
					<ConvertibleSpace></ConvertibleSpace>
					<AtencaoDetalhes></AtencaoDetalhes>
					<Video></Video>
					{/* <Compra></Compra> */}
					<Vitrine></Vitrine>
					<EspecificacoesTecnicas></EspecificacoesTecnicas>

			</div>
		)
	}
}
export default LancamentoRefri;
