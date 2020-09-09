import React, {Component} from 'react';
import Slider from "react-slick";
import { Picture } from 'react-responsive-picture';

const painelJpeg450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/painel02_e7szpa.jpeg';
const painelJpeg670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/painel02_e7szpa.jpeg';

const painelWebp450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/painel02_e7szpa.webp';
const painelWebp670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/painel02_e7szpa.webp';

const softJpeg450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/soft-close02_pvdh2y.jpeg';
const softJpeg670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/soft-close02_pvdh2y.jpeg';

const softWebp450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/soft-close02_pvdh2y.webp';
const softWebp670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/soft-close02_pvdh2y.webp';

const cestoJpeg450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/cesto-inox02_ze1r5s.jpeg';
const cestoJpeg670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/cesto-inox02_ze1r5s.jpeg';

const cestoWebp450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/cesto-inox02_ze1r5s.webp';
const cestoWebp670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/cesto-inox02_ze1r5s.webp';

const aguaJpeg450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/agua-quente02_b7qaxp.jpeg';
const aguaJpeg670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/agua-quente02_b7qaxp.jpeg';

const aguaWebp450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/agua-quente02_b7qaxp.webp';
const aguaWebp670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/agua-quente02_b7qaxp.webp';

var modal1s = '';
var modal4s = '';
var modal10s = '';

function SliderNextArrow(props) {
	const { onClick } = props;
	return (
	  	<div className="SliderNextArrow" onClick={onClick} >
			<svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
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
			<svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.1106 16.6126L34.8855 16.6125" stroke="#DB532A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M14.3322 4.28137L2.00005 16.6135L14.3322 28.9456" stroke="#DB532A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
	);
}

