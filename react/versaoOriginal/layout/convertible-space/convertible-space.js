import React from 'react';
//components
import Title from '../../components/title/title';
import './convertible-space.global.css';

class ConvertibleSpace extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			value: 0
		}
	}
    
    handleChange = (event) => {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }
    render() {
        return (
            <div id="convertible-space" className={`convertible-space  ${this.state.value < 110 ? "vinhos" : ""} ${this.state.value > 110 && this.state.value < 260 ? "frutas-vegetais" : "" } ${this.state.value > 260 && this.state.value < 550 ? "carnes-peixes" : "" } ${this.state.value > 550 && this.state.value < 740 ? "congelamento-suave" : "" } ${this.state.value > 740 && this.state.value < 920 ? "congelamento-medio" : "" } ${this.state.value > 920 ? "congelamento-intenso" : "" } `}>

                <Title setClass="center" textMF="Convertible Space" textDF="Convertible Space"/>

                <p>Compartimento com controle independente <br className="mobile"></br> de <br className="desktop"></br> temperatura, você escolhe entre freezer ou <br className="mobile"></br><br className="desktop"></br> refrigerador com mais de 12 opções de <br className="mobile"></br><br className="desktop"></br> temperatura</p>

                <div className="line-chose">

                    <div className="line-text">
                        <h3>MODO<br></br>REFRIGERADOR</h3>
                        <p className={`${this.state.value < 110 ? "active" : "" }`}>10°C</p>
                        <p className={`${this.state.value > 110 && this.state.value < 260   ? "active" : "" }`}>4°C</p>
                        <p className={`${this.state.value > 260 && this.state.value < 550 ? "active" : "" }`}>0°C</p>
                        <h3>MODO<br></br>FREEZER</h3>
                        <p className={`${this.state.value > 550 && this.state.value < 740 ? "active" : "" }`}>-7°C</p>
                        <p className={`${this.state.value > 740 && this.state.value < 920 ? "active" : "" }`}>-12°C</p>
                        <p className={`${this.state.value > 920 ? "active" : "" }`}>-16°C a<br></br>22°C</p>
                    </div>

                    <div className="line-text-index">
                        <p className={`${this.state.value < 110 ? "active" : "" }`}>Vinhos e <br></br>cervejas artesanais</p>
                        <p className={`${this.state.value > 110 && this.state.value < 260   ? "active" : "" }`}>Frutas e <br></br> vegetais</p>
                        <p className={`${this.state.value > 260 && this.state.value < 550 ? "active" : "" }`}>Carnes e <br></br> peixes</p>
                        <p className={`${this.state.value > 550 && this.state.value < 740 ? "active" : "" }`}>Congelamento <br></br> suave</p>
                        <p className={`${this.state.value > 740 && this.state.value < 920 ? "active" : "" }`}>Congelamento <br></br> médio</p>
                        <p className={`${this.state.value > 920 ? "active" : "" }`}>Congelamento <br></br> intenso</p>
                    </div>

                    <input 
                    className="slider"
                    type="range" 
                    min="0" max="1000" 
                    value={this.state.value} 
                    onChange={this.handleChange}
                    data-orientation="vertical"
                    step="1"/>

                </div>

            </div>
        )
    }
}
export default ConvertibleSpace;