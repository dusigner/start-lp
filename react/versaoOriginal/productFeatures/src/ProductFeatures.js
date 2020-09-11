import React, { PureComponent } from 'react';
import MediaQuery from 'react-responsive';
import { injectIntl } from 'react-intl';
import ProductData from "../../../queries/ProductData";
import VisibilitySensor from 'react-visibility-sensor';
import cls from 'classnames';


import {
    Utils, 
    Breadcrumb,
    SupportMenu, 
    GetDataUtils,
    DropAnchorLinks,
    VideoComImagem
} from 'brastemp.components';
import {
    ProductDataSchema,
    addAnchorLink,
    getItemActive,
    getBreadCumbItems,
    hasProduct,
    updateColor,
    setVisibleWidget,
    hasWidget,
    getProductData,
    dispatchDataLayer,
    getFirstAvailableItem
} from './modules';
import StoredLinxData from "../../../../react/StoredLinxData";


import { ExtensionPoint } from 'render';

import { LayoutData } from './helper';

import $ from '../../../components/dataTree/src/self';

//Template G
import Cdn from '../../../components/cdn/src/cdn';
import dataEspecificacoes from '../../../content/produto-m/dataEspecificacoes.json';
import dataInstalacao from '../../../content/produto-m/dataInstalacao.json';
import CompreJunto from '../../compreJunto/src/CompreJunto';
import EspecificacoesTecnicas from '../../especificacoesTecnicas/src/EspecificacoesTecnicas';
import EspecificacoesTecnicasPecas from '../../especificacoesPecas/src/EspecificacoesPecas';
import FeatureInternalExternal from '../../featureInternalExternal/src/featureInternalExternal';
import HeroProduct from '../../heroProduct/src/HeroProduct';
import HeroProductVideo from '../../heroProductVideo/src/HeroProductVideo';
import Instalacao from  '../../instalacao/src/Instalacao';
import Killerfeature from '../../killerfeature/src/killerfeature';
import ModuloFeatures from '../../moduloFeatures/src/moduloFeatures';
import SaibaMais from '../../saibaMais/src/SaibaMais';
import SearchByProductShowCase from '../../../SearchByProductShowCase';
import UltimosVistos from '../../ultimosVistos/src/UltimosVistos';
import DiferenciaisExclusivosSlider from '../../diferenciaisExclusivosSlider/src/DiferenciaisExclusivosSlider';
import scrollToComponent from 'react-scroll-to-component';
import RedirectStore from '../../boxRedirectStore/src/boxRedirectStore';

const Desktop = props => <MediaQuery {...props} minWidth={1024} />;

class ProductFeatures extends PureComponent {
    
    constructor(props) {
        super(props) 

        this.state = {
			product: null,
            data: null,
            dataLayerPushed: false,
            loading: true,
            productInfo: null,
            purchaseModules: false,
            widgetsToAnchor: this.props.widgetsToAnchor,
            containment: document.body
        }
    }

    componentDidUpdate() {
        const { data, productQuery, params } = this.props;
        const { loading, product, dataLayerPushed } = this.state;
        
        if(product && !dataLayerPushed) {
            dispatchDataLayer(this);
            StoredLinxData.dispatch();
        }
        
        if( data && !data.loading && !productQuery.loading && loading ) {
            
            this.setState({
                loading: false,
                data: data, // usar esses apenas como analises, caso necessario passe o valor para o atributo produto
                productInfo: Utils.dataTree(data, "getProductInfo[0]", null), // usar esses apenas como analises, caso necessario passe o valor para o atributo produto
                product: ProductDataSchema(data, productQuery, params)
            }, () => {                
                this.props.parent.setState({ layout: this.state.product.layout });
                this.pageLinxMeta();
            })
        }        
    }

    getChaordicQuery = () => {
        let { productUrlItems, productVtex } = this.props.parent.state
        productVtex = productVtex || ( productUrlItems.items ? productUrlItems.items[0] : null);
        return GetDataUtils.getParamsRecomendacaoChaordicProduct() + `&name=product&productId=${productVtex.productId}`;
    }
    