class sliderDesignInovador extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null
		};
	  }
	
	  componentDidMount() {
		this.setState({
		  nav1: this.slider1,
		  nav2: this.slider2
        });
        
        this.slider1.slickGoTo(this.props.changeSlide);

        if(this.props.changeSlide === 0) {
                    
			modal1s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_painel_multifuncional',
					label: '1'
				})
			}, 1000);

			modal4s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_painel_multifuncional',
					label: '4'
				})
			}, 4000);

			modal10s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_painel_multifuncional',
					label: '10'
				})
			}, 10000);

		} else if (this.props.changeSlide === 1) {
			
			modal1s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_soft_close',
					label: '1'
				})
			}, 1000);

			modal4s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_soft_close',
					label: '4'
				})
			}, 4000);

			modal10s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_soft_close',
					label: '10'
				})
			}, 10000);
			
		} else if (this.props.changeSlide === 2) {
			
			modal1s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_cesto_em_inox',
					label: '1'
				})
			}, 1000);

			modal4s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_cesto_em_inox',
					label: '4'
				})
			}, 4000);

			modal10s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_cesto_em_inox',
					label: '10'
				})
			}, 10000);

		} else if (this.props.changeSlide === 3) {

			modal1s = setTimeout(()=>{
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_agua_quente',
					label: '1'
				})
			}, 1000);

			modal4s = setTimeout(()=>{
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_agua_quente',
					label: '4'
				})
			}, 4000);

			modal10s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_agua_quente',
					label: '10'
				})
			}, 10000);
		}

        // Tags

        // Design inovador Modal Buttons 

        var modalButons = document.querySelectorAll('.gtm-tagModal');

        modalButons.forEach(element => {
            element.addEventListener('click', ()=>{
                dataLayer.push({
                    event: 'generic',                     
                    category: 'lavadora_edge',
                    action: 'menu_modal',
                    label: element.dataset.tag
                })
            })
        });

      }

    componentWillUnmount(){
        clearTimeout(modal1s);
        clearTimeout(modal4s);
        clearTimeout(modal10s);
    }

      render() { 

        const settingsSlider1 = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <SliderNextArrow />,
            prevArrow: <SliderPrevArrow />,
            fade: true,
            afterChange: function(index) {

                clearTimeout(modal1s);
                clearTimeout(modal4s);
                clearTimeout(modal10s);

                if(index === 0) {
                    
                    modal1s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_painel_multifuncional',
                            label: '1'
                        })
                    }, 1000);
        
                    modal4s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_painel_multifuncional',
                            label: '4'
                        })
                    }, 4000);
        
                    modal10s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_painel_multifuncional',
                            label: '10'
                        })
                    }, 10000);

                } else if (index === 1) {
                    
                    modal1s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_soft_close',
                            label: '1'
                        })
                    }, 1000);
        
                    modal4s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_soft_close',
                            label: '4'
                        })
                    }, 4000);
        
                    modal10s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_soft_close',
                            label: '10'
                        })
                    }, 10000);
                    
                } else if (index === 2) {
                    
                    modal1s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_cesto_em_inox',
                            label: '1'
                        })
                    }, 1000);
        
                    modal4s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_cesto_em_inox',
                            label: '4'
                        })
                    }, 4000);
        
                    modal10s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_cesto_em_inox',
                            label: '10'
                        })
                    }, 10000);

                } else if (index === 3) {

                    modal1s = setTimeout(()=>{
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_agua_quente',
                            label: '1'
                        })
                    }, 1000);
        
                    modal4s = setTimeout(()=>{
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_agua_quente',
                            label: '4'
                        })
                    }, 4000);
        
                    modal10s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_agua_quente',
                            label: '10'
                        })
                    }, 10000);
                }
			  }
        };
        
        const settingsSlider2 = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            focusOnSelect: true,
            arrows: false,
            variableWidth: true
		};
        

        return (
            <div className="slider__design-inovador">
                <Slider 
                    asNavFor={this.state.nav2} 
                    ref={slider => (this.slider1 = slider)} 
                    
                    {...settingsSlider1} >

                    <div className="slider__grid">
                        <Picture
                            sources = {[
                                {srcSet: painelJpeg450,    media: "(max-width: 450px)",    type: "image/jpeg"},
                                {srcSet: painelJpeg670,    media: "(min-width: 451px)",    type: "image/jpeg"},

                                {srcSet: painelWebp450,    media: "(max-width: 450px)",   type: "image/webp"},
                                {srcSet: painelWebp670,    media: "(min-width: 451px)",  type: "image/webp"}
                            ]}
                        />
                        <div className="slider__content">
                            <div>
                                <h2 data-tag="painel-multifuncional">Painel multifuncional</h2>
                                <p>Painel com acabamento inteiriço, tampa de vidro temperado de ponta a ponta e detalhes cromados.</p>
                            </div>
                        </div>
                    </div>

                    <div className="slider__grid">
                    <Picture
                            sources = {[
                                {srcSet: softJpeg450,    media: "(max-width: 450px)",    type: "image/jpeg"},
                                {srcSet: softJpeg670,    media: "(min-width: 451px)",    type: "image/jpeg"},

                                {srcSet: softWebp450,    media: "(max-width: 450px)",   type: "image/webp"},
                                {srcSet: softWebp670,    media: "(min-width: 451px)",  type: "image/webp"}
                            ]}
                        />
                        <div className="slider__content">
                            <div>
                                <h2 data-tag="soft-close">Soft Close</h2>
                                <p>Tampa com dispositivo exclusivo na dobradiça que proporciona fechamento suave sem impacto. Sofisticação em cada toque.</p>
                            </div>
                        </div>
                    </div>

                    <div className="slider__grid">
                    <Picture
                            sources = {[
                                {srcSet: cestoJpeg450,    media: "(max-width: 450px)",    type: "image/jpeg"},
                                {srcSet: cestoJpeg670,    media: "(min-width: 451px)",    type: "image/jpeg"},
        
                                {srcSet: cestoWebp450,    media: "(max-width: 450px)",   type: "image/webp"},
                                {srcSet: cestoWebp670,    media: "(min-width: 451px)",  type: "image/webp"}
          
                            ]}
                        />
                        <div className="slider__content">
                            <div>
                                <h2 data-tag="cesto-inox">Cesto Inox</h2>
                                <p>Toda modernidade do acabamento inox no interior da sua lavadora.</p>
                            </div>
                        </div>
                    </div>

                    <div className="slider__grid">
                    <Picture
                            sources = {[
                                {srcSet: aguaJpeg450,    media: "(max-width: 450px)",    type: "image/jpeg"},
                                {srcSet: aguaJpeg670,    media: "(min-width: 451px)",    type: "image/jpeg"},
           
                                {srcSet: aguaWebp450,    media: "(max-width: 450px)",   type: "image/webp"},
                                {srcSet: aguaWebp670,    media: "(min-width: 451px)",  type: "image/webp"}
             
                            ]}
                        />
                        <div className="slider__content">
                            <div>
                                <h2>Água Quente</h2>
                                <p>Função Água Quente potencializa a retirada de sujeira, facilitando a remoção de manchas durante a lavagem.</p>
                            </div>
                        </div>
                    </div>

                        
					</Slider>
				<div className="slider__design-inovador-nav">
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        {...settingsSlider2}
                        >
                        <div className="gtm-tagModal" data-tag="painel-multifuncional">
                            <svg width="75" height="61" viewBox="0 0 75 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.6943 31.9734H58.5593C59.7696 31.9734 60.7702 32.9696 60.7702 34.1748V44.5712C60.7702 45.7763 59.7696 46.7725 58.5593 46.7725H40.6943C39.484 46.7725 38.4834 45.7763 38.4834 44.5712V34.1748C38.4834 32.9536 39.484 31.9734 40.6943 31.9734Z" stroke="black" strokeMiterlimit="10"/>
                                <path d="M14.0181 31.9734H31.883C33.0934 31.9734 34.0939 32.9696 34.0939 34.1748V44.5712C34.0939 45.7763 33.0934 46.7725 31.883 46.7725H14.0181C12.8077 46.7725 11.8071 45.7763 11.8071 44.5712V34.1748C11.8071 32.9536 12.8077 31.9734 14.0181 31.9734Z" stroke="black" strokeMiterlimit="10"/>
                                <path className="hover" d="M40.6943 12.8035H58.5593C59.7696 12.8035 60.7702 13.7997 60.7702 15.0049V25.4012C60.7702 26.6064 59.7696 27.6026 58.5593 27.6026H40.6943C39.484 27.6026 38.4834 26.6064 38.4834 25.4012V15.0049C38.4834 13.7997 39.484 12.8035 40.6943 12.8035Z" fill="black" stroke="black" strokeMiterlimit="10"/>
                                <path d="M14.0181 12.8035H31.883C33.0934 12.8035 34.0939 13.7997 34.0939 15.0049V25.4012C34.0939 26.6064 33.0934 27.6026 31.883 27.6026H14.0181C12.8077 27.5866 11.8071 26.6064 11.8071 25.4012V15.0049C11.8071 13.7997 12.8077 12.8035 14.0181 12.8035Z" stroke="black" strokeMiterlimit="10"/>
                                <path d="M65.1598 34.5925C64.0301 34.5925 63.1264 35.5084 63.1264 36.6171H62.5293V34.4479C62.5293 33.3231 61.6094 32.4232 60.4959 32.4232C59.3823 32.4232 58.4624 33.3391 58.4624 34.4479V36.6171H57.8653V32.4714C57.8653 31.3466 56.9455 30.4468 55.8319 30.4468C54.7023 30.4468 53.7985 31.3627 53.7985 32.4714V36.6171H53.2014V27.2973C53.2014 26.1725 52.2815 25.2727 51.168 25.2727C50.0383 25.2727 49.1346 26.1886 49.1346 27.2973V43.8801H48.5375L45.326 37.0188C44.858 36.0065 43.6315 35.5566 42.6148 36.0386C41.5981 36.5046 41.1462 37.7258 41.6303 38.7382L48.4729 53.3606H65.0952L65.3373 52.8624C65.418 52.7018 67.2255 49.0381 67.2255 45.4388V36.6171C67.1932 35.5084 66.2895 34.5925 65.1598 34.5925Z" fill="white"/>
                                <path d="M65.1598 34.5925C64.0301 34.5925 63.1264 35.5084 63.1264 36.6171H62.5293V34.4479C62.5293 33.3231 61.6094 32.4232 60.4959 32.4232C59.3823 32.4232 58.4624 33.3391 58.4624 34.4479V36.6171H57.8653V32.4714C57.8653 31.3466 56.9455 30.4468 55.8319 30.4468C54.7023 30.4468 53.7985 31.3627 53.7985 32.4714V36.6171H53.2014V27.2973C53.2014 26.1725 52.2815 25.2727 51.168 25.2727C50.0383 25.2727 49.1346 26.1886 49.1346 27.2973V43.8801H48.5375L45.326 37.0188C44.858 36.0065 43.6315 35.5566 42.6148 36.0386C41.5981 36.5046 41.1462 37.7258 41.6303 38.7382L48.4729 53.3606H65.0952L65.3373 52.8624C65.418 52.7018 67.2255 49.0381 67.2255 45.4388V36.6171C67.1932 35.5084 66.2895 34.5925 65.1598 34.5925Z" fill="white"/>
                                <path d="M65.1598 34.5925C64.0301 34.5925 63.1264 35.5084 63.1264 36.6171H62.5293V34.4479C62.5293 33.3231 61.6094 32.4232 60.4959 32.4232C59.3823 32.4232 58.4624 33.3391 58.4624 34.4479V36.6171H57.8653V32.4714C57.8653 31.3466 56.9455 30.4468 55.8319 30.4468C54.7023 30.4468 53.7985 31.3627 53.7985 32.4714V36.6171H53.2014V27.2973C53.2014 26.1725 52.2815 25.2727 51.168 25.2727C50.0383 25.2727 49.1346 26.1886 49.1346 27.2973V43.8801H48.5375L45.326 37.0188C44.858 36.0065 43.6315 35.5566 42.6148 36.0386C41.5981 36.5046 41.1462 37.7258 41.6303 38.7382L48.4729 53.3606H65.0952L65.3373 52.8624C65.418 52.7018 67.2255 49.0381 67.2255 45.4388V36.6171C67.1932 35.5084 66.2895 34.5925 65.1598 34.5925Z" stroke="black" strokeMiterlimit="10"/>
                            </svg>

                            <h3>Painel<br/> multifuncional</h3>
                        </div>
                        <div className="gtm-tagModal" data-tag="soft-close">
                            <svg width="75" height="61" viewBox="0 0 75 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="hover" fillRule="evenodd" clipRule="evenodd" d="M36.5142 18.8426C38.2932 18.8426 39.7451 17.3949 39.7451 15.6212C39.7451 13.8474 38.2932 12.3998 36.5142 12.3998C34.7353 12.3998 33.2834 13.8474 33.2834 15.6212C33.2834 17.3949 34.7353 18.8426 36.5142 18.8426ZM36.5142 14.1604C37.3252 14.1604 37.9792 14.8126 37.9792 15.6212C37.9792 16.4298 37.3252 17.0819 36.5142 17.0819C35.7033 17.0819 35.0492 16.4298 35.0492 15.6212C35.0492 14.8126 35.7033 14.1604 36.5142 14.1604Z" fill="black"/>
                                <path className="hover" fillRule="evenodd" clipRule="evenodd" d="M48.0641 17.421C47.1616 17.421 46.416 16.6906 46.416 15.7777C46.416 14.8778 47.1485 14.1344 48.0641 14.1344C48.9667 14.1344 49.7122 14.8647 49.7122 15.7777C49.7122 16.6906 48.9667 17.421 48.0641 17.421Z" fill="black"/>
                                <path className="hover" fillRule="evenodd" clipRule="evenodd" d="M42.7797 17.421C41.8771 17.421 41.1316 16.6906 41.1316 15.7777C41.1316 14.8778 41.864 14.1344 42.7797 14.1344C43.6822 14.1344 44.4278 14.8647 44.4278 15.7777C44.4278 16.6906 43.6822 17.421 42.7797 17.421Z" fill="black"/>
                                <path className="hover" fillRule="evenodd" clipRule="evenodd" d="M30.445 17.421C29.5425 17.421 28.7969 16.6906 28.7969 15.7777C28.7969 14.8778 29.5294 14.1344 30.445 14.1344C31.3476 14.1344 32.0931 14.8647 32.0931 15.7777C32.0931 16.6906 31.3606 17.421 30.445 17.421Z" fill="black"/>
                                <path className="hover" fillRule="evenodd" clipRule="evenodd" d="M26.9133 15.6212C26.9133 16.5211 26.1809 17.2645 25.2652 17.2645C24.3627 17.2645 23.6171 16.5341 23.6171 15.6212C23.6171 14.7082 24.3496 13.9779 25.2652 13.9779C26.1809 13.9779 26.9133 14.7082 26.9133 15.6212Z" fill="black"/>
                                <path className="hover" d="M56.9056 20.9032L56.7748 12.3215C56.6963 11.0173 55.6237 10 54.3288 10H18.5542C17.2723 10 16.1998 11.0042 16.1082 12.3476L16.2259 21.5293C15.8466 23.1856 14.6955 28.5459 11.0069 46.205C10.9546 46.8702 11.2031 47.5353 11.6609 48.0309C12.1187 48.5265 12.7727 48.8004 13.4529 48.8004H15.2318L15.2187 50.3264C15.1664 51.0176 15.4149 51.6958 15.8858 52.2044C16.3567 52.7131 17.0238 53 17.7171 53H55.3229C56.0161 53 56.6832 52.7131 57.141 52.2175C57.6119 51.7088 57.8604 51.0306 57.8081 50.3655L57.782 48.8004H59.574C60.241 48.8004 60.8951 48.5265 61.3529 48.0309C61.8107 47.5353 62.0592 46.8702 61.9938 46.1137C57.8081 25.0115 57.0756 21.5423 56.9056 20.9032ZM18.5542 11.2912H54.3418C54.9435 11.2912 55.4537 11.7868 55.4929 12.3737L55.6237 20.3946H17.4947L17.4031 12.3737C17.4424 11.7607 17.9525 11.2912 18.5542 11.2912ZM56.5132 50.4177C56.5393 50.7567 56.4216 51.0698 56.1862 51.3176C55.9638 51.5654 55.6499 51.6958 55.3229 51.6958H17.704C17.3639 51.6958 17.0631 51.5654 16.8276 51.3176C16.6052 51.0698 16.4875 50.7567 16.5137 50.3785L16.5268 48.8004H56.4739L56.5132 50.4177ZM60.4111 47.1441C60.1887 47.3788 59.901 47.4962 59.587 47.4962H13.4529C13.139 47.4962 12.8381 47.3658 12.6288 47.131C12.4065 46.8963 12.3018 46.5963 12.3149 46.3746C13.5706 40.3361 16.6706 25.5984 17.4162 22.1031L17.5209 21.6988H55.7676C56.3954 24.6072 59.4824 40.1274 60.7119 46.2833C60.7381 46.6093 60.6204 46.9093 60.4111 47.1441Z" fill="black"/>
                                <path className="hover" d="M20.4136 22.8289L17.7684 25.4664L18.6933 26.3886L21.3385 23.7511L20.4136 22.8289Z" fill="black"/>
                                <path className="hover" d="M23.9385 22.8146L17.7694 28.9657L18.6943 29.888L24.8634 23.7368L23.9385 22.8146Z" fill="black"/>
                                <path className="hover" d="M56.6527 42.5109L54.0075 45.1484L54.9324 46.0706L57.5776 43.4331L56.6527 42.5109Z" fill="black"/>
                                <path className="hover" d="M56.6617 39.0048L50.4917 45.155L51.4165 46.0774L57.5865 39.9271L56.6617 39.0048Z" fill="black"/>
                            </svg>

                            <h3>Soft<br/> Close</h3>
                        </div>
                        <div className="gtm-tagModal" data-tag="cesto-em-inox">
                            <svg width="75" height="61" viewBox="0 0 75 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="hover" d="M37.3446 45.341C37.9934 45.341 38.5193 44.8105 38.5193 44.156C38.5193 43.5015 37.9934 42.971 37.3446 42.971C36.6958 42.971 36.1699 43.5015 36.1699 44.156C36.1699 44.8105 36.6958 45.341 37.3446 45.341Z" fill="black"/>
                                <path className="hover" d="M37.3446 40.6009C37.9934 40.6009 38.5193 40.0704 38.5193 39.4159C38.5193 38.7614 37.9934 38.2309 37.3446 38.2309C36.6958 38.2309 36.1699 38.7614 36.1699 39.4159C36.1699 40.0704 36.6958 40.6009 37.3446 40.6009Z" fill="black"/>
                                <path className="hover" d="M37.3446 35.8733C37.9934 35.8733 38.5193 35.3427 38.5193 34.6882C38.5193 34.0337 37.9934 33.5032 37.3446 33.5032C36.6958 33.5032 36.1699 34.0337 36.1699 34.6882C36.1699 35.3427 36.6958 35.8733 37.3446 35.8733Z" fill="black"/>
                                <path className="hover" d="M37.3446 31.1331C37.9934 31.1331 38.5193 30.6026 38.5193 29.9481C38.5193 29.2936 37.9934 28.7631 37.3446 28.7631C36.6958 28.7631 36.1699 29.2936 36.1699 29.9481C36.1699 30.6026 36.6958 31.1331 37.3446 31.1331Z" fill="black"/>
                                <path className="hover" d="M37.3446 40.6009C37.9934 40.6009 38.5193 40.0704 38.5193 39.4159C38.5193 38.7614 37.9934 38.2309 37.3446 38.2309C36.6958 38.2309 36.1699 38.7614 36.1699 39.4159C36.1699 40.0704 36.6958 40.6009 37.3446 40.6009Z" fill="black"/>
                                <path className="hover" d="M37.3446 35.8733C37.9934 35.8733 38.5193 35.3427 38.5193 34.6882C38.5193 34.0337 37.9934 33.5032 37.3446 33.5032C36.6958 33.5032 36.1699 34.0337 36.1699 34.6882C36.1699 35.3427 36.6958 35.8733 37.3446 35.8733Z" fill="black"/>
                                <path className="hover" d="M37.3446 31.1331C37.9934 31.1331 38.5193 30.6026 38.5193 29.9481C38.5193 29.2936 37.9934 28.7631 37.3446 28.7631C36.6958 28.7631 36.1699 29.2936 36.1699 29.9481C36.1699 30.6026 36.6958 31.1331 37.3446 31.1331Z" fill="black"/>
                                <path className="hover" d="M42.0312 47.7111C42.6799 47.7111 43.2059 47.1805 43.2059 46.5261C43.2059 45.8716 42.6799 45.341 42.0312 45.341C41.3824 45.341 40.8564 45.8716 40.8564 46.5261C40.8564 47.1805 41.3824 47.7111 42.0312 47.7111Z" fill="black"/>
                                <path className="hover" d="M42.0312 42.971C42.6799 42.971 43.2059 42.4404 43.2059 41.7859C43.2059 41.1315 42.6799 40.6009 42.0312 40.6009C41.3824 40.6009 40.8564 41.1315 40.8564 41.7859C40.8564 42.4404 41.3824 42.971 42.0312 42.971Z" fill="black"/>
                                <path className="hover" d="M42.0312 38.2433C42.6799 38.2433 43.2059 37.7128 43.2059 37.0583C43.2059 36.4038 42.6799 35.8733 42.0312 35.8733C41.3824 35.8733 40.8564 36.4038 40.8564 37.0583C40.8564 37.7128 41.3824 38.2433 42.0312 38.2433Z" fill="black"/>
                                <path className="hover" d="M42.0312 33.5032C42.6799 33.5032 43.2059 32.9726 43.2059 32.3182C43.2059 31.6637 42.6799 31.1331 42.0312 31.1331C41.3824 31.1331 40.8564 31.6637 40.8564 32.3182C40.8564 32.9726 41.3824 33.5032 42.0312 33.5032Z" fill="black"/>
                                <path className="hover" d="M42.0312 42.971C42.6799 42.971 43.2059 42.4404 43.2059 41.7859C43.2059 41.1315 42.6799 40.6009 42.0312 40.6009C41.3824 40.6009 40.8564 41.1315 40.8564 41.7859C40.8564 42.4404 41.3824 42.971 42.0312 42.971Z" fill="black"/>
                                <path className="hover" d="M42.0312 38.2433C42.6799 38.2433 43.2059 37.7128 43.2059 37.0583C43.2059 36.4038 42.6799 35.8733 42.0312 35.8733C41.3824 35.8733 40.8564 36.4038 40.8564 37.0583C40.8564 37.7128 41.3824 38.2433 42.0312 38.2433Z" fill="black"/>
                                <path className="hover" d="M42.0312 33.5032C42.6799 33.5032 43.2059 32.9726 43.2059 32.3182C43.2059 31.6637 42.6799 31.1331 42.0312 31.1331C41.3824 31.1331 40.8564 31.6637 40.8564 32.3182C40.8564 32.9726 41.3824 33.5032 42.0312 33.5032Z" fill="black"/>
                                <path className="hover" d="M32.6457 47.7111C33.2944 47.7111 33.8204 47.1805 33.8204 46.5261C33.8204 45.8716 33.2944 45.341 32.6457 45.341C31.9969 45.341 31.4709 45.8716 31.4709 46.5261C31.4709 47.1805 31.9969 47.7111 32.6457 47.7111Z" fill="black"/>
                                <path className="hover" d="M32.6457 42.971C33.2944 42.971 33.8204 42.4404 33.8204 41.7859C33.8204 41.1315 33.2944 40.6009 32.6457 40.6009C31.9969 40.6009 31.4709 41.1315 31.4709 41.7859C31.4709 42.4404 31.9969 42.971 32.6457 42.971Z" fill="black"/>
                                <path className="hover" d="M32.6457 38.2433C33.2944 38.2433 33.8204 37.7128 33.8204 37.0583C33.8204 36.4038 33.2944 35.8733 32.6457 35.8733C31.9969 35.8733 31.4709 36.4038 31.4709 37.0583C31.4709 37.7128 31.9969 38.2433 32.6457 38.2433Z" fill="black"/>
                                <path className="hover" d="M32.6457 33.5032C33.2944 33.5032 33.8204 32.9726 33.8204 32.3182C33.8204 31.6637 33.2944 31.1331 32.6457 31.1331C31.9969 31.1331 31.4709 31.6637 31.4709 32.3182C31.4709 32.9726 31.9969 33.5032 32.6457 33.5032Z" fill="black"/>
                                <path className="hover" d="M32.6457 42.971C33.2944 42.971 33.8204 42.4404 33.8204 41.7859C33.8204 41.1315 33.2944 40.6009 32.6457 40.6009C31.9969 40.6009 31.4709 41.1315 31.4709 41.7859C31.4709 42.4404 31.9969 42.971 32.6457 42.971Z" fill="black"/>
                                <path className="hover" d="M32.6457 38.2433C33.2944 38.2433 33.8204 37.7128 33.8204 37.0583C33.8204 36.4038 33.2944 35.8733 32.6457 35.8733C31.9969 35.8733 31.4709 36.4038 31.4709 37.0583C31.4709 37.7128 31.9969 38.2433 32.6457 38.2433Z" fill="black"/>
                                <path className="hover" d="M32.6457 33.5032C33.2944 33.5032 33.8204 32.9726 33.8204 32.3182C33.8204 31.6637 33.2944 31.1331 32.6457 31.1331C31.9969 31.1331 31.4709 31.6637 31.4709 32.3182C31.4709 32.9726 31.9969 33.5032 32.6457 33.5032Z" fill="black"/>
                                <path className="hover" d="M27.9591 45.341C28.6079 45.341 29.1339 44.8105 29.1339 44.156C29.1339 43.5015 28.6079 42.971 27.9591 42.971C27.3104 42.971 26.7844 43.5015 26.7844 44.156C26.7844 44.8105 27.3104 45.341 27.9591 45.341Z" fill="black"/>
                                <path className="hover" d="M27.9591 40.6009C28.6079 40.6009 29.1339 40.0704 29.1339 39.4159C29.1339 38.7614 28.6079 38.2309 27.9591 38.2309C27.3104 38.2309 26.7844 38.7614 26.7844 39.4159C26.7844 40.0704 27.3104 40.6009 27.9591 40.6009Z" fill="black"/>
                                <path className="hover" d="M27.9591 35.8733C28.6079 35.8733 29.1339 35.3427 29.1339 34.6882C29.1339 34.0337 28.6079 33.5032 27.9591 33.5032C27.3104 33.5032 26.7844 34.0337 26.7844 34.6882C26.7844 35.3427 27.3104 35.8733 27.9591 35.8733Z" fill="black"/>
                                <path className="hover" d="M27.9591 31.1331C28.6079 31.1331 29.1339 30.6026 29.1339 29.9481C29.1339 29.2936 28.6079 28.7631 27.9591 28.7631C27.3104 28.7631 26.7844 29.2936 26.7844 29.9481C26.7844 30.6026 27.3104 31.1331 27.9591 31.1331Z" fill="black"/>
                                <path className="hover" d="M27.9591 40.6009C28.6079 40.6009 29.1339 40.0704 29.1339 39.4159C29.1339 38.7614 28.6079 38.2309 27.9591 38.2309C27.3104 38.2309 26.7844 38.7614 26.7844 39.4159C26.7844 40.0704 27.3104 40.6009 27.9591 40.6009Z" fill="black"/>
                                <path className="hover" d="M27.9591 35.8733C28.6079 35.8733 29.1339 35.3427 29.1339 34.6882C29.1339 34.0337 28.6079 33.5032 27.9591 33.5032C27.3104 33.5032 26.7844 34.0337 26.7844 34.6882C26.7844 35.3427 27.3104 35.8733 27.9591 35.8733Z" fill="black"/>
                                <path className="hover" d="M27.9591 31.1331C28.6079 31.1331 29.1339 30.6026 29.1339 29.9481C29.1339 29.2936 28.6079 28.7631 27.9591 28.7631C27.3104 28.7631 26.7844 29.2936 26.7844 29.9481C26.7844 30.6026 27.3104 31.1331 27.9591 31.1331Z" fill="black"/>
                                <path className="hover" d="M46.7301 45.341C47.3789 45.341 47.9048 44.8105 47.9048 44.156C47.9048 43.5015 47.3789 42.971 46.7301 42.971C46.0813 42.971 45.5554 43.5015 45.5554 44.156C45.5554 44.8105 46.0813 45.341 46.7301 45.341Z" fill="black"/>
                                <path className="hover" d="M46.7301 40.6009C47.3789 40.6009 47.9048 40.0704 47.9048 39.4159C47.9048 38.7614 47.3789 38.2309 46.7301 38.2309C46.0813 38.2309 45.5554 38.7614 45.5554 39.4159C45.5554 40.0704 46.0813 40.6009 46.7301 40.6009Z" fill="black"/>
                                <path className="hover" d="M46.7301 35.8733C47.3789 35.8733 47.9048 35.3427 47.9048 34.6882C47.9048 34.0337 47.3789 33.5032 46.7301 33.5032C46.0813 33.5032 45.5554 34.0337 45.5554 34.6882C45.5554 35.3427 46.0813 35.8733 46.7301 35.8733Z" fill="black"/>
                                <path className="hover" d="M46.7301 31.1331C47.3789 31.1331 47.9048 30.6026 47.9048 29.9481C47.9048 29.2936 47.3789 28.7631 46.7301 28.7631C46.0813 28.7631 45.5554 29.2936 45.5554 29.9481C45.5554 30.6026 46.0813 31.1331 46.7301 31.1331Z" fill="black"/>
                                <path className="hover" d="M46.7301 40.6009C47.3789 40.6009 47.9048 40.0704 47.9048 39.4159C47.9048 38.7614 47.3789 38.2309 46.7301 38.2309C46.0813 38.2309 45.5554 38.7614 45.5554 39.4159C45.5554 40.0704 46.0813 40.6009 46.7301 40.6009Z" fill="black"/>
                                <path className="hover" d="M46.7301 35.8733C47.3789 35.8733 47.9048 35.3427 47.9048 34.6882C47.9048 34.0337 47.3789 33.5032 46.7301 33.5032C46.0813 33.5032 45.5554 34.0337 45.5554 34.6882C45.5554 35.3427 46.0813 35.8733 46.7301 35.8733Z" fill="black"/>
                                <path className="hover" d="M46.7301 31.1331C47.3789 31.1331 47.9048 30.6026 47.9048 29.9481C47.9048 29.2936 47.3789 28.7631 46.7301 28.7631C46.0813 28.7631 45.5554 29.2936 45.5554 29.9481C45.5554 30.6026 46.0813 31.1331 46.7301 31.1331Z" fill="black"/>
                                <path className="hover" d="M23.2602 47.7111C23.909 47.7111 24.4349 47.1805 24.4349 46.5261C24.4349 45.8716 23.909 45.341 23.2602 45.341C22.6114 45.341 22.0855 45.8716 22.0855 46.5261C22.0855 47.1805 22.6114 47.7111 23.2602 47.7111Z" fill="black"/>
                                <path className="hover" d="M23.2602 42.971C23.909 42.971 24.4349 42.4404 24.4349 41.7859C24.4349 41.1315 23.909 40.6009 23.2602 40.6009C22.6114 40.6009 22.0855 41.1315 22.0855 41.7859C22.0855 42.4404 22.6114 42.971 23.2602 42.971Z" fill="black"/>
                                <path className="hover" d="M23.2602 38.2433C23.909 38.2433 24.4349 37.7128 24.4349 37.0583C24.4349 36.4038 23.909 35.8733 23.2602 35.8733C22.6114 35.8733 22.0855 36.4038 22.0855 37.0583C22.0855 37.7128 22.6114 38.2433 23.2602 38.2433Z" fill="black"/>
                                <path className="hover" d="M23.2602 33.5032C23.909 33.5032 24.4349 32.9726 24.4349 32.3182C24.4349 31.6637 23.909 31.1331 23.2602 31.1331C22.6114 31.1331 22.0855 31.6637 22.0855 32.3182C22.0855 32.9726 22.6114 33.5032 23.2602 33.5032Z" fill="black"/>
                                <path className="hover" d="M23.2602 42.971C23.909 42.971 24.4349 42.4404 24.4349 41.7859C24.4349 41.1315 23.909 40.6009 23.2602 40.6009C22.6114 40.6009 22.0855 41.1315 22.0855 41.7859C22.0855 42.4404 22.6114 42.971 23.2602 42.971Z" fill="black"/>
                                <path className="hover" d="M23.2602 38.2433C23.909 38.2433 24.4349 37.7128 24.4349 37.0583C24.4349 36.4038 23.909 35.8733 23.2602 35.8733C22.6114 35.8733 22.0855 36.4038 22.0855 37.0583C22.0855 37.7128 22.6114 38.2433 23.2602 38.2433Z" fill="black"/>
                                <path className="hover" d="M23.2602 33.5032C23.909 33.5032 24.4349 32.9726 24.4349 32.3182C24.4349 31.6637 23.909 31.1331 23.2602 31.1331C22.6114 31.1331 22.0855 31.6637 22.0855 32.3182C22.0855 32.9726 22.6114 33.5032 23.2602 33.5032Z" fill="black"/>
                                <path className="hover" d="M51.429 47.7111C52.0778 47.7111 52.6038 47.1805 52.6038 46.5261C52.6038 45.8716 52.0778 45.341 51.429 45.341C50.7803 45.341 50.2543 45.8716 50.2543 46.5261C50.2543 47.1805 50.7803 47.7111 51.429 47.7111Z" fill="black"/>
                                <path className="hover" d="M51.429 42.971C52.0778 42.971 52.6038 42.4404 52.6038 41.7859C52.6038 41.1315 52.0778 40.6009 51.429 40.6009C50.7803 40.6009 50.2543 41.1315 50.2543 41.7859C50.2543 42.4404 50.7803 42.971 51.429 42.971Z" fill="black"/>
                                <path className="hover" d="M51.429 38.2433C52.0778 38.2433 52.6038 37.7128 52.6038 37.0583C52.6038 36.4038 52.0778 35.8733 51.429 35.8733C50.7803 35.8733 50.2543 36.4038 50.2543 37.0583C50.2543 37.7128 50.7803 38.2433 51.429 38.2433Z" fill="black"/>
                                <path className="hover" d="M51.429 33.5032C52.0778 33.5032 52.6038 32.9726 52.6038 32.3182C52.6038 31.6637 52.0778 31.1331 51.429 31.1331C50.7802 31.1331 50.2543 31.6637 50.2543 32.3182C50.2543 32.9726 50.7802 33.5032 51.429 33.5032Z" fill="black"/>
                                <path className="hover" d="M51.429 42.971C52.0778 42.971 52.6038 42.4404 52.6038 41.7859C52.6038 41.1315 52.0778 40.6009 51.429 40.6009C50.7803 40.6009 50.2543 41.1315 50.2543 41.7859C50.2543 42.4404 50.7803 42.971 51.429 42.971Z" fill="black"/>
                                <path className="hover" d="M51.429 38.2433C52.0778 38.2433 52.6038 37.7128 52.6038 37.0583C52.6038 36.4038 52.0778 35.8733 51.429 35.8733C50.7803 35.8733 50.2543 36.4038 50.2543 37.0583C50.2543 37.7128 50.7803 38.2433 51.429 38.2433Z" fill="black"/>
                                <path className="hover" d="M51.429 33.5032C52.0778 33.5032 52.6038 32.9726 52.6038 32.3182C52.6038 31.6637 52.0778 31.1331 51.429 31.1331C50.7802 31.1331 50.2543 31.6637 50.2543 32.3182C50.2543 32.9726 50.7802 33.5032 51.429 33.5032Z" fill="black"/>
                                <path className="hover" d="M18.5613 45.341C19.2101 45.341 19.736 44.8105 19.736 44.156C19.736 43.5015 19.2101 42.971 18.5613 42.971C17.9125 42.971 17.3865 43.5015 17.3865 44.156C17.3865 44.8105 17.9125 45.341 18.5613 45.341Z" fill="black"/>
                                <path className="hover" d="M18.5613 40.6009C19.2101 40.6009 19.736 40.0704 19.736 39.4159C19.736 38.7614 19.2101 38.2309 18.5613 38.2309C17.9125 38.2309 17.3865 38.7614 17.3865 39.4159C17.3865 40.0704 17.9125 40.6009 18.5613 40.6009Z" fill="black"/>
                                <path className="hover" d="M18.5613 35.8733C19.2101 35.8733 19.736 35.3427 19.736 34.6882C19.736 34.0337 19.2101 33.5032 18.5613 33.5032C17.9125 33.5032 17.3865 34.0337 17.3865 34.6882C17.3865 35.3427 17.9125 35.8733 18.5613 35.8733Z" fill="black"/>
                                <path className="hover" d="M18.5613 31.1331C19.2101 31.1331 19.736 30.6026 19.736 29.9481C19.736 29.2936 19.2101 28.7631 18.5613 28.7631C17.9125 28.7631 17.3865 29.2936 17.3865 29.9481C17.3865 30.6026 17.9125 31.1331 18.5613 31.1331Z" fill="black"/>
                                <path className="hover" d="M18.5613 40.6009C19.2101 40.6009 19.736 40.0704 19.736 39.4159C19.736 38.7614 19.2101 38.2309 18.5613 38.2309C17.9125 38.2309 17.3865 38.7614 17.3865 39.4159C17.3865 40.0704 17.9125 40.6009 18.5613 40.6009Z" fill="black"/>
                                <path className="hover" d="M18.5613 35.8733C19.2101 35.8733 19.736 35.3427 19.736 34.6882C19.736 34.0337 19.2101 33.5032 18.5613 33.5032C17.9125 33.5032 17.3865 34.0337 17.3865 34.6882C17.3865 35.3427 17.9125 35.8733 18.5613 35.8733Z" fill="black"/>
                                <path className="hover" d="M18.5613 31.1331C19.2101 31.1331 19.736 30.6026 19.736 29.9481C19.736 29.2936 19.2101 28.7631 18.5613 28.7631C17.9125 28.7631 17.3865 29.2936 17.3865 29.9481C17.3865 30.6026 17.9125 31.1331 18.5613 31.1331Z" fill="black"/>
                                <path className="hover" d="M56.1156 45.341C56.7644 45.341 57.2903 44.8105 57.2903 44.156C57.2903 43.5015 56.7644 42.971 56.1156 42.971C55.4668 42.971 54.9409 43.5015 54.9409 44.156C54.9409 44.8105 55.4668 45.341 56.1156 45.341Z" fill="black"/>
                                <path className="hover" d="M56.1156 40.6009C56.7644 40.6009 57.2903 40.0704 57.2903 39.4159C57.2903 38.7614 56.7644 38.2309 56.1156 38.2309C55.4668 38.2309 54.9409 38.7614 54.9409 39.4159C54.9409 40.0704 55.4668 40.6009 56.1156 40.6009Z" fill="black"/>
                                <path className="hover" d="M56.1156 35.8733C56.7644 35.8733 57.2903 35.3427 57.2903 34.6882C57.2903 34.0337 56.7644 33.5032 56.1156 33.5032C55.4668 33.5032 54.9409 34.0337 54.9409 34.6882C54.9409 35.3427 55.4668 35.8733 56.1156 35.8733Z" fill="black"/>
                                <path className="hover" d="M56.1156 31.1331C56.7644 31.1331 57.2903 30.6026 57.2903 29.9481C57.2903 29.2936 56.7644 28.7631 56.1156 28.7631C55.4668 28.7631 54.9409 29.2936 54.9409 29.9481C54.9409 30.6026 55.4668 31.1331 56.1156 31.1331Z" fill="black"/>
                                <path className="hover" d="M56.1156 40.6009C56.7644 40.6009 57.2903 40.0704 57.2903 39.4159C57.2903 38.7614 56.7644 38.2309 56.1156 38.2309C55.4668 38.2309 54.9409 38.7614 54.9409 39.4159C54.9409 40.0704 55.4668 40.6009 56.1156 40.6009Z" fill="black"/>
                                <path className="hover" d="M56.1156 35.8733C56.7644 35.8733 57.2903 35.3427 57.2903 34.6882C57.2903 34.0337 56.7644 33.5032 56.1156 33.5032C55.4668 33.5032 54.9409 34.0337 54.9409 34.6882C54.9409 35.3427 55.4668 35.8733 56.1156 35.8733Z" fill="black"/>
                                <path className="hover" d="M56.1156 31.1331C56.7644 31.1331 57.2903 30.6026 57.2903 29.9481C57.2903 29.2936 56.7644 28.7631 56.1156 28.7631C55.4668 28.7631 54.9409 29.2936 54.9409 29.9481C54.9409 30.6026 55.4668 31.1331 56.1156 31.1331Z" fill="black"/>
                                <path className="hover" d="M59.6521 20.4429C59.6521 20.393 59.6769 20.3431 59.6769 20.2807H59.6521V13.3452C59.6521 13.2953 59.6769 13.2454 59.6769 13.183C59.6769 9.05414 48.1645 6.82129 37.3323 6.82129C26.5 6.82129 15 9.05414 15 13.183C15 13.2329 15.0247 13.2828 15.0247 13.3452V20.2932H15C15 20.3431 15.0247 20.393 15.0247 20.4554V45.4658C15.0247 45.4658 15 46.2392 15 46.6383C15 50.7672 26.5124 53.0001 37.3446 53.0001C48.1769 53.0001 59.6892 50.7672 59.6892 46.6383C59.6892 46.2392 59.6645 45.4907 59.6645 45.4907V20.4429H59.6521ZM37.3446 19.5448C46.0871 19.5448 55.2747 18.0853 58.4774 15.3535V20.418C58.1806 22.8379 49.5989 25.4699 37.3446 25.4699C25.0903 25.4699 16.4962 22.8254 16.1995 20.418V15.3535C19.4145 18.0853 28.6021 19.5448 37.3446 19.5448ZM20.1317 16.0895C24.1382 14.6674 30.5312 13.8192 37.3323 13.8192C44.1457 13.8192 50.5263 14.6799 54.5328 16.0895C50.8231 17.3868 44.7516 18.3598 37.3323 18.3598C29.9129 18.3598 23.8414 17.3868 20.1317 16.0895ZM37.3446 8.00632C49.8215 8.00632 58.5145 10.7381 58.5145 13.183H58.4898V13.3078C58.4032 14.0313 57.5995 14.7672 56.1651 15.4408C52.1586 13.6945 44.9989 12.6217 37.357 12.6217C29.7151 12.6217 22.5554 13.6945 18.5489 15.4408C17.1022 14.7672 16.286 14.0313 16.1995 13.3078V13.183H16.1747C16.1747 10.7381 24.8677 8.00632 37.3446 8.00632ZM37.3446 51.8151C24.8677 51.8151 16.1747 49.0832 16.1747 46.6383C16.1747 46.2516 16.1995 45.5032 16.1995 45.4907V22.4637C19.4145 25.1955 28.5898 26.655 37.3323 26.655C46.0747 26.655 55.2624 25.1955 58.4651 22.4637V45.5157C58.4651 45.5157 58.4898 46.2641 58.4898 46.6508C58.5145 49.0832 49.8215 51.8151 37.3446 51.8151Z" fill="black"/>
                            </svg>
                            <h3>Cesto em<br/> Inox</h3>
                        </div>
                        <div className="gtm-tagModal" data-tag="agua-quente">
                            <svg width="75" height="61" viewBox="0 0 75 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="hover" d="M36.8694 38.3008V26.0492C36.8694 25.1029 36.1155 24.3333 35.173 24.3333C34.2306 24.3333 33.4641 25.0903 33.4641 26.0492V38.3008C31.4912 39.0073 30.0713 40.8747 30.0713 43.108C30.0713 45.9469 32.3457 48.2307 35.1605 48.2307C37.9878 48.2307 40.2622 45.9469 40.2622 43.108C40.2748 40.8873 38.8548 39.0073 36.8694 38.3008Z" fill="black"/>
                                <path d="M35.1731 52.3691C30.109 52.3691 26 48.2432 26 43.1584C26 40.5339 27.0932 38.124 29.0535 36.3323C29.2671 36.1431 29.3928 35.8655 29.3928 35.5753V12.4349C29.3928 9.24267 31.9939 6.63086 35.1731 6.63086C38.3523 6.63086 40.9534 9.24267 40.9534 12.4349V35.5753C40.9534 35.8781 41.079 36.1557 41.2927 36.3323C43.2529 38.1114 44.3462 40.5466 44.3462 43.1584C44.3587 48.2432 40.2371 52.3691 35.1731 52.3691Z" stroke="black" strokeMiterlimit="10"/>
                                <path d="M50.3903 35.4996L45.7158 29.6199H55.0648L50.3903 35.4996Z" stroke="black" strokeMiterlimit="10"/>
                                <path d="M50.3903 19.7783L55.0648 25.6581H45.7158L50.3903 19.7783Z" stroke="black" strokeMiterlimit="10"/>
                            </svg>
                            <h3>Água<br/> quente</h3>
                        </div>
					</Slider>
                    </div>
            </div>
        )
      }
}
export default sliderDesignInovador;