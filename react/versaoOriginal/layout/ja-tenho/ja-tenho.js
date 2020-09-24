import React from 'react';
import Api from '../../services';
//components
import { Picture } from 'react-responsive-picture';
import Slider from "../../../node_modules/react-slick";
import './ja-tenho.global.css';
import api from '../../services';

//IMG
const imgMobile = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/bg-galadeira-onverser4-mobile.png';
const imgTablet = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/bg-galadeira-onverser4.png';
const imgDesktop = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/bg-galadeira-onverser4.png';

const imgPost1 = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post01.jpg'
const imgPost2 = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post02.jpg'
const imgPost3 = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post03.jpg'
const imgPost4 = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post04.jpg'

class JaTenho extends React.Component {

    state = {
        loading: false,
        checkedTerms: false,
        form : {
            name: "",
            email: "",
        },
    }

    next = () => {
        this.slider.slickNext();
    }
    previous = () => {
        this.slider.slickPrev();
    }
    postArrow =()=> {
        const totalSlider = document.querySelectorAll(".slick-slide")
        return(
            <div id="postsArrow">
                <button className="button" onClick={this.previous}>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z" fill="#F55D2F"/></svg>
                </button>
                <button className="button" onClick={this.next}>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z" fill="#F55D2F"/></svg>
                </button>
            </div>
        )
    }

    // cadastro = () => {
    //     console.log(this.state.checkedTerms)

    //     const { name,email } = this.state;
    //     console.log(name + " " + email)
    //     const payload = {
    //         name,email
    //     }
    //     this.setState({
    //         loading: true
    //     })
    //     try{
    //         const data = await api.cadastro(payload)
    //     }
    //     catch{
    //         console.log("erro")
    //         console.log(name + " " + email)
    //     }
    //     this.setState({
    //         loading: false
    //     })

    // }

    submitHandler = async (e) => {
        e.preventDefault();
        
        const { name,email } = this.state;
        const payload = { name,email }

        try {
            const data = await api.cadastro(payload)
            return data
        } catch (error) {
            console.log("error")
        }            
    };

    handleChange = (e) =>{
        
        const nameInput = e.target.name
        const valueInput = e.target.value

        this.setState({
            ...this.state.form,
            [nameInput]:valueInput
        })
        console.log(this.state)
    }
    

