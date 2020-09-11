import React, { Component } from 'react'
import { Header, Footer, SEO } from 'brastemp.components';
import { ExtensionPoint } from "render";
import LancamentoRefriVideo from "./lancamentoRefriVideo/lancamentoRefriVideo";
import LazyLoad from 'react-lazyload';

class lancamentoRefriVideo extends Component {

    constructor(props) {
		super(props);
	}

    render() {
        return (
            <React.Fragment>
                <SEO title={this.props.title} description={this.props.description} />
                <LazyLoad height={'100%'} offset={0}>
                    <main id="main" className="main">
                        <ExtensionPoint id="header" hideSupportMenu={true} />
                        <LancamentoRefriVideo />
                        <ExtensionPoint id="footer" hideSupportMenu={true} />
                    </main>
                </LazyLoad>
            </React.Fragment>
        )
    }

}

export default lancamentoRefriVideo;