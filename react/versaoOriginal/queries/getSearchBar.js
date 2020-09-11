import getSearchBar from './getSearchBar.graphql'
import {graphql} from 'react-apollo'

const getSearchResultData = ( componentClass,argLocation= (props)=>props) => {
  return graphql(getSearchBar,{
      options : (props) => ({variables: {search: props.search}})
  })(componentClass)
}

export default getSearchResultData;

