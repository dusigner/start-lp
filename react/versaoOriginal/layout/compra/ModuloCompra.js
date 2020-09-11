import React, { Component } from "react";
import "./modulo-compra.global.css";
import "./selos.global.css";
import {
    Icon,
    GetDataUtils,
    WishListButton,
    PopBottomModal,
    FormValidation,
    InputCheck,
    InputText
} from "brastemp.components";
import AddOnProducts from "../../addOnProducts";
import ModuloCompraGaleria from "../../moduloCompraGaleria";
import ModuloCompraCartaoBratemp from "../../moduloCompraCartaoBratemp";
import {
    addAnchorLink,
    removeAnchorLink
} from "../../productFeatures/src/modules";
import SimuladorFrete from "../../simuladorFrete/src/simulador-frete";
import cls from "classnames";
import Preco from "./preco";
import Parcelas from "./parcelas/Parcelas";
import TituloProduto from "./tituloProduto/TituloProduto";
import { ExtensionPoint } from 'render';
import { Link } from 'render';
import { RegexHelper } from 'brastemp.components';

const initProduct = (props) => {
    const { query, items } = props;

    if (Object.keys(query).length != 0) {
        const { idsku = null } = query;

        let item = null;

        if (idsku && idsku != null) {
            const itemFilter = items.filter((item) => {
                return item.itemId === idsku;
            });
            if (itemFilter.length != 0) {
                item = itemFilter[0];
            }
        }
        return item != null ? item : items[0];
    } else {
        const itemIndex = props.items.findIndex(
            (item) => item.sellers[0].commertialOffer.AvailableQuantity > 0
        );
        return itemIndex !== -1 ? props.items[itemIndex] : props.items[0];
    }
};

