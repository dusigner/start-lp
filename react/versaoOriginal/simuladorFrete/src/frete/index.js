import React, { Component } from 'react';
import './frete.global.css';

export default class frete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAccordionOpen: "open",
      height: undefined
    }

    this.isAccordionOpen = "open"

  }

  componentDidMount() {
    if (this.isAccordionOpen == "open") {
      this.guardaAlturaListaFrete();
    }
  }

  guardaAlturaListaFrete() {
    this.itemElement = document.querySelector('.table-freight_items').clientHeight;
    document.querySelector('.table-freight_items').style.height = `${this.itemElement}px`;
  }

  componentDidUpdate() {
    if (this.isAccordionOpen == "open") {

      document.querySelector('.table-freight_items').style.height = null;

      setTimeout(() => {
        this.guardaAlturaListaFrete();
      }, 1);

    }
  }

  formatCurrency(price) {
    const priceString = price.toString()
    let priceFormated = `R$${priceString.substring(0, priceString.length - 2) || '0'},${priceString.substring(priceString.length - 2)}`
    return priceFormated
  }

  toggleFreightTable() {
    if (this.isAccordionOpen == "open") {
      document.querySelector('.table-freight_items').style.height = "0px"
      this.isAccordionOpen = "close"
      document.querySelector('.freightTable').classList.remove("open")
      document.querySelector('.table-freight_header_value').textContent = 'Veja os fretes disponíveis'
      document.querySelector('.table-freight_header_disponiblity').textContent = ''
      document.querySelector('.table-freight_header_disponiblity').style.width = '0%'
      document.querySelector('.table-freight_header_value').style.width = '100%'
      document.querySelector('.table-freight_header_label_action').textContent = 'Visualizar'
    } else {
      document.querySelector('.table-freight_header_value').textContent = 'Valor'
      document.querySelector('.table-freight_header_disponiblity').textContent = 'Disponibilidade'
      document.querySelector('.table-freight_items').style.height = `${this.itemElement}px`
      this.isAccordionOpen = "open"
      document.querySelector('.freightTable').classList.add("open")
      document.querySelector('.table-freight_header_value').style.width = '47%'
      document.querySelector('.table-freight_header_disponiblity').style.width = '39%'
      document.querySelector('.table-freight_header_label_action').textContent = 'Ocultar'
    }
  }

  render() {
    const { slas } = this.props
    return (
      <section className="table-freight">
        <div className="table-freight_header">
          <span className="table-freight_header_value">Valor</span>
          <span className="table-freight_header_disponiblity">Disponibilidade</span>
          <div className="table-freight_header_label">
            <span className="table-freight_header_label_action">Ocultar</span>
            <span className={`icon icon-arrow open freightTable`} onClick={() => this.toggleFreightTable()}></span>
          </div>
        </div>
        <section className="table-freight_items" >
          {
            slas.map(item => (
              <div className="table-freight_item" key={item.id}>

                <span className="table-freight_item_price">{item.price ? this.formatCurrency(item.price) : `Frete Grátis`}</span>
                <div className="table-freight_item_right">
                  <span className="table-freight_item_right_title">{item.id}</span>
                  <span className="table-freight_item_right_shipping_estimate">Até {item.shippingEstimate.replace("bd", "")}  dias úteis</span>
                </div>

              </div>
            ))
          }
        </section>
      </section>
    )
  }
}
