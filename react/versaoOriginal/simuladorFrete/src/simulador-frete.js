import React, { Component } from 'react';
import { Query } from 'react-apollo';
import GetAddressByZip from '../../queries/GetAddressByZip.graphql';
import ShippingSimulate from '../../queries/ShippingSimulate.graphql';
import StatusSimuladorFrete from './status-simulador-frete';
import Frete from './frete';
import InputTextSimulador from './input-text-simulador';
import './status-simulador-frete.global.css';

class SimuladorFrete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            primeiroRender: true,
            erroValidacao: undefined
        }

        this.zipcode;
        this.input;
    }

    buscar(event, refetch) {

        event.preventDefault();
        const zipcode = event.target.value || document.querySelector('#simulador-frete_input').value;
        const regex = /[\d]{5}-[\d]{3}/;
        this.zipcode = zipcode;

        if (!zipcode || !regex.test(zipcode) || zipcode == '00000-000') {
            this.setState({ erroValidacao: 'CEP inválido. Por favor, digite novamente ou informe outro' });
            this.dataLayerErro();
            return;
        }

        if (this.state.primeiroRender || this.state.erroValidacao) {
            return this.setState({
                primeiroRender: false,
                erroValidacao: ''
            });
        }

        if (refetch) {
            refetch({ postalCode: zipcode, quantity: '1', idProduto: this.props.itemId })
        }
    }


    dataLayerSucesso() {
        dataLayer.push({
            event: 'generic',
            category: 'Produto',
            action: 'Simulador Frete ',
            label: 'Usuário Testou '
        });
    }

    dataLayerErro() {
        dataLayer.push({
            event: 'generic',
            category: 'Produto',
            action: 'Simulador Frete ',
            label: 'Erro no CEP '
        });
    }

    render() {

        let statusSemQuery = this.state.erroValidacao ? 'error' : undefined;
        return (
            <>
                {
                    (!this.state.primeiroRender && !this.state.erroValidacao) &&
                    <Query query={ShippingSimulate} variables={{ postalCode: this.zipcode, quantity: '1', idProduto: this.props.itemId, sellerId: this.props.sellerId }}>
                        {({ loading, error, data, refetch, networkStatus }) => {

                            let mensagemErro;
                            this.erroValidacao = "";

                            if (error) {
                                if (error.networkError || error.graphQLErrors.extensions.code == 'INTERNAL_SERVER_ERROR') {
                                    mensagemErro = "Sistema está fora do ar. Por favor, tente novamente em alguns instantes.";
                                } else {
                                    this.dataLayerErro();
                                    mensagemErro = 'CEP inválido. Por favor, digite novamente ou informe outro';
                                }
                            }

                            const sucesso = data && data.shipping;
                            const semEstoque = data && data.shipping ? data.shipping.messages.find(mensagem => ["withoutStock", "cannotBeDelivered"].includes(mensagem.code)) : undefined;
                            let sla;

                            if (sucesso && !semEstoque) {
                                sla = data.shipping.logisticsInfo[0].slas;
                                this.dataLayerSucesso();
                            } else if (!loading) {
                                mensagemErro = 'Não é possivel entregar no seu CEP';
                            }

                            const status = loading ? 'loading' : mensagemErro ? 'error' : sucesso ? 'sucess' : undefined;

                            return this.renderSimuladorFrete(status, mensagemErro, sla, refetch);
                        }}
                    </Query>
                }

                {
                    (this.state.primeiroRender || this.state.erroValidacao) &&
                    this.renderSimuladorFrete(statusSemQuery, this.state.erroValidacao, undefined, undefined)
                }

            </>
        )
    }

    renderSimuladorFrete(status, mensagemErro, slas, refetch) {
        return (
            <div className="simulador-frete">
                <div className="simulador-frete__holder">
                    <form onSubmit={(e) => this.buscar(e, refetch)} className="wrapper-input-addon">
                        <InputTextSimulador status={status} mensagemErro={mensagemErro} value={this.zipcode}></InputTextSimulador>
                        <StatusSimuladorFrete status={status}></StatusSimuladorFrete>
                    </form>
                    <button className="simulador-frete__btn-ok" onClick={(e) => this.buscar(e, refetch)}>Ok</button>
                </div>

                {slas && <Frete slas={slas} />}
            </div>
        );
    }
}

export default SimuladorFrete;
