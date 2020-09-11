import React, { Component } from 'react'
import { SEO } from 'brastemp.components';
import { ExtensionPoint } from "render";
import VersaoOriginal from "./versaoOriginal/lancamentoRefri";
import VersaoVideo from "./versaoVideo/lancamentoRefriVideo";
import LazyLoad from 'react-lazyload';

// Assets
import './versaoOriginal.global.css';

class lancamentoRefri extends Component {

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
                        <VersaoOriginal/>
                        <VersaoVideo/>
                        <ExtensionPoint id="footer" hideSupportMenu={true} />
                    </main>
                </LazyLoad>
            </React.Fragment>
        )
    }

}

export default lancamentoRefri;