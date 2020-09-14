import React, { Component } from "react";
//components
import './header-footer.global.css';

class Vitrine extends React.Component {
    
      render() {
        return (
            <div id="header_footer" className={`${this.props.propsClass}`}>

                <img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/logo-brastemp.png" />
                
            </div>
        );
      }

}
export default Vitrine;