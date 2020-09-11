import React, { Component } from "react";
import "./addOnProducts.global.css";
import AddOnItem from "./addOnItem";
import cls from 'classnames';

const setPropSection = (root, index, props) => {
    if (!root.sections) root.sections = [];
    if (!root.sections[index]) root.sections[index] = {};

    Object.keys(props).map(prop => {
        root.sections[index][prop] = props[prop];
        return;
    });
};

class addOnProducts extends Component {
    constructor(props) {
        super(props);

        const properties = { visible: false };

        this.props.productVtex.properties.map(prop => {
            switch (prop.name) {
                case "título do grupo":
                    properties.groupTitle = prop.values[0];
                    break;
                case "título do texto":
                    properties.groupText = prop.values[0];
                    break;
                case "texto":
                    properties.text = prop.values[0];
                    break;
                case "seção 01 tipo":
                    if (prop.values[0])
                        setPropSection(properties, 0, { name: prop.values[0] });
                    break;
                case "seção 01 produtos":
                    if (prop.values[0])
                        setPropSection(properties, 0, {
                            products: prop.values[0].split(",")
                        });
                    break;
                case "seção 02 tipo":
                    if (prop.values[0])
                        setPropSection(properties, 1, { name: prop.values[0] });
                    break;
                case "seção 02 produtos":
                    if (prop.values[0])
                        setPropSection(properties, 1, {
                            products: prop.values[0].split(",")
                        });
                    break;
                case "seção 02 mensagens":
                    properties.message = prop.values[0];
                    break;
            }
            return;
        });

        properties.visible =
            properties.groupTitle &&
            properties.text &&
            properties.sections && properties.sections.length;

        this.state = {
            properties,
            type: null,
            products: []
        };
    }

    hasAddOn = () => this.state.properties.visible;

    getItem = sku => {
        const { products } = this.props
        return products.find(item => item.complementName === sku);
    }

    handleTypeChange = n => {
        this.setState({
            type: n
        });
    }

    handleVisible = product => {
        const { properties, type } = this.state
        const visible = properties.sections[type].products.findIndex(p => p === product) !== -1
        return visible
    }


    render() {
        const { properties, type } = this.state

        return this.hasAddOn() ? (
            <div id="addOnProducts" className="add_on">
                {properties.groupTitle ? <h3 className="add_on--title" id="add_on--title">{properties.groupTitle}</h3> : <></>}

                <div className={cls("add_on--type_group_header", {"only_label-child": properties.sections.length === 1 })}>
                    {properties.sections.map((section, n) => {
                        return (
                            <label key={n}
                            htmlFor={"type-" + n}
                            className="add_on--type_label" >
                                <span className="add_on--type_name">
                                    {section.name}
                                </span>
                                <input
                                    className="add_on--type_input"
                                    type="radio"
                                    id={"type-" + n}
                                    name="type"
                                    value={n}
                                    checked={n === type}
                                    onChange={() => this.handleTypeChange(n)}
                                />
                                <i className="add_on--type_bullet" />
                                <span className="add_on--type_bullet">
                                </span>
                            </label>
                        );
                    })}
                </div>
                <div className="add_on--type_group">
                    {type !== null && (
                        <div className="add_on--type_group_quiz">
                            {properties.groupText ? <span className="add_on--groupTitle">{properties.groupText}</span> : <></>}
                            {properties.text ? <span className="add_on--groupSubTitle">{properties.text}</span> : <></>}
                        </div>
                    )}
                    {type !== null &&
                        properties.sections[type].products.map(item => (
                            <AddOnItem sku={item} key={item} item={this.getItem(item)} addProduct={this.props.addProduct} visible={this.handleVisible(item)} type={type}/>
                        ))}
                </div>
            </div>
        ) : (
            <></>
        );
    }
}

export default addOnProducts;
