import React, { Component } from 'react'
import { Header, Footer, SEO } from 'brastemp.components';
import { ExtensionPoint } from "render";
import LancamentoRefriEspecificacoes from "./lancamentoRefriEspecificacoes/lancamentoRefriEspecificacoes";
import LazyLoad from 'react-lazyload';

class lancamentoRefriEspeficacoes extends Component {

    render() {
        return (
            <React.Fragment>
                <SEO title={"Jupter!"} description={"Jupter"} />
                <LazyLoad height={'100%'} offset={0}>
                    <main id="main" className="main">
                        <ExtensionPoint id="header" hideSupportMenu={true} />
                        <LancamentoRefriEspecificacoes />
                        <ExtensionPoint id="footer" hideSupportMenu={true} />
                    </main>
                </LazyLoad>
            </React.Fragment>
        )
    }

}

export default lancamentoRefriEspeficacoes;