    render() {

        const {name,email,checkedTerms} = this.state.form

        const settings = {
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                  }
                }
              ]
          };
        return (
            <div id="jatenho" className="ja-tenho">

                <section className="banner">
                    <div className="banner__text">
                        <h2>Já tem a nova geladeira Brastemp Inverse | 4?</h2>
                        <p>Confira o conteúdo especial da Brastemp para novos donos</p>
                        <a href="" title="" className="button__secondary">Ver mais</a>
                    </div>
                    <Picture
                    sources = {[
                        {
                            srcSet: imgMobile,
                            media: "(max-width: 767px)",
                        },
                        {
                            srcSet: imgDesktop,
                            media: "(min-width: 1024px)",
                        },
                        {
                            srcSet: imgTablet,
                            media: "(min-width: 768px)",
                        },
                    ]}
                />
                </section>
                <section className="newslatter">
                    <div className="newslatter__wrap">
                        <div className="newslatter__wrap-text">
                            <h2>Exclusivo para novos donos</h2>
                            <p>Receba <span>dicas</span>, <span>receitas</span> e outros <span>conteúdos especiais!</span></p>
                        </div>
                        <form onSubmit={this.submitHandler} className="newslatter__from">
                            <div className="newslatter__from-grid">
                                <div>
                                    <label htmlFor="name">Nome</label>
                                    <input type="text" onChange={(e)=> this.handleChange(e)} name="name" required placeholder="Nome" />
                                </div>
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email"  onChange={(e)=> this.handleChange(e)} name="email" required placeholder="Ex.: meu.nome@email.com" />
                                </div>
                            </div>

                            <button className="button__tertiary">Cadastrar</button>
                            
                            <label className="checkbox" htmlFor="privacy">
                                <input 
                                    onClick={()=>this.setState({checkedTerms: !this.state.checkedTerms}) }
                                    checked={checkedTerms}
                                    type="checkbox" 
                                    required 
                                />
                                <span>
                                    Li e concordo com as  <a href="">Políticas e Privacidade</a>
                                </span>
                            </label>
                        </form>
                    </div>
                </section>
                <section className="videos">
                    <div className="videos__wrap">
                        <div className="videos__wrap-desk">
                            <div className="videos__wrap-txt">
                                <h2>Dicas para aproveitar ao máximo a sua nova geladeira</h2>
                                <p>Confira o conteúdo especial da Brastemp para novos donos.</p>
                                <h3>Como solicitar a instalação da minha geladeira?</h3>
                            </div>
                            <div className="videos__play">
                                <span className="videos__play-border"></span>
                                <svg width="186" height="186" viewBox="0 0 186 186" fill="none">
                                    <path d="M76.5698 58.72L77.477 57.5254C77.0232 57.1808 76.4134 57.1231 75.903 57.3763C75.3926 57.6296 75.0698 58.1502 75.0698 58.72H76.5698ZM122.05 93.26L122.957 94.4546C123.33 94.1709 123.55 93.729 123.55 93.26C123.55 92.791 123.33 92.3491 122.957 92.0654L122.05 93.26ZM76.5698 127.8H75.0698C75.0698 128.37 75.3926 128.89 75.903 129.144C76.4134 129.397 77.0232 129.339 77.477 128.995L76.5698 127.8ZM1.50977 92.68L3.00977 92.68L3.00977 92.6797L1.50977 92.68ZM75.6626 59.9146L121.143 94.4546L122.957 92.0654L77.477 57.5254L75.6626 59.9146ZM121.143 92.0654L75.6626 126.605L77.477 128.995L122.957 94.4546L121.143 92.0654ZM78.0698 127.8V58.72H75.0698V127.8H78.0698ZM182.37 92.68C182.37 142.212 142.221 182.36 92.6898 182.36V185.36C143.878 185.36 185.37 143.868 185.37 92.68H182.37ZM92.6898 182.36C43.1582 182.36 3.00977 142.212 3.00977 92.68H0.00976746C0.00976746 143.868 41.5013 185.36 92.6898 185.36V182.36ZM3.00977 92.6797C2.99993 43.1484 43.1481 3 92.6798 3V0C41.4914 0 -0.000397067 41.4916 0.00976749 92.6803L3.00977 92.6797ZM92.6798 3C142.212 3 182.37 43.1486 182.37 92.68H185.37C185.37 41.4914 143.868 0 92.6798 0V3Z" fill="#F08B1D"/>
                                </svg>
                                <Picture
                                    sources = {[
                                        {
                                            srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video01.jpg",
                                            media: "(max-width: 767px)",
                                        },
                                        {
                                            srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video01.jpg",
                                            media: "(min-width: 1024px)",
                                        },
                                        {
                                            srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video01.jpg",
                                            media: "(min-width: 768px)",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="videos__gallery">
                            <div className="videos__gallery-wrap">
                                <div className="videos__play">
                                    <span className="videos__play-border"></span>
                                    <svg width="186" height="186" viewBox="0 0 186 186" fill="none">
                                        <path d="M76.5698 58.72L77.477 57.5254C77.0232 57.1808 76.4134 57.1231 75.903 57.3763C75.3926 57.6296 75.0698 58.1502 75.0698 58.72H76.5698ZM122.05 93.26L122.957 94.4546C123.33 94.1709 123.55 93.729 123.55 93.26C123.55 92.791 123.33 92.3491 122.957 92.0654L122.05 93.26ZM76.5698 127.8H75.0698C75.0698 128.37 75.3926 128.89 75.903 129.144C76.4134 129.397 77.0232 129.339 77.477 128.995L76.5698 127.8ZM1.50977 92.68L3.00977 92.68L3.00977 92.6797L1.50977 92.68ZM75.6626 59.9146L121.143 94.4546L122.957 92.0654L77.477 57.5254L75.6626 59.9146ZM121.143 92.0654L75.6626 126.605L77.477 128.995L122.957 94.4546L121.143 92.0654ZM78.0698 127.8V58.72H75.0698V127.8H78.0698ZM182.37 92.68C182.37 142.212 142.221 182.36 92.6898 182.36V185.36C143.878 185.36 185.37 143.868 185.37 92.68H182.37ZM92.6898 182.36C43.1582 182.36 3.00977 142.212 3.00977 92.68H0.00976746C0.00976746 143.868 41.5013 185.36 92.6898 185.36V182.36ZM3.00977 92.6797C2.99993 43.1484 43.1481 3 92.6798 3V0C41.4914 0 -0.000397067 41.4916 0.00976749 92.6803L3.00977 92.6797ZM92.6798 3C142.212 3 182.37 43.1486 182.37 92.68H185.37C185.37 41.4914 143.868 0 92.6798 0V3Z" fill="#F08B1D"/>
                                    </svg>
                                    <Picture
                                        sources = {[
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video02.jpg",
                                                media: "(max-width: 767px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video02.jpg",
                                                media: "(min-width: 1024px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video02.jpg",
                                                media: "(min-width: 768px)",
                                            },
                                        ]}
                                    />
                                </div>
                                <p>Como ter água fresca e gelo pronto na porta da minha geladeira?</p>
                            </div>
                            <div className="videos__gallery-wrap">
                                <div className="videos__play">
                                    <span className="videos__play-border"></span>
                                    <svg width="186" height="186" viewBox="0 0 186 186" fill="none">
                                        <path d="M76.5698 58.72L77.477 57.5254C77.0232 57.1808 76.4134 57.1231 75.903 57.3763C75.3926 57.6296 75.0698 58.1502 75.0698 58.72H76.5698ZM122.05 93.26L122.957 94.4546C123.33 94.1709 123.55 93.729 123.55 93.26C123.55 92.791 123.33 92.3491 122.957 92.0654L122.05 93.26ZM76.5698 127.8H75.0698C75.0698 128.37 75.3926 128.89 75.903 129.144C76.4134 129.397 77.0232 129.339 77.477 128.995L76.5698 127.8ZM1.50977 92.68L3.00977 92.68L3.00977 92.6797L1.50977 92.68ZM75.6626 59.9146L121.143 94.4546L122.957 92.0654L77.477 57.5254L75.6626 59.9146ZM121.143 92.0654L75.6626 126.605L77.477 128.995L122.957 94.4546L121.143 92.0654ZM78.0698 127.8V58.72H75.0698V127.8H78.0698ZM182.37 92.68C182.37 142.212 142.221 182.36 92.6898 182.36V185.36C143.878 185.36 185.37 143.868 185.37 92.68H182.37ZM92.6898 182.36C43.1582 182.36 3.00977 142.212 3.00977 92.68H0.00976746C0.00976746 143.868 41.5013 185.36 92.6898 185.36V182.36ZM3.00977 92.6797C2.99993 43.1484 43.1481 3 92.6798 3V0C41.4914 0 -0.000397067 41.4916 0.00976749 92.6803L3.00977 92.6797ZM92.6798 3C142.212 3 182.37 43.1486 182.37 92.68H185.37C185.37 41.4914 143.868 0 92.6798 0V3Z" fill="#F08B1D"/>
                                    </svg>
                                    <Picture
                                        sources = {[
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video03.jpg",
                                                media: "(max-width: 767px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video03.jpg",
                                                media: "(min-width: 1024px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video03.jpg",
                                                media: "(min-width: 768px)",
                                            },
                                        ]}
                                    />
                                </div>
                                <p>Como conservar os alimentos frescos por até 15 dias na minha geladeira?</p>
                            </div>
                            <div className="videos__gallery-wrap">
                                <div className="videos__play">
                                    <span className="videos__play-border"></span>
                                    <svg width="186" height="186" viewBox="0 0 186 186" fill="none">
                                        <path d="M76.5698 58.72L77.477 57.5254C77.0232 57.1808 76.4134 57.1231 75.903 57.3763C75.3926 57.6296 75.0698 58.1502 75.0698 58.72H76.5698ZM122.05 93.26L122.957 94.4546C123.33 94.1709 123.55 93.729 123.55 93.26C123.55 92.791 123.33 92.3491 122.957 92.0654L122.05 93.26ZM76.5698 127.8H75.0698C75.0698 128.37 75.3926 128.89 75.903 129.144C76.4134 129.397 77.0232 129.339 77.477 128.995L76.5698 127.8ZM1.50977 92.68L3.00977 92.68L3.00977 92.6797L1.50977 92.68ZM75.6626 59.9146L121.143 94.4546L122.957 92.0654L77.477 57.5254L75.6626 59.9146ZM121.143 92.0654L75.6626 126.605L77.477 128.995L122.957 94.4546L121.143 92.0654ZM78.0698 127.8V58.72H75.0698V127.8H78.0698ZM182.37 92.68C182.37 142.212 142.221 182.36 92.6898 182.36V185.36C143.878 185.36 185.37 143.868 185.37 92.68H182.37ZM92.6898 182.36C43.1582 182.36 3.00977 142.212 3.00977 92.68H0.00976746C0.00976746 143.868 41.5013 185.36 92.6898 185.36V182.36ZM3.00977 92.6797C2.99993 43.1484 43.1481 3 92.6798 3V0C41.4914 0 -0.000397067 41.4916 0.00976749 92.6803L3.00977 92.6797ZM92.6798 3C142.212 3 182.37 43.1486 182.37 92.68H185.37C185.37 41.4914 143.868 0 92.6798 0V3Z" fill="#F08B1D"/>
                                    </svg>
                                    <Picture
                                        sources = {[
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video04.jpg",
                                                media: "(max-width: 767px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video04.jpg",
                                                media: "(min-width: 1024px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/video04.jpg",
                                                media: "(min-width: 768px)",
                                            },
                                        ]}
                                    />
                                </div>
                                <p>Como ajustar a temperatura da minha geladeira?</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="posts">
                    <div className="posts__bg">
                    </div>

                    <div className="posts__header">
                        <p>Conteúdo selecionado <span>Brastemp Experience</span></p>
                        {this.postArrow()}
                    </div>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <div className="posts__itens" key={1}>
                                <a href="#" className="posts__itens-img" title="Link para o Post">
                                    <Picture
                                        sources = {[
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post01.jpg",
                                                media: "(max-width: 767px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post01.jpg",
                                                media: "(min-width: 1024px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post01.jpg",
                                                media: "(min-width: 768px)",
                                            },
                                        ]}
                                    />
                                </a>
                                <div className="posts__itens-txt">
                                    <h1>Como organizar a geladeira: dicas simples para não errar mais</h1>
                                    <small>22/04/2020 • Editoria</small>
                                    <p>
                                        Se você está se perguntando quem está fazendo pão 
                                        caseiro recentemente, a resposta é “todo o mundo.
                                        Dê uma olhada nas mídias sociais e isso parecerá 
                                        cada vez mais preciso...
                                    </p>
                                    <a href="#"  title="Continuar lendo">
                                        Continuar lendo
                                    </a>
                                </div>
                            </div>
                            <div className="posts__itens" key={2}>
                                <a href="#" className="posts__itens-img" title="Link para o Post">
                                    <Picture
                                        sources = {[
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post02.jpg",
                                                media: "(max-width: 767px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post02.jpg",
                                                media: "(min-width: 1024px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post02.jpg",
                                                media: "(min-width: 768px)",
                                            },
                                        ]}
                                    />
                                </a>
                                <div className="posts__itens-txt">
                                    <h1>Como limpar geladeira? O guia para limpar seu refrigerador</h1>
                                    <small>22/04/2020 • Editoria</small>
                                    <p>
                                        A geladeira é o aparelho da cozinha que nunca descansa. 
                                        Mesmo assim, provavelmente, você não limpa com a mesma 
                                        frequência que outras superfícies domésticas.
                                    </p>
                                    <a href="" className="txt"  title="Continuar lendo">
                                        Continuar lendo
                                    </a>
                                </div>
                            </div>
                            <div className="posts__itens" key={3}>
                                <a href="#" className="posts__itens-img" title="Link para o Post">
                                    <Picture
                                        sources = {[
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post03.jpg",
                                                media: "(max-width: 767px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post03.jpg",
                                                media: "(min-width: 1024px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post03.jpg",
                                                media: "(min-width: 768px)",
                                            },
                                        ]}
                                    />
                                </a>
                                <div className="posts__itens-txt">
                                    <h1>Da geladeira à lava-louça: os utensílios que aguçam os 5 sentidos na cozinha</h1>
                                    <small>22/04/2020 • Editoria</small>
                                    <p>
                                        Podemos dizer que, nos últimos 15 ou 20 anos, 
                                        a tecnologia transformou a maneira como vivemos. 
                                        E a maneira como cozinhamos não é exceção.
                                    </p>
                                    <a href="" className="txt"  title="Continuar lendo">
                                        Continuar lendo
                                    </a>
                                </div>
                            </div>
                            <div className="posts__itens" key={4}>
                                <a href="#" className="posts__itens-img" title="Link para o Post">
                                    <Picture
                                        sources = {[
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post04.jpg",
                                                media: "(max-width: 767px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post04.jpg",
                                                media: "(min-width: 1024px)",
                                            },
                                            {
                                                srcSet: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/Post04.jpg",
                                                media: "(min-width: 768px)",
                                            },
                                        ]}
                                    /> 
                                </a>
                                <div className="posts__itens-txt">
                                    <h1>Dicas e receitas de drinks para você surpreender!</h1>
                                    <small>22/04/2020 • Editoria</small>
                                    <p>
                                        Você está dando uma festinha ou tem um encontro. 
                                        Talvez você só queira aprender a arte do bartender 
                                        e impressionar algum convidado especial.
                                    </p>
                                    <a href="" className="txt"  title="Continuar lendo">
                                        Continuar lendo
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    
                </section>
            </div>
        )
    }
}
export default JaTenho;