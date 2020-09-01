import React, { Component } from 'react'
import { Header, Footer, SEO } from 'brastemp.components';
import { ExtensionPoint } from "render";
import LancamentoRefri from "./lancamentoRefri/lancamentoRefri";
import LazyLoad from 'react-lazyload';

class lancamentoRefri extends Component {

    render() {
        return (
            <React.Fragment>
                <SEO title={"Jupter!"} description={"Jupter"} />
                <LazyLoad height={'100%'} offset={0}>
                    <main id="main" className="main">
                        <ExtensionPoint id="header" hideSupportMenu={true} />
                        <LancamentoRefri />
                        <ExtensionPoint id="footer" hideSupportMenu={true} />
                    </main>
                </LazyLoad>
            </React.Fragment>
        )
    }

}

export default lancamentoRefri;