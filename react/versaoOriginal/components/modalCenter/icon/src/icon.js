import React from 'react'; // importa react na classe
import './icon.global.css'; // importa arquivo css que sera utilizado na classe

const Icon = (props) => {
	return(
		<span className={'icon icon-' + props.name + ' ' + props.className} ></span>
	);
};

Icon.defaultProps = {
	icon      : 'alert',
	className : ''
};

export default Icon;