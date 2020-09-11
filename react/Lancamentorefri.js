import React, { Component } from 'react'
import { SEO } from 'brastemp.components';
import { ExtensionPoint } from "render";
import LancamentoRefri from "./lancamentoRefri/lancamentoRefri";
import LancamentoRefriVideo from "./lancamentoRefriVideo/lancamentoRefriVideo";
import LazyLoad from 'react-lazyload';

// Assets
import './lancamentorefri.global.css';

class lancamentoRefri extends Component {

    render() {
        return (
            <React.Fragment>
                <SEO title={"Jupter!"} description={"Jupter"} />
                <LazyLoad height={'100%'} offset={0}>
                    <main id="main" className="main">
                        <ExtensionPoint id="header" hideSupportMenu={true} />
                        <LancamentoRefri className="page__estatico" />
                        <LancamentoRefriVideo className="page__video" />
                        <ExtensionPoint id="footer" hideSupportMenu={true} />
                    </main>
                </LazyLoad>
            </React.Fragment>
        )
    }

}

export default lancamentoRefri;