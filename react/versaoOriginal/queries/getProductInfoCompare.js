import getProductInfoCompare from './getAtributosComparador.graphql'
import {graphql} from 'react-apollo'
 const getProductInfoCompareData = ( componentClass,argLocation= (props)=>props) => {
  return graphql(getProductInfoCompare,{
      withRef:true,
      options: (props) => ({variables: argLocation(props)})
  })(componentClass)
}
 export default getProductInfoCompareData; 