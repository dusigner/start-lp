const LayoutData = (layout, object) => {
    if(layout == null) return object['parts']
    
    if(object.hasOwnProperty(layout)) return   object[layout]
        return object.default;

}

export default LayoutData;
