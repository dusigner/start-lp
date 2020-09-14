import React, { Component } from 'react';
import './status-simulador-frete.global.css';

class StatusSimuladorFrete extends Component {
    constructor(props) {
        super(props);
    }

    renderIcon(status) {
        let render;
        switch (status) {
            case 'loading':

                render = (<div className="icon loader-simulador"></div>)
                break;
            case 'sucess':
                render = (<span className="icon icon-check sucess"></span>)
                break;
            case 'error':
                render = (<span className="icon icon-error error"></span>)
                break;
            default:
                break;
        }

        return render;
    }

    render() {
        return (
            <>
                {this.renderIcon(this.props.status)}
            </>
        )
    }
}

export default StatusSimuladorFrete;