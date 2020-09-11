export default (o,k,defaultValue) =>{
    try{
        const value= Function('data',`return data.${k}`)(o) 
        return typeof value !== 'undefined' && value || defaultValue
    }catch(e){
        return defaultValue
    } 
}



