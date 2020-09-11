import LayoutData from './LayoutData';

export {
    LayoutData
}

export const handleColorChange = (component, colorIdx) => {
    component.state.selectedColorIdx = colorIdx;
}



export const getChaordicQuery = () => {
    return GetDataUtils.getParamsRecomendacaoChaordicProduct() + `&name=product&productId=${this.props.productVtex.productId}`;
}

