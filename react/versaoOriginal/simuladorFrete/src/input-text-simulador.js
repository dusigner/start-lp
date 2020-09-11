import React, { Component } from 'react';
import mascarar from './mascarar';
import { Link } from 'render';

export default class InputTextSimulador extends Component {

    constructor(props) {
        super(props);
        this.classOriginal = 'simulador-frete_input-text';
        this.state = {
            value: props.value
        }
    }

    renderMensagemErro() {
        return <p className="validation-error"> {this.props.mensagemErro} </p>;
    }

    render() {

        this.classes = [this.classOriginal, this.props.status];

        return (
            <>
                <div className="simulador-frete_header">
                    <label className="simulador-frete_label-input">Calcule o frete pra sua região</label>
                    <Link className="simulador-frete_link-buca-cep" to="http://www.buscacep.correios.com.br/sistemas/buscacep/" target="_blank">Não sei o CEP</Link>
                </div>

                <input id="simulador-frete_input" type="text" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} className={this.classes.join(' ')} onBlur={e => this.props.onblur(e)} onInput={event => mascarar(event, { maskPattern: '00000-000' })} placeholder="Digite o CEP"></input>
                {this.renderMensagemErro()}
            </>
        )
    }
}
