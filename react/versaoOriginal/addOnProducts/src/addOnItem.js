import React, { Component } from "react";
import { GetDataUtils } from "brastemp.components";
import AddOnItemPrice from "./addOnItemPrice"

class addOnItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selected: false
        }
    }

    handleSelect = () => {
        this.setState({ selected: !this.state.selected })
    }

    render() {
        const { item, data, type } = this.props
        const { getSearchByProduct } = data;

        const productItem = getSearchByProduct ? getSearchByProduct[0] : null;
        
        return productItem ? (
            <>
                <div className="add_on--item">
                    <img className={`add_on_item--image ${!item || item.loading ? "loading" : "" }`} src={productItem.items[0].images[0].imageUrl} />
                    <label className={`add_on_item--container ${ !item || !item.available ? "disabled" : "" }`} >
                        <input type="checkbox" className="add_on_item--checkbox_input" checked={this.state.selected} onChange={this.handleSelect} />
                        <span className="add_on_item--checkmark" />
                    </label>
                    <div className="add_on_item--productInfo">
                        <span className={`add_on_item--productName${!item || item.loading ? "loading" : "" } `}>{productItem.productName}</span>                        
                        <AddOnItemPrice slug={data.getSearchByProduct[0].linkText}  addProduct={this.props.addProduct} item={this.props.item} selected={this.state.selected} type={type}/>
                    </div>
                </div>
                <hr className="add_on_item--bottomLine"/>
            </>
        ) : <></>;
    }
}

export default GetDataUtils.searchByProduct(addOnItem, props => ({
    sku: props.sku ? `?fq=alternateIds_RefId:${props.sku}` : ""
}));
