import React, { Component } from 'react';
import Headroom from 'react-headroom';

// Assets
import './lancamentorefrivideo.global.css';

class LancamentoRefriVideo extends React.Component {

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
					Vídeo
				</Headroom>
			</div>
		)
	}
}
export default LancamentoRefriVideo;
