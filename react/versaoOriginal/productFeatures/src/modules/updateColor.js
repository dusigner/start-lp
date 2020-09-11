const updateColor = (component, o) => {
    component.setState({
        colorAtive: o.colorId,
        imageHero: this.state.product.images[o.colorId].urlImageHero != null ? this.state.product.images[o.colorId].urlImageHero : null,
        image: this.state.product.images[o.colorId].urlImage != null ? this.state.product.images[o.colorId].urlImage : null,
        modelActive: o.colorModel
    })
}

export default  updateColor;