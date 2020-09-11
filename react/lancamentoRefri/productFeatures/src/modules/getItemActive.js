import $ from '../../../components/dataTree/src/self';

const getItemActive = (component) => {
    const lista = $(component.state.product, "images", [])
    var skuProduto = $(component.props.productVtex, "productReference", null)
    var itemReturn = null

    lista.forEach(item => {
        if (item.model === skuProduto.toUpperCase()) {
            itemReturn = item;
        }
    });

    if (itemReturn === null) {
        itemReturn = lista[0];
    }

    return itemReturn;
}

export default getItemActive;