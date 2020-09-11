import GetProductsRelatedToPart from './productsRelatedToPart.graphql';
import {graphql} from 'react-apollo';

const ProductRelatedToPart = (componentClass, argLocation = props => props) => {
	return graphql(GetProductsRelatedToPart, {
		withRef: true,
		options: props => ({
			variables: {postType: 'produtos', ...argLocation(props)},
		}),
	})(componentClass);
};
export default ProductRelatedToPart;
