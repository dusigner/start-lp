import React, { Component } from 'react';
import Headroom from 'react-headroom';

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
					Refri
				</Headroom>
			</div>
		)
	}
}
export default LancamentoRefri;
