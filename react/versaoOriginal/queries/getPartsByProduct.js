import getPartsByProduct from './getPartsByProduct.graphql'
import {graphql} from 'react-apollo'
 const getPartsByProductData = ( componentClass,argLocation= (props)=>props) => {
  return graphql(getPartsByProduct,{
      withRef:true,
      options: (props) => ({variables: argLocation(props)})
  })(componentClass)
}
 export default getPartsByProductData; 