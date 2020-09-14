import React, { Component } from 'react'
import { GetDataUtils } from "brastemp.components";


class addOnItemPrice extends Component {

    componentDidUpdate() {        

        const { data, item, selected, type } = this.props;
        const { loading } = data
        const product = !loading ? data.getSearchPrice[0].items[0] : null;
        
        if((!item && !!product) || ( item && product && selected !== item.selected )) {

            product.available = product.sellers.some(seller => seller.commertialOffer.AvailableQuantity > 0 )
            product.loading = loading;
            product.sellers = product.sellers.map(seller => {
                seller.addToCartLink = `&${seller.addToCartLink.split("add?")[1]}`
                return seller
            })
            product.selected = selected
            product.type = type

            this.props.addProduct( product )
        }
    }

    componentWillUnmount() {
        const product = this.props.data.getSearchPrice[0].items[0]
        product.selected = false
        this.props.addProduct( product )
    }

    render() {
        const { item } = this.props

        
        return item && item.available ? (
            <>
                <span className={`add_on_item--initialProductPrice`}>De {GetDataUtils.formatarMoeda(item.sellers[0].commertialOffer.ListPrice)}</span>
                <span className={`add_on_item--currentProductPrice ${this.props.data.loading ? "loading" : "" }`}>Por {GetDataUtils.formatarMoeda(item.sellers[0].commertialOffer.Price)}</span>  
            </>
        ) : (
            <span className={`add_on_item--unavailable ${this.props.data.loading ? "loading" : "" }`}>Indisponível</span>
        )
    }
}

export default GetDataUtils.searchProductPrice(addOnItemPrice, props => ({
    slug: props.slug || ""
}));