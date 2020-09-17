import React from 'react';
import Headroom from 'react-headroom';

// Assets
import './versaoQrcode.global.css';

class versaoQrcode extends React.Component {

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
export default versaoQrcode;
