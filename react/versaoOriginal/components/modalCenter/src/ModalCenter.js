/*
    Jussi - Brastemp-next.
    Autor: Vinícius Pereira Zebral (vinicius.pereira@jussi.com.br).
    Data: 12/06/2018.
    Descrição: Component Modal - Classe.
*/

import React from 'react'; // importa react na classe
import properties from '../public/props.json';
import Icon from '../icon/src/icon';
import './modalCenter.global.css';

const ModalCenter = (props) => {

	const state = {
			event:props.event
		},
		style = {
			"modal":{
				"height":"100vh",
				"width":"100%",
				"position": "fixed",
				"left": "0",
				"zIndex":"6",
				"transition":"0.65s cubic-bezier(0, 0, 0.27, 0.76)",
				"overflow": "hidden"
			},
			"modalButton":{
				"position": "absolute",
				"width": "50px",
				"height": "50px",
				"transition":"visibility 0s linear 0.85s",
				"cursor":"pointer",
				"backgroundColor": "#000",
				"color":"var(--orange)",
				"border":"none",
				"display":"flex",
				"alignItems":"center",
				"justifyContent": "center",
				"padding": "0",
				"top": "130px"
			},
			"show":{
				"top": "0",
			},
			"hide":{
				"top": "100%",
			},
			"modalButtonShow":{
				"visibility":"visible",
				"opacity":"1"
			},
			"modalButtonHide":{
				"visibility":"hidden",
				"opacity":"0",
			}
		},
		sytleProps = {
			width: `${props.width}`,
			height: `${props.height}`,
			maxWidth: `${props.maxwidth}`,
			maxHeight: `${props.maxheight}`
		}

	return(
		<div
			id={props.id}
			className={`${props.className} ${state.event === 'show' ? ' modal--is-open' : ''}`}
			style={{...style.modal, ...state.event === 'show'? style.show : style.hide}}
		>
			<div className="modal-overlay" onClick={props.click}> </div>
			<button
				id='modal-button'
				className='btn-close-modal-center'
				type='button'
				style={{...style.modalButton, ...state.event === 'show'? style.modalButtonShow : style.modalButtonHide}}
				onClick={props.click}
			>
				<Icon name='fechar' />
			</button>
			<div className="modal-wrap" style={sytleProps}>
				<div className="modal-content">
					{props.children}
				</div>
			</div>
		</div>
	);
};

ModalCenter.defaultProps = properties;

export default ModalCenter;
