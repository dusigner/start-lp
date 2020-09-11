import setVisibleWidget from "./setVisibleWidget.js";

const addAnchorLink = (component, link, begin) => {
    const {widgetsToAnchor} = component.state;
    const index = widgetsToAnchor.findIndex( item => item.title == link.title)
    if(index < 0) {
        if (begin) {
            widgetsToAnchor.unshift(link)
            setVisibleWidget( 0, component);
        } else {
            widgetsToAnchor.push(link)
        }
        component.setState({widgetsToAnchor})
    }
}

export default addAnchorLink