class moduloCompra extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: props.items[0],
            image: props.items[0].images[0].imageUrl,
            backgroundPosition: "0% 0%",
            addCart: props.productUrlItems ? props.productUrlItems[0] : null,
            wishListWidget: {
                isInCustomerWishList: false,
                openModal: false,
                form: {
                    checkTerms: false,
                    email: ''
                },
                formError: {},
                isTermsAccept: true
            }
        };

        this.commertialOffer = null;
        this.addToCartLink = null;
    }

    componentDidMount = () => {
        let { product } = this.state;
        const { parent } = this.props;


        product =
            this.props.items.length > 1 ? initProduct(this.props) : product;

        this.setState({
            product: product,
            image: this.props.items[0].images[0].imageUrl,
            urlUnit: window.location.href,
        });

        this.props.parent.setState({ chosenVoltage: product.name });
    };

    componentDidUpdate = () => {
        let newState = {};
        let isRendered = false;

        if (
            !this.props.rendered
            && this.commertialOffer
            && this.commertialOffer.Teasers
        ) {
            isRendered = true;
        }

        if (
            !this.state.addCart &&
            this.props.productUrlItems &&
            this.props.productUrlItems[0]
        ) {
            newState.addCart = this.props.productUrlItems[0];
        }

        if (!this.props.rendered && isRendered)
            this.setState(newState, () =>
                this.props.handleRendered(isRendered)
            );
    };

    setProduct = (product) => {
        let { query } = this.props;
        if (Object.keys(query).length != 0) {
            if (query.idsku) {
                query.idsku = product.itemId;
            } else {
                query = { idsku: product.itemId, ...query };
            }
        } else {
            query = { idsku: product.itemId };
        }

        let utmi = null;

        const entries = Object.entries(query);

        entries.map((item) => {
            if (utmi != null) {
                utmi = utmi + "&" + item[0] + "=" + item[1];
            } else {
                utmi = "?" + item[0] + "=" + item[1];
            }
        });

        window.history.pushState("", "", `${utmi}`);

        product &&
            this.setState({
                product,
                image: product.images[0].imageUrl,
            });
    };

    selectVoltage = (product) => {
        const { parent, items } = this.props;
        const name = product.name;

        return (
            <div className="voltagem">
                {items.map((item, index) => {
                    return (
                        <div key={item.name}>
                            <input
                                checked={
                                    item.name == name
                                        ? true
                                        : false
                                }
                                type="radio"
                                id={`${item.name}`}
                                name="voltage"
                                className={cls("voltage", {
                                    active:
                                        item.name == name
                                })}
                                onClick={() => {
                                    this.setProduct(item),
                                        this.props.onClick(
                                            this.props.productUrlItems[index]
                                        ),
                                        this.setState({ confirmVoltage: true }),
                                        parent.setState({
                                            chosenVoltage: item.name,
                                        });
                                }}
                                key={index}
                            />
                            <label htmlFor={`${item.name}`}>{item.name}</label>
                        </div>
                    );
                })}
            </div>
        );
    };

    numberInstallments = (data) => {
        const installments = GetDataUtils.prepareInstallmentsWithoutBrastemp(data);

        if (installments) {
            return (
                <span>
                    {installments.NumberOfInstallments}x de{" "}
                    {GetDataUtils.formatarMoeda(installments.Value)}
                </span>
            );
        }
    };

    offPrice = (price, percent_off) => {
        percent_off = (percent_off || 5) / 100;

        return price - price * percent_off;
    };

    handleAddOnProduct = (product) => {
        const { productList } = this.props.parent.state;
        const index = productList.findIndex(
            (item) => item.complementName === product.complementName
        );

        if (index == -1) {
            productList.push(product);
        } else {
            productList[index] = {
                ...productList[index],
                ...product,
            };
        }
        this.props.parent.setState({ productList });
    };

    getTeasers(data, product) {
        const item = data
            && data.getSearchPrice
            && data.getSearchPrice[0].items
                .find(x => x.itemId == product.itemId);

        return item
            && item.sellers
            && item.sellers[0]
            && item.sellers[0].commertialOffer
            && item.sellers[0].commertialOffer.Teasers;
    }

    submitWishListForm = (e, isValid, formError) => {
        const {
            wishListWidget: {
                form: {
                    checkTerms,
                    email
                }
            }
        } = this.state;

        if (!isValid || !checkTerms) {
            this.setState({
                wishListWidget: {
                    ...this.state.wishListWidget,
                    formError,
                    isTermsAccept: checkTerms
                }
            });
        } else {
            dataLayer.push({
                event: 'generic-event-trigger',
                category: 'Pagina de Produto',
                action: 'Favoritos ',
                label: 'Enviar email '
            })

            this.setState({
                wishListWidget: {
                    ...this.state.wishListWidget,
                    isInCustomerWishList: true
                }
            });
        }
    }

    handleInputsChange = (type, e) => {
        let form = {};

        if (type === 'input') {
            form = {
                ...this.state.wishListWidget.form,
                email: e.target.value.toLowerCase()
            }
        } else {
            dataLayer.push({
                event: 'generic-event-trigger',
                category: 'Pagina de Produto',
                action: 'Favoritos ',
                label: 'Termo e Condicoes '
            })

            form = {
                ...this.state.wishListWidget.form,
                checkTerms: e
            }
        }

        this.setState({
            wishListWidget: {
                ...this.state.wishListWidget,
                form
            }
        });
    }

    renderModalTexts = (isInCustomerWishList) => {
        if (!isInCustomerWishList) {
            return (
                <div className={'wishlist-modal__texts'}>
                    <Icon name="fav" />
                    <h5>Que bom que gostou!</h5>
                    <p>Para salvarmos o seu produto, só preciso que você me informe o seu e-mail abaixo:</p>
                </div>
            )
        }

        const {
            wishListWidget: {
                form: { email }
            }
        } = this.state;

        return (
            <div className={'wishlist-modal__texts'}>
                <Icon name="fav-full" />
                <h5>Produto Salvo!</h5>
                <p>Seus produtos foram salvos em sua conta, <span>{email}</span>.</p>
            </div>
        )
    }

    renderModalForm = () => {
        const {
            wishListWidget: {
                form: {
                    checkTerms,
                    email
                },
                formError,
                isTermsAccept
            }
        } = this.state;

        return (
            <div className={'wishlist-modal__form'}>
                <FormValidation onSubmit={this.submitWishListForm}>
                    <label className={'wishlist-modal__form__label'} htmlFor="email">E-mail</label>
                    <div className="wishlist-modal__form__submit">
                        <InputText
                            isLabel={false}
                            placeholder={'Ex.: meu.nome@email.com'}
                            className={`input-text`}
                            data-validation="required email"
                            data-msg={email === '' ? 'Campo obrigatório' : 'E-mail inválido'}
                            id="email"
                            name="email"
                            type="text"
                            value={email}
                            hasError={formError}
                            onChange={e => this.handleInputsChange('input', e)}
                        />

                        <button
                            type="submit"
                            className="button primario comprar"
                        >
                            Salvar
                            <Icon name="arrow" />
                        </button>
                    </div>
                    <div className="wishlist-modal__form__check">
                        <InputCheck
                            label={'Li e concordo com as'}
                            data-validation="required"
                            id="aceite"
                            onClick={e => this.handleInputsChange('check', e)}
                            checked={checkTerms}
                        />
                        <a href="/politica-de-privacidade" target="_blank">Politicas de Privacidade</a>
                        {!isTermsAccept && <span className="input__error-message">Campo obrigatório</span>}
                    </div>
                </FormValidation>
            </div>
        )
    }

    renderModalFeedback = () => {
        return (
            <div className={'wishlist-modal__feedback'}>
                <p>Continue navegando em nossa loja.</p>
                <span onClick={() => this.closeModal(true)}>Fechar</span>
            </div>
        )
    }

    renderWishListModal = () => {
        const {
            wishListWidget: {
                isInCustomerWishList,
                openModal
            }
        } = this.state;

        return (
            <PopBottomModal isOpen={openModal} onCloseFn={this.closeModal}>
                <div className={'wishlist-modal'}>
                    {this.renderModalTexts(isInCustomerWishList)}

                    {!isInCustomerWishList ? this.renderModalForm() : this.renderModalFeedback()}
                </div>
            </PopBottomModal>
        )
    }

    handleWishListBtn = isChecked => {
        const { product : { complementName } } = this.state;
        
        if( isChecked ) {
            
            dataLayer.push({
                event: 'generic-event-trigger',
                category: 'Pagina de Produto',
                action: 'Favoritos ',
                label: `desfavoritou - ${complementName} `
            })

            this.setState({
                wishListWidget: {
                    ...this.state.wishListWidget,
                    isInCustomerWishList: false,
                    openModal: false
                }
            });
        } else {
            dataLayer.push({
                event: 'generic-event-trigger',
                category: 'Pagina de Produto',
                action: 'Favoritos ',
                label: `favoritou - ${complementName} `
            })

            this.setState({
                wishListWidget: {
                    ...this.state.wishListWidget,
                    openModal: true
                }
            })
        }
    }

    closeModal = (isText) => {
        if (isText) {
            dataLayer.push({
                event: 'generic-event-trigger',
                category: 'Pagina de Produto',
                action: 'Favoritos ',
                label: 'Fechar modal email - texto Fechar '
            });
        } else {
            dataLayer.push({
                event: 'generic-event-trigger',
                category: 'Pagina de Produto',
                action: 'Favoritos ',
                label: 'Fechar modal email '
            })
        }

        this.setState({
            wishListWidget: {
                ...this.state.wishListWidget,
                openModal: false,
                form: {
                    checkTerms: false,
                    email: ''
                },
                formError: {},
                isTermsAccept: true
            }
        });
    }

    renderWishListButton = () => {
        const { wishListWidget: { isInCustomerWishList } } = this.state;

        return (
            <>
                <WishListButton isInCustomerWishList={isInCustomerWishList} onClickFn={this.handleWishListBtn} />
                {this.renderWishListModal()}
            </>
        )
    }

    render() {
        const { categories, properties, parent, data } = this.props;
        const product = parent.state.productVtex ? parent.state.productVtex : this.state.product;

        const cetegoryObj = (parent.state.breadcrumbItems && parent.state.breadcrumbItems[0]) || {};

        const teasers = this.getTeasers(data, product);

        if (product) {
            this.commertialOffer = product.sellers[0].commertialOffer;
            this.commertialOffer.Teasers = teasers;
            this.addToCartLink = this.props.productUrl.addToCartLink;

            if (!parent.state.commertialOffer && this.commertialOffer.Teasers) {
                parent.setState({ commertialOffer: this.commertialOffer })
            }
        }

        const voltagemValue =
            product &&
                categories &&
                categories[2] !== "/Peças de Reposição/"
                ? product.name
                : undefined;

        const layoutWithoutVoltage = ["parts", null];
        try {
            const { data, loading, layout, parent } = this.props;
            const isTemplatePP = layout === "pp";

            return (
                <section
                    ref={(el) => {
                        if (layout) {
                            if (isTemplatePP) {
                                removeAnchorLink(parent, { title: "Comprar" });
                            } else {
                                addAnchorLink(
                                    parent,
                                    { id: 0, title: "Comprar", elm: () => el },
                                    true
                                );
                            }
                        }
                    }}
                    className={cls("purchase-module l-container", {
                        rendered: this.props.rendered,
                        hidden: isTemplatePP,
                    })}
                >
                    {
                        (
                            RegexHelper.mobileAndTabletCheck() == 'mobile' ||
                            window.outerWidth <= 768
                        ) && <>
                            <TituloProduto {...this.props} product={product} />
                            {this.renderWishListButton()}
                        </>
                    }

                    <ModuloCompraGaleria
                        items={this.props.items}
                        properties={properties}
                        product={product}
                        data={data}
                        loading={loading}
                        slug={this.props.slug}
                        parent={parent}
                    />

                    <div className={`description`}>
                        {
                            product &&
                            (
                                RegexHelper.mobileAndTabletCheck() == 'desktop' ||
                                window.outerWidth > 768
                            ) &&
                            <TituloProduto {...this.props} product={product} />
                        }

                        {product &&
                            this.commertialOffer.AvailableQuantity > 0 &&
                            this.commertialOffer.Price > 0 ? (
                                <>
                                    <div className="price">
                                        <div className="price_box-padding">
                                            <Preco
                                                component={this}
                                                commertialOffer={this.commertialOffer}
                                            />

                                            <div className="price_stamps">
                                                <ExtensionPoint id='stampsPdp' {...this.props} />
                                            </div>

                                            <div className="price_separetor"></div>

                                            <ModuloCompraCartaoBratemp
                                                cartaoBrastemp={this.props.cartaoBrastemp}
                                            />
                                        </div>

                                        <Parcelas commertialOffer={this.commertialOffer} />
                                    </div>

                                    <AddOnProducts
                                        productVtex={this.props.productVtex}
                                        products={
                                            this.props.parent.state.productList
                                        }
                                        addProduct={this.handleAddOnProduct}
                                    />

                                    <div className="voltage-buy-holder">
                                        {categories && !layoutWithoutVoltage.includes(layout) && (
                                            <div className="voltagens">
                                                <label className="voltagens_label">
                                                    Voltagem:
                                                </label>
                                                {this.addToCartLink && this.selectVoltage(product)}
                                            </div>
                                        )}

                                        <div className="buy">
                                            <button
                                                onClick={() => {
                                                    this.props.displayModal(
                                                        this.addToCartLink
                                                    );
                                                }}
                                                className="button primario grande comprar"
                                            >
                                                Comprar
                                                <Icon name="arrow" />
                                            </button>
                                        </div>
                                    </div>

                                    <SimuladorFrete
                                        sellerId={this.props.items[0].sellers[0].sellerId}
                                        itemId={this.state.product.itemId}
                                    />
                                </>
                            ) : (
                                <div className="notfound">
                                    <h5 className="notfound--header">Produto temporariamente indisponível</h5>
                                    <div className="notfound--content">
                                        <p className="notfound--text">
                                            Consulte nossos especialistas de Televendas para mais informações sobre o produto.
                                        </p>
                                        <p className="notfound--fone">
                                            <svg className="notfound--fone_icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.36 1.33333C2.4 1.92667 2.5 2.50667 2.66 3.06L1.86 3.86C1.58667 3.06 1.41333 2.21333 1.35333 1.33333H2.36ZM8.93333 9.34667C9.5 9.50667 10.08 9.60667 10.6667 9.64667V10.64C9.78667 10.58 8.94 10.4067 8.13333 10.14L8.93333 9.34667ZM3 0H0.666667C0.3 0 0 0.3 0 0.666667C0 6.92667 5.07333 12 11.3333 12C11.7 12 12 11.7 12 11.3333V9.00667C12 8.64 11.7 8.34 11.3333 8.34C10.5067 8.34 9.7 8.20667 8.95333 7.96C8.88667 7.93333 8.81333 7.92667 8.74667 7.92667C8.57333 7.92667 8.40667 7.99333 8.27333 8.12L6.80667 9.58667C4.92 8.62 3.37333 7.08 2.41333 5.19333L3.88 3.72667C4.06667 3.54 4.12 3.28 4.04667 3.04667C3.8 2.3 3.66667 1.5 3.66667 0.666667C3.66667 0.3 3.36667 0 3 0Z" fill="#242424" />
                                            </svg>

                                            Televendas: 3003-0099
                                        </p>
                                        <p className="notfound--link" >
                                            <Link page={cetegoryObj.page} onClick={() => this.dispatchDataLayer()} params={cetegoryObj.params} to={cetegoryObj.href}>
                                                Ver produtos similares
                                            <Icon name="arrow" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            )}

                    </div>
                </section>
            );
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    dispatchDataLayer() {

        dataLayer.push({
            event: 'generic-event-trigger',
            category: 'Pagina de Produto',
            action: 'Produto Indisponivel - Ver similares',
            label: this.props.productQuery &&
                this.props.productQuery.product &&
                this.props.productQuery.product.productReference
        });

    }


}

export default GetDataUtils.searchProductPrice(moduloCompra, (props) => ({
    slug: props.slug || "",
}));