    goToForm = e => {
        e && e.preventDefault();

        scrollToComponent(this.refs["modulo-features"], { offset: 0, align: 'top', duration: 600, ease: 'linear' });
    }

    componentDidMount() {
        
        setVisibleWidget( 0, this.props.parent);
    }
    
    pageLinxMeta = () => {
        const { productVtex } = this.props
        const available = getFirstAvailableItem(productVtex.items);
        const item = available || productVtex.items[0];
        const offer = item.sellers[0].commertialOffer
        const installments = GetDataUtils.prepareInstallments(offer.Installments);
        
        const DataLinxObj = {
            page: "product",
            pid: productVtex.productId,
            sku: item.itemId,
            price: offer.PriceWithoutDiscount,
            oldPrice: offer.ListPrice,
        }
        
        if(installments) {
            DataLinxObj.installment = {
                count : installments.NumberOfInstallments,
                price : installments.Value
            }
        }
        
		StoredLinxData.init(DataLinxObj);
    }

    renderModuloFeatures = () => {
        const { parent } = this.props
        const { product } = this.state
        const { layout } = product

        return (
            <ModuloFeatures ref="modulo-features" bgColor={layout === "g-black" ? "black" : "white"}>
            {hasWidget( this.state.product.layout, 'external', this) &&
                <FeatureInternalExternal
                    type={'external'}
                    parent={parent}
                    data={this.state.product.features.external}
                    productImageURL={Cdn(this.state.product.images[0].urlImage, 'cover', '830x500')}
                    listTitle={this.state.product.features.external.listName}
                    ref={el => addAnchorLink(this, {id: 3.1, title: 'Visão Externa', elm: () => el })}
                    setVisibleWidget={() => setVisibleWidget(3.1, parent)}
                    widgetNumber={2}
                />
            }
            {hasWidget( this.state.product.layout, 'killer', this) &&
                <Killerfeature
                    parent={parent}
                    listTitle={this.state.product.highlightsListName}
                    produto={this.state.product}
                    setVisibleWidget={() => setVisibleWidget(3.2, parent)}
                    ref={el => addAnchorLink(this, {id: 3.2, title: this.state.product.highlightsTitle, elm: () => el })}
                    widgetNumber={3}
                />
            }
            {hasWidget( this.state.product.layout, 'internal', this) &&
                <FeatureInternalExternal
                    parent={parent}
                    type={'internal'}
                    data={this.state.product.features.internal}
                    listTitle={this.state.product.features.internal.listName}
                    ref={el => addAnchorLink(this, {id: 3.3, title: 'Visão Interna', elm: () => el })}
                    setVisibleWidget={() => setVisibleWidget(3.3, parent)}
                    widgetNumber={4}
                />
            }
        </ModuloFeatures>
        )
    }

    getManual = () => {
        const { productVtex } = this.props
        let { manual } = productVtex
        let product = null
        
        if(!(/^[https?].*/).test(manual) && productVtex && productVtex.properties) {
            product = productVtex.properties.find(item => item.name === "Manual do Produto")
            manual = product ? product.values[0] : null;
        }

        return manual
    }

