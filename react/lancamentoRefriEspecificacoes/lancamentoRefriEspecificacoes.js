import React, { Component } from 'react';
import Headroom from 'react-headroom';

// Assets
import './lancamentorefriespecificacoes.global.css';

class LancamentoRefriEspecificacoes extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {

	}

	render() {

		return (
			<div className="refriespecificacoes">
				<Headroom disableInlineStyles>
					Especificações
				</Headroom>
			</div>
		)
	}
}
export default LancamentoRefriEspecificacoes;
