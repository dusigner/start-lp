const hasProduct = component => {

    const itemIndex = component.props.productVtex.items.findIndex((item, i) => {
        const availableItems = item.sellers.filter((seller, n) => {
            return seller.commertialOffer.AvailableQuantity > 0
        })
        return availableItems.length > 0
    }); 

    return itemIndex !== -1;
}

export default hasProduct;