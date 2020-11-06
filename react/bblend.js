import React, { Component } from 'react'
import { SEO } from 'brastemp.components';
import { ExtensionPoint } from "render";
import BblendLayout from "./bblendLayout/bblendLayout";
import LazyLoad from 'react-lazyload';

// Assets
import './bblend.global.css';

class bblend extends Component {

    render() {
        return (
            <React.Fragment>
                <SEO title={this.props.title} description={this.props.description} />
                <div style={{position: "absolute", color: "#fff"}}>
                    <h1>Geladeira 4 Portas</h1>
                </div>
                <LazyLoad height={'100%'} offset={0}>
                    <main id="main" className="main">
                        <ExtensionPoint id="header" hideSupportMenu={true} />
                        <BblendLayout/>
                        <ExtensionPoint id="footer" hideSupportMenu={true} />
                    </main>
                </LazyLoad>
            </React.Fragment>
        )
    }

}

export default bblend;