    render() {
        const { purchaseModules, product } = this.state;
        const layout = product ? product.layout : undefined;
        const { parent } = this.props;
        const video = $(product, "videos.video", null);
        const itemAtivo = getItemActive(this);
        
        let { productUrlItems, productVtex } = parent.state;
        
        productVtex = productVtex || ( productUrlItems.items ? productUrlItems.items[0] : this.props.productVtex.items[0]);
        return (
            <section className="productFeatures">
                {
                    this.props.data.getProductInfo &&  product && (
                    <>
                        <SupportMenu parent={parent}>
                            <Breadcrumb id="breadcrumb" breadcrumbItems={getBreadCumbItems(this, parent)} linksList={this.props.widgetsToAnchor} activeAnchor={parent.state.visibleWidget} parent={parent}/>
                            {(hasProduct(this) && productVtex) ? (
                            <RedirectStore
                                parent={parent}
                                productList = {this.props.parent.state.productList}
                                productVtex={productVtex}
                                productUrl={parent.productUrl}
                                productUrlItems={parent.productUrlItems}
                                productData={getProductData(this.props.categories)}
                                product={product}
                                items={productVtex.items}
                                properties={productVtex.properties || []}
                                linkText={productVtex.linkText}
                                addToCart={this.props.addToCart}
                                addonProductTag={this.props.addonProductTag}
                                displayModal={this.props.displayModal}
                                activeAnchor={parent.state.visibleWidget}  />
                            ) : <></>}
                            <div className={ cls("supportMenu_wrapper", {supportMenuBuyBox: parent.state.visibleWidget && parent.state.visibleWidget.id !== 0})}>                     
                                {this.props.widgetsToAnchor.length && <DropAnchorLinks activeAnchor={parent.state.visibleWidget} linksList={this.props.widgetsToAnchor} activeAnchor={parent.state.visibleWidget} topOffset={100} />}
                            </div>
                        </SupportMenu>
                        
                        {hasWidget(layout, 'hero', this) &&
                            <VisibilitySensor
                                scrollCheck={true}
                                partialVisibility={true}
                                offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                                onChange={visible => visible ? setVisibleWidget(2, parent) : null }>
                                        {LayoutData(layout, {
                                                parts: (
                                                    <></>
                                                ),
                                                pp: (
                                                    <HeroProduct produto={product}
                                                        ref={el => addAnchorLink(this, {id:2 , title: 'Introdução', elm: () => el })}
                                                        updateColor={o => updateColor(this, o)}
                                                        imageHero={ itemAtivo ? itemAtivo.urlImageHero : null}
                                                        model={ itemAtivo ? itemAtivo.model : null}
                                                        name={product.name}
                                                        categoria={product.categoria.name}
                                                    />
                                                ),
                                                m: (
                                                    <HeroProduct produto={product}
                                                        ref={el => addAnchorLink(this, {id:2, title: 'Introdução', elm: () => el })}
                                                        updateColor={o => updateColor(this, o)}
                                                        imageHero={ itemAtivo ? itemAtivo.urlImageHero : null}
                                                        model={ itemAtivo ? itemAtivo.model : null}
                                                        name={product.name}
                                                        categoria={product.categoria.name}
                                                    />
                                                ),
                                                default: (
                                                    <HeroProductVideo
                                                        bgColor={product.layout === "g-black" ? "black" : "white"}
                                                        categoria={product.categoria.name}
                                                        description={product.description}
                                                        model={product.modelSku}
                                                        name={product.name}
                                                        video={product.videos.heroShot}
                                                        imageHero={this.state.imageHero}
                                                        ref={el => addAnchorLink(this, {id:2 , title: 'Introdução', elm: () => el })}
                                                        goToForm={e => this.goToForm(e)}
                                                    />
                                                )
                                            }
                                        )}
                                        
                                </VisibilitySensor>
                        }

                        {hasWidget(layout, 'video', this) && video != null &&
                            <VisibilitySensor
                                scrollCheck={true}
                                partialVisibility={true}
                                offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                                onChange={visible => visible ? setVisibleWidget(3, parent) : null }>
                                <VideoComImagem
                                    ref={el => addAnchorLink(this, {id:3, title: 'Vídeo', elm: () => el })}
                                    comMargem={true}
                                    imagem={Cdn(product.videos.imagemVideo)}
                                    video={product.videos.video}
                                />
                            </VisibilitySensor>
                        }
                        
                        {LayoutData(layout, {
                                default: 
                                    hasWidget(layout, 'killer', this) &&
                                    <VisibilitySensor
                                        scrollCheck={true}
                                        partialVisibility={true}
                                        offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                                        onChange={visible => visible ? setVisibleWidget(4, parent) : null }>
                                        <DiferenciaisExclusivosSlider 
                                            pageKind={product.layout}
                                            produto={product}
                                            ref={el => addAnchorLink(this, {id: 4, title: 'Diferenciais Exclusivos', elm: () => el })}
                                            updateColor={o => updateColor(this, o)}
                                            image={ itemAtivo ? itemAtivo.urlImage : null} />
                                    </VisibilitySensor>,
                                parts: (<></>),
                                g: this.renderModuloFeatures(),
                                'g-black': this.renderModuloFeatures()
                        })}
                       
                        {hasWidget(layout, 'especificacoes', this) &&
                            <VisibilitySensor
                                scrollCheck={true}
                                partialVisibility={true}
                                offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                                onChange={visible => visible ? setVisibleWidget(1, parent) : null }>
                                        {LayoutData(layout, {
                                            parts: !!productVtex ? ( 
                                                <EspecificacoesTecnicasPecas 
                                                    product={productVtex} 
                                                    productVtex={productVtex.itemId}
                                                    produto={this.state.product}
                                                    properties={this.props.productVtex.properties || []}
                                                    ref={el => addAnchorLink(this, {id: 1, title: 'Especificações Técnicas', elm: () => el })} 
                                                />
                                            ) : <></>,                                          
                                            default: !!productVtex ? (
                                                <EspecificacoesTecnicas 
                                                    data={dataEspecificacoes} 
                                                    especificacoesTecnicas={product.especificacoesTecnicas} 
                                                    product={this.props.productVtex} 
                                                    productVtex={this.props.productVtex.itemId}
                                                    produto={product}
                                                    properties={this.props.productVtex.properties || []}
                                                    ref={el => addAnchorLink(this, {id: 1, title: 'Especificações Técnicas', elm: () => el })} 
                                                />
                                            ) : <></>,
                                        })}
                            </VisibilitySensor>
                        }                        
                        
                        { hasWidget(layout, 'instalacao', this) &&
                            <VisibilitySensor
                                scrollCheck={true}                            
                                partialVisibility={true}
                                offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                                onChange={visible => visible ? setVisibleWidget(5, parent) : null }>
                                        <Instalacao 
                                            ref={el => addAnchorLink(this, {id:5, title: 'Instação', elm: () => el })} 
                                            data={dataInstalacao} 
                                            showThis={product.statusInstalacao} />
                        </VisibilitySensor>
                        }

                        {hasWidget(layout, 'chaordic', this) && purchaseModules &&
                            <VisibilitySensor
                                scrollCheck={true}                            
                                partialVisibility={true}
                                offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                                onChange={visible => visible ? setVisibleWidget(6, parent) : null }>
                                <CompreJunto ref={el => addAnchorLink(this, {id:6, title: 'Compre Junto', elm: () => el })} queryVitrine={this.getChaordicQuery()} position="top" productVtex={productVtex} />
                            </VisibilitySensor>
                         }   

                        {hasWidget(layout, 'pecasAcessorios', this) && purchaseModules &&
                            <VisibilitySensor
                                scrollCheck={true}                            
                                partialVisibility={true}
                                offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                                onChange={visible => visible ? setVisibleWidget(7, parent) : null }>
                                <SearchByProductShowCase ref={el => addAnchorLink(this, {id:7, title: 'Peças e acessórios', elm: () => el })}
                                    title={"Conte conosco sempre que precisar"}
                                    description={"Peças e acessórios originais para a sua Brastemp."}
                                    numberCards={2}
                                    gridTemplateColumns={2}
                                    query={true}
                                    skus={product.partsAccessoriesSkus}
                                    button={true}
                                    buttonPage={"store/subcategory"}
                                    buttonParams={Utils.getSubCategoryParams(product.categoria)}
                                    buttonTitle={Utils.getButtonTitleModulePartsAccessories(this.props.product.categoria)}
                                    skuModel={true}
                                    price={false} />
                            </VisibilitySensor>
                        }

                        {hasWidget(layout, 'chaordic', this) && purchaseModules &&
                            <VisibilitySensor
                                scrollCheck={true}                            
                                partialVisibility={true}
                                offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                                onChange={visible => visible ? setVisibleWidget(8, parent) : null }>
                                <MaisComprados ref={el => addAnchorLink(this, {id:8, title: 'Mais Comprados', elm: () => el })} queryVitrine={this.getChaordicQuery()} position="top" />
                            </VisibilitySensor>
                        }

                        {hasWidget(layout, 'relacionados', this) && purchaseModules &&
                            <VisibilitySensor
                                scrollCheck={true}                            
                                partialVisibility={true}
                                offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                                onChange={visible => visible ? setVisibleWidget(9, parent) : null }>
                                <SearchByProductShowCase ref={el => addAnchorLink(this, {id:9, title: 'Produtos Relacionados', elm: () => el })}
                                    title={"Produtos relacionados"}
                                    description={"Separamos alguns produtos relacionados aos seus interesses."}
                                    query={false}
                                    listProducts={product.relatedProducts}
                                    skuModel={true}
                                    installmentPrice={false} />
                            </VisibilitySensor>
                        }

                        {hasWidget(layout, 'chaordic', this) && purchaseModules &&
                            <VisibilitySensor
                                scrollCheck={true}                            
                                partialVisibility={true}
                                offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                                onChange={visible => visible ? setVisibleWidget(10, parent) : null }>
                                <UltimosVistos ref={el => addAnchorLink(this, {id:10, title: 'Últimos Vistos', elm: () => el })} queryVitrine={this.getChaordicQuery()} position="bottom" />
                            </VisibilitySensor>
                        }

                        {hasWidget(layout, 'Produtos Compatíveis', this) &&
                            <VisibilitySensor
                                scrollCheck={true}
                                onChange={visible => visible ? setVisibleWidget(987, parent) : null }
                                partialVisibility={true}
                                offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                            >
                                <SearchByProductShowCase
                                    ref={el => addAnchorLink(this, {id:987, title: 'Produtos Compatíveis', elm: () => el })}
                                    title={"Produtos Compatíveis"}
                                    description={
                                        "Você pode verificar a compatibilidade desta peça com seu produto Brastemp pesquisando por nome ou código do produto."
                                    }
                                    numberCards={4}
                                    gridTemplateColumns={4}
                                    query={true}
                                    skus={product.compatibleModels}
                                    showButtonShowMore={true}
                                    widthButtonShowMore={"98%"}
                                    price={false}
                                    labelButtonShowMore={"Ver mais produtos"}
                                />
                            </VisibilitySensor>
                        }

                        {hasWidget(layout, 'Saiba Mais', this) &&
                            <VisibilitySensor
                                scrollCheck={true}
                                partialVisibility={true}
                                offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                                onChange={visible => visible ? setVisibleWidget(11, parent) : null }>
                                <SaibaMais
                                    layout={layout}
                                    manual={this.getManual()}
                                    documents={product.documentos ? product.documentos : null} 
                                    ref={el => addAnchorLink(this, {id:11, title: 'Saiba Mais', elm: () => el })}
                                />
                            </VisibilitySensor>
                        }

                        {hasWidget(layout, 'assEspWidget', this) &&
                            <VisibilitySensor
                                scrollCheck={true}
                                partialVisibility={true}
                                offset={{ bottom: parent.widgetOffset, top: parent.widgetOffset }}
                                onChange={visible => visible ? setVisibleWidget(12, parent) : null }>
                                <ExtensionPoint ref={el => addAnchorLink(this, {id:12, title: 'Assistência Técnica', elm: () => el })} id="cards-options" />
                            </VisibilitySensor>
                        }

                    </>
                    )
                }
            </section>
        )
    }
}

export default ProductData(injectIntl(ProductFeatures), (props) => ({tag: props.slug}));
