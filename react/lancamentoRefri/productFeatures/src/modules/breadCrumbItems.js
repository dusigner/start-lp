import deparCategoryList from './deparCategoryList';

const breadcrumbItems = (component) => {
    const { productVtex } = component.props;
    const { product } = component.state;

    let categoryObj = component.props.categories ? deparCategoryList(component.props.categories) : "";

    let items = [];

    if (!product.layout || product.layout === 'parts') {
        items = [
            {
                label: product.categoria.name || "Peças de reposição",
                href: "/pecas-de-reposicao/d"
            },
            {
                label: product.name || productVtex.items[0].nameComplete,
                page: "store/product",
                param: ""
            }
        ];

        return items;
    }

    items = [
        categoryObj,
        {
            'label': productVtex.items[0].nameComplete,
            'page': 'store/product',
            "param": ''
        }
    ]
    return items;
};

const getBreadCumbItems = (self, parent) => {
    const items = breadcrumbItems(self);

    if (parent) {
        if (JSON.stringify(parent.state.breadcrumbItems) != JSON.stringify(items)) {
            parent.setState({ breadcrumbItems: items });
        }
    }

    return items;
}

export { getBreadCumbItems };
export default breadcrumbItems;
