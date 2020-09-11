const getFirstAvailableItem = (items) => {
    const itemIndex = items.findIndex(item => item.sellers[0].commertialOffer.AvailableQuantity > 0);
    
    return itemIndex !== -1 ? items[itemIndex] : null;
}

export default getFirstAvailableItem;