import React, {Component} from 'react';
import Slider from "react-slick";
//import './vitrine.global.css'


function SliderNextArrow(props) {
	const { onClick } = props;
	return (
	  	<div className="SliderNextArrow" onClick={onClick} >
			<svg width="37" height="33" viewBox="0 0 37 33" fill="none">
				<path d="M30.7749 16.3875L2 16.3874" stroke="#DB532A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M22.5533 28.7186L34.8854 16.3865L22.5533 4.05442" stroke="#DB532A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
	);
}
  
function SliderPrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="SliderPrevArrow" onClick={onClick} >
			<svg width="37" height="33" viewBox="0 0 37 33" fill="none">
				<path d="M6.1106 16.6126L34.8855 16.6125" stroke="#DB532A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M14.3322 4.28137L2.00005 16.6135L14.3322 28.9456" stroke="#DB532A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
	);
}

class VitrineSlider extends React.Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        
        return (
            <div>
            <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                    <h3>1</h3>
                    </div>
                    <div>
                    <h3>2</h3>
                    </div>
                    <div>
                    <h3>3</h3>
                    </div>
                    <div>
                    <h3>4</h3>
                    </div>
                    <div>
                    <h3>5</h3>
                    </div>
                    <div>
                    <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}
export default VitrineSlider;