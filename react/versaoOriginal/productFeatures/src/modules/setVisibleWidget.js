
const setVisibleWidget = (widget, component) => {
    const widgets = component.state.widgetsToAnchor
    const visibleWidget = widgets.find(e => e.id === widget);
    component.setState({ visibleWidget })
}


export default setVisibleWidget;