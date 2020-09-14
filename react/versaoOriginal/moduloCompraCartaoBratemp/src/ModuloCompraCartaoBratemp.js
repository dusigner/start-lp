import React, { Component } from 'react';
import './cartao-brastemp.global.css';
import cardItau from './assets/cardItau.svg'
class moduloCompraCartaoBratemp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailBox: false,
            shouldRender: typeof (props.cartaoBrastemp) === "boolean" ? props.cartaoBrastemp : true
        };
    }

    handleChangeDetailBox = (visible) => {
        let detailBox = (typeof visible === "boolean") ? visible : !this.state.detailBox;

        this.setState({ detailBox });
    }

    handleDatalayer = () => {

        dataLayer.push({
            event: 'generic-event-trigger',
            category: 'Cartão Brastemp',
            action: 'Página de Produto ',
            label: 'Clique Aqui'
        });

    }

    render() {
        return this.state.shouldRender ? (
            <div className={"cartao__brastemp " + (this.state.detailBox ? "detailbox-visible" : "")}>
                <img className="cartao__brastemp--thumbnail" src={cardItau} />
                <div className="cartao__brastemp--info">
                    <span>
                        <span className="cartao__brastemp--info--installments"> Aproveite até 21x s/juros</span>e benefícios exclusivos. 
                        <a onClick={this.handleDatalayer} href="https://www.brastemp.com.br/cartao-brastemp" target="_blank"> Saiba mais </a>
                    </span>
                </div>
                <div className="cartao__brastemp--help" onClick={() => this.handleChangeDetailBox()}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M8.16666 14H9.83332V12.3333H8.16666V14ZM8.99999 0.666668C4.39999 0.666668 0.666656 4.4 0.666656 9C0.666656 13.6 4.39999 17.3333 8.99999 17.3333C13.6 17.3333 17.3333 13.6 17.3333 9C17.3333 4.4 13.6 0.666668 8.99999 0.666668ZM8.99999 15.6667C5.32499 15.6667 2.33332 12.675 2.33332 9C2.33332 5.325 5.32499 2.33333 8.99999 2.33333C12.675 2.33333 15.6667 5.325 15.6667 9C15.6667 12.675 12.675 15.6667 8.99999 15.6667ZM8.99999 4C7.15832 4 5.66666 5.49167 5.66666 7.33333H7.33332C7.33332 6.41667 8.08332 5.66667 8.99999 5.66667C9.91666 5.66667 10.6667 6.41667 10.6667 7.33333C10.6667 9 8.16666 8.79167 8.16666 11.5H9.83332C9.83332 9.625 12.3333 9.41667 12.3333 7.33333C12.3333 5.49167 10.8417 4 8.99999 4Z" fill="#999999"/>
                </svg>
                </div>
                <div className={"cartao__brastemp--detailbox"}>
                    <div className="cartao__brastemp--detailbox_close">
                        <i onClick={() => this.handleChangeDetailBox(false)}>
                            <svg width="8.297" height="8.296" viewBox="0 0 8.297 8.296">
                                <path d="M7.335,8.132,4.148,4.945.961,8.132a.563.563,0,0,1-.8-.8L3.352,4.148.165.961a.563.563,0,0,1,.8-.8L4.148,3.352,7.335.165a.563.563,0,0,1,.8.8L4.945,4.148,8.132,7.335a.563.563,0,0,1-.8.8Z" />
                            </svg>
                        </i>
                    </div>
                    <p>
                        Válido para compra feita com o Cartão Brastemp, que deverá ser selecionado como meio de pagamento. Considerando parcela mínima de 100 reais.
					</p>
                </div>
            </div>
        ) : null
    }
}

export default moduloCompraCartaoBratemp;
