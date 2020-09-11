const removeAnchorLink = (component, link) => {
    let { widgetsToAnchor } = component.state;
    let index = widgetsToAnchor.findIndex(item => item.title == link.title)

    if (index >= 0) {
        widgetsToAnchor = widgetsToAnchor.filter(item => item.title !== link.title)
        component.setState({ widgetsToAnchor })
    }
}

export default removeAnchorLink;
