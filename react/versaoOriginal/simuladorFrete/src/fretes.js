import React, { Component } from 'react';
import './frete.global.css';

export default class src extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section class="simulador-frete">
        <section class="simulador-frete_accordion">
          <span>Frete</span>
          <span>></span>
        </section>
        <section class="simulador-frete_header">
          <span>Valor</span>
          <span>Disponiblidade</span>
        </section>
        <section class="simulador-frete_prices">
          <div class="simulador-frete_item_price">
            <span>R$54,00</span>
            <span>
                Frete Entrega Agendada - 
                Econômica entrega em 9 dias úteis apra o CEP
            </span>
          </div>
          <div class="simulador-frete_item_price">
            <span>R$54,00</span>
            <span>
                Frete Entrega Agendada - 
                Econômica entrega em 9 dias úteis apra o CEP
            </span>
          </div>
          <div class="simulador-frete_item_price">
            <span>R$54,00</span>
            <span>
                Frete Entrega Agendada - 
                Econômica entrega em 9 dias úteis apra o CEP
            </span>
          </div>
        </section>
      </section>
    )
  }
}
