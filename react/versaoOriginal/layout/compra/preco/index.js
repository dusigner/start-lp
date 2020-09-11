import React, { Component } from 'react';
import { GetDataUtils, InstallmentsCardBrastemp } from 'brastemp.components';
import './preco-global.css';


export default class Preco extends Component {

    numberInstallments = (data, discountValue) => {
        const installments = GetDataUtils.prepareInstallmentsWithoutBrastemp(data);

        if (installments) {
            return (
                <div className="preco-new_onBottom">
                    {!!discountValue &&
                        <>
                            <span>ou </span>
                            <strong className="preco-new_onBottom_preco">{GetDataUtils.formatarMoeda(this.props.commertialOffer.Price)} </strong>
                        </>
                    }
                    <span>{!discountValue ? <> Em </> : <> em </>}</span>
                    <strong className="preco-new_onBottom_preco">{installments.NumberOfInstallments}x</strong>
                    <span> de </span>
                    <strong className="preco-new_onBottom_preco">{GetDataUtils.formatarMoeda(installments.Value)}</strong>
                    <span> s/juros</span>
                </div>
            )
        }
    }

    discountPercentage = () => {
        const discountPercentage = Math.floor(((this.props.commertialOffer.ListPrice - this.props.commertialOffer.Price) / this.props.commertialOffer.ListPrice) * 100)

        if (discountPercentage >= 5) {
            return <div className="preco-new_onTop_label_desconto">{discountPercentage}%</div>
        }
    }

    render() {
        const discountValue = this.props.commertialOffer.Teasers && this.props.commertialOffer.Teasers[0] ? Math.floor(this.props.commertialOffer.Teasers[0].Effects.Params[0].Value) : 0;
        const finalPrice = this.props.commertialOffer.Price - ((this.props.commertialOffer.Price * discountValue) / 100);
        return (
            <section className="preco-new">
                {
                    this.props.commertialOffer.ListPrice != finalPrice &&
                    <div className="preco-new_onTop">
                        <span itemProp="highPrice" className="preco-new_onTop_de">{GetDataUtils.formatarMoeda(this.props.commertialOffer.ListPrice)}</span>
                        {this.discountPercentage()}
                    </div>
                }
                <div itemProp="offers" itemScope itemType="http://schema.org/Product" className="preco-new_onMiddle">
                    <strong itemProp="price" className="preco-new_onMiddle_preco">{GetDataUtils.formatarMoeda(finalPrice)}</strong>
                    {!!discountValue &&
                        <>
                            <span className="preco-new_onMiddle_text"> à vista </span>
                            <span className="preco-new_onMiddle_desconto">({discountValue}% de desconto)</span>
                        </>
                    }
                </div>
                <>
                    {this.numberInstallments(this.props.commertialOffer.Installments, discountValue)}   
                </>
                <InstallmentsCardBrastemp
                    installments= {this.props.commertialOffer.Installments}
                />
            </section>
        );
    }
}
