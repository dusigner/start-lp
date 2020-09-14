import React from "react";
import "./modal.css";
import PropTypes from "prop-types";



export default class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal" id="modal">
                <div className="modal-overlay" onClick={this.onClose}></div>
                <div className={`modal-wrap ${this.props.setClass}`}>

                    <div className="content">{this.props.children}</div>

                    <div className="btn-outline" onClick={this.onClose}>
                        
                        <div className="btn-outline__icon">
                            <i className="btn-outline__icon_type">
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
                                    <rect x="0.679153" y="0.210449" width="16.0101" height="0.960606" rx="0.480303" transform="rotate(45 0.679153 0.210449)" fill="#F08B1D"/>
                                    <rect x="-0.00012207" y="11.5312" width="16.0101" height="0.960606" rx="0.480303" transform="rotate(-45 -0.00012207 11.5312)" fill="#F08B1D"/>
                                </svg>
                            </i>
                        </div>
                        <span className="btn-outline__label">Fechar</span>
                    </div>

                </div>
            </div>
        );
    }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};