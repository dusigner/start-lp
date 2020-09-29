import React from 'react';
//components
import './alert-jatenho.global.css';

class AlertJatenho extends React.Component {

    constructor(props) {
        super(props)
      }

    render() {
        return (
            <div className="alert__jatenho">
                <div className="alert__jatenho-wrap">
                    <div className="alert__jatenho-content">
                        <div>
                            <h6>Já tem essa geladeira?</h6>
                            <p >Receba <strong>dicas</strong>, <strong>receitas</strong> e outros <strong>conteúdos especiais!</strong></p>
                        </div>
                        <div>
                            <a className="button__tertiary" onClick= {this.props.handler} >Já tenho</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default AlertJatenho;