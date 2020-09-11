import React, { Component } from 'react';
import Headroom from 'react-headroom';
import Menu from "./components/menu/menu";
import Scrollvideo from "./layout/scrollvideo/scrollvideo";
import EspecificacoesTecnicas from '../versaoOriginal/layout/especificacoes/especificacoes'

// Assets
import './lancamentorefrivideo.global.css';

class LancamentoRefriVideo extends React.Component {

	render() {

		return (
			<div className="refrivideo">
				<Headroom disableInlineStyles>
					<Menu/>
				</Headroom>
				<Scrollvideo  />
				<EspecificacoesTecnicas />
			</div>
		)
	}
}
export default LancamentoRefriVideo;
