import React, { Component } from 'react';
import Headroom from 'react-headroom';
import Menu from "./components/menu/menu";
import Scrollvideo from "./layout/scrollvideo/scrollvideo";

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
			<div className="refrivideo">
				<Headroom disableInlineStyles>
					<Menu/>
				</Headroom>
				<Scrollvideo />
			</div>
		)
	}
}
export default LancamentoRefriVideo;
