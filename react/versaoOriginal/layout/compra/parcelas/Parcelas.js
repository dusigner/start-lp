import React, { Component } from 'react';
import { GetDataUtils, Icon } from "brastemp.components";
import "./parcelas.global.css";
import cls from 'classnames';

export default class Parcelas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showInstallments: false,
            installmentsTab: 0,
        };
    }

    render() {
        const { installmentsTab } = this.state
        const groupInstallments = this.groupInstallments(this.props.commertialOffer.Installments);

        const brastempInstallments = groupInstallments.filter(group => group.type == "Cartão Brastemp")

        return <div className="see_installments">
            <div className={cls("see_installments--link", { opened: this.state.showInstallments })} href="javascript:void(0)" onClick={() => {
                dataLayer.push({
                    event: 'generic-event-trigger',
                    category: 'Pagina de Produto',
                    action: 'Parcelamento ',
                    label: 'Ver Parcelas '
                })
                this.setShowInstallments()
            }}>
                <Icon name={"arrow"} />
                {
                    this.state.showInstallments ?
                    "Ocultar formas de pagamento"
                        : "Ver todas as formas de pagamento"
                }
            </div>

            <div className={cls("see_installments--box", { opened: this.state.showInstallments })}>
                <div className="see_installments--box--header">
                    <span onClick={() => {
                        this.setState({installmentsTab: 0})
                        dataLayer.push({
                            event: 'generic-event-trigger',
                            category: 'Pagina de Produto',
                            action: 'Parcelamento ',
                            label: 'Aba - Cartao de Credito '
                        })
                    }} className={cls({choosed: installmentsTab == 0})}>Cartão de Crédito</span>
                    
                    {brastempInstallments[0] &&
                        <span onClick={() => {
                            this.setState({installmentsTab: 1})
                            dataLayer.push({
                                event: 'generic-event-trigger',
                                category: 'Pagina de Produto',
                                action: 'Parcelamento ',
                                label: 'Aba - Cartao Brastemp '
                            })
                        }} className={cls({choosed: installmentsTab == 1})}>Cartão Brastemp <span className="badge">{brastempInstallments[0] && brastempInstallments[0].installments.length}x s/ juros</span></span>
                    }
                </div>

                <ul className="see_installments--box--list">
                    {this.mountInterestRate(this.props.commertialOffer.Installments, installmentsTab)}
                </ul>

                <p className="see_installments--box--subtitle">
                    Para financiamento com juros de 0,99%
                    a.m. - Custo Efetivo Total (CET) máximo
                    de 12,55% a.a.
                    </p>
            </div>


        </div>;
    }

    setShowInstallments() {
        this.setState({
            showInstallments: !this.state.showInstallments
        })
    }

    groupInstallments(arr) {
        return arr.reduce((acumulator, actual) => {
            const manyTimes = actual.Name.search(/\d|à vista/);
            const name = actual.Name.slice(0, manyTimes > -1 ? manyTimes : Number.MAX_VALUE).trim();
            const group = acumulator.find(x => x && x.type == name);

            if (group && group.installments) {
                group.installments.push(actual)
            } else if (group) {
                group.installments = [actual];
            } else {
                const newGroup = {
                    type: name,
                    installments: [actual]
                }
                acumulator.push(newGroup)
            }

            return acumulator;
        }, []);
    }

    mountInterestRate(arr, item) {

        const group = this.groupInstallments(arr);
        const card = this.extractCard(group, item);
        const masterCard = group.filter( card => card.type == "Mastercard");
        const elo = group.filter( card => card.type == "Elo");

        const creditCard = masterCard.length ? masterCard : elo;

        return Array.isArray(card.installments) && card.installments.map((item, index) => {


            return (
                <li key={index}>
                    <span className="see_installments--value">
                        {item.NumberOfInstallments}x {index == 0 ? GetDataUtils.formatarMoeda(creditCard[0].installments[0].Value) : GetDataUtils.formatarMoeda(item.Value) + " "}&nbsp;<span className="interestRate">{item.InterestRate === 0 ? "s/ juros" : ""}</span>
                    </span>
                    <span className="see_installments--total">
                        {"Total: "}
                        {index == 0 ? GetDataUtils.formatarMoeda(creditCard[0].installments[0].TotalValuePlusInterestRate) : GetDataUtils.formatarMoeda(
                            item.TotalValuePlusInterestRate
                        )}
                    </span>
                </li>
            );
        });
    };

    extractCard(group, item) {
        if(item == 0) {
            return group && group.find(group => group.type == 'Mastercard' || group.type == 'Elo') || group[0] || { installments: [] };
        }
        return group && group.find(group => group.type == 'Cartão Brastemp') || group[0] || { installments: [] };
    }
}
