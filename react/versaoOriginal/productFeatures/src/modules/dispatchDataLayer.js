import { LayoutData } from '../helper';
import getProductData from "./getProductData";
import { GetProductUtils } from 'brastemp.components';

const dispatchDataLayer = component => {
    const { name, categoria, layout, description } = component.state.product;
    const { itemId, value, productReference } = component.props.productVtex;
    const { categories, parent: { productUrl } } = component.props
    if (!productUrl) return
    GetProductUtils.dispatchDataLayer(
        'virtualPageview',
        `produto/${productReference}`,
        'product',
        'BRL',
        productReference,
        itemId,
        LayoutData(layout, {
            parts: description,
            default: name,
        }),
        'Brastemp',
        undefined,
        undefined,
        !!value,
        LayoutData(layout, {
            pp: undefined,
            default: productUrl.commertialOffer.Price,
        }),
        LayoutData(layout, {
            pp: undefined,
            default: productUrl.commertialOffer.ListPrice,
        }),
        undefined,
        getProductData(categories) ? (getProductData(categories).categoryName || getProductData(categories).category)  : categoria.name,
        LayoutData(layout, {
            pp: 'Peças e Acessórios',
            default: 'Eletrodomésticos',
        }),
        undefined,
        undefined
    );

    component.setState({ dataLayerPushed: true })
}

export default dispatchDataLayer;