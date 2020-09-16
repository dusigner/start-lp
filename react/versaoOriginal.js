import React, { Component } from 'react'
import { SEO } from 'brastemp.components';
import { ExtensionPoint } from "render";
import VersaoOriginal from "./versaoOriginal/lancamentoRefri";
import VersaoVideo from "./versaoVideo/versaoVideo";
import LazyLoad from 'react-lazyload';

// Assets
import './versaoOriginal.global.css';

class lancamentoRefri extends Component {

    constructor(props) {
        super(props);
        
    }

    renderContent(){
        if(window.innerWidth > 1025){
            return (
                <VersaoVideo/>
            )
        } else {
            return (
                <VersaoOriginal versao="video" />
            )
        }
    }


    updateDimensions = () => {
        this.setState({ width: window.innerWidth });
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    
    render() {
        return (
            <React.Fragment>
                <SEO title={this.props.title} description={this.props.description} />
                <LazyLoad height={'100%'} offset={0}>
                    <main id="main" className="main">
                        <ExtensionPoint id="header" hideSupportMenu={true} />
                        {this.renderContent()}
                        <ExtensionPoint id="footer" hideSupportMenu={true} />
                    </main>
                </LazyLoad>
            </React.Fragment>
        )
    }

}

export default lancamentoRefri;