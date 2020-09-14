
import $ from '../../../components/dataTree/src/self';

const getColors = (component) => {
    const lista = $(component.state.product, "images", [])
    const colorsLink = lista.map((item, index) => {
        var colorItem = {
            colorId: item.id,
            colorDescription: item.colorDescription,
            color: item.color,
            colorModel: item.model,
            colorName: item.colorName,
            params: { "slug": item.slug },
            page: 'store/product',
        }
        return colorItem;
    })
    return colorsLink;
}

export default getColors