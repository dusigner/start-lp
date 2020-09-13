import React, { Component } from 'react'
import { Header, Footer, SEO } from 'brastemp.components';
import { ExtensionPoint } from "render";
import VersaoOriginal from "./versaoOriginal/lancamentoRefri";
import LazyLoad from 'react-lazyload';
import HeaderFooter from './versaoOriginal/layout/header-footer/header-footer'
import './versaoQrcode.global.css'

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
                        <HeaderFooter
                            propsClass="header"
                        />
                        <VersaoOriginal 
                            versao="qrcode"
                        />
                        <HeaderFooter
                            propsClass="footer"
                        />
                    </main>
                </LazyLoad>
            </React.Fragment>
        )
    }

}

export default lancamentoRefriVideo;