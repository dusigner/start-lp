import GetProductInfo from './GetProductInfo.graphql'
import {graphql} from 'react-apollo'

const ProductData = ( componentClass,argLocation= (props)=>props) => {
  return graphql(GetProductInfo,{
      withRef:true,
      options: (props) => ({variables: { postType:"produtos",...argLocation(props)}  })
  })(componentClass)
}
export default ProductData;
