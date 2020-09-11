import React, { Component } from 'react';
import Slider from "react-slick";
import './modulocompra-galeria.global.css';
import { GetDataUtils } from 'brastemp.components';
import { ModalFull } from 'brastemp.components';
import { Icon } from 'brastemp.components';

const sliderSetting = {
    centerMode: false,
    arrows: true,
    dots: false,
    vertical: false,
    verticalSwiping: false,
    infinite: false,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 4,
            }
        }
    ]
};


const initProduct = items => {
    const itemIndex = items.findIndex(item => item.sellers[0].commertialOffer.AvailableQuantity > 0);
    return itemIndex !== -1 ? items[itemIndex] : items[0];
}

const styleVideo = {
    "modal": {
        backgroundColor: '#fff',
        "height": "100vh",
        "width": "100%",
        "position": "fixed",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "left": "0",
        "top": "0px",
        "zIndex": "999",
        "transition": "0.3s linear",
        "overflowY": "auto"
    },
    "show": {
        "top": "0px"
    },
    "hide": {
        "top": "100%"
    },
    "modalButton": {
        "borderRadius": "50px",
        "position": "fixed",
        "right": "20px",
        "top": "20px",
        "cursor": "pointer",
        "color": "var(--orange)",
        "border": "none",
        "background": "transparent",
        "padding": "0px"
    },
    "modalButtonHideX": {
        "fontSize": "10px",
        "marginLeft": "10px",
        "position": "static",
        "padding": "0px"
    }
};
class moduloCompraGaleria extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: 'hide'
        };

        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    replaceUrlHttpToHttps = url => /^http:\/\//i.test(url) ? url.replace(/^http:\/\//i, 'https://') : url

    setImage = image => {
        this.setState({
            image,
            video: undefined
        })
    }

    setVideo = video => {
        this.setState({
            video,
            image: undefined
        })
    }


    resolverFlag = item => {
        while (item.indexOf(" ") !== -1) {
            item = item.replace(" ", "-");
        }

        return item;
    };

    generateThumb(url) {
        let last;

        const list = url.split('/').map(x => {
            let i = x;
            if (last == 'ids') {
                i = x + '-55-55';
            }
            last = x;
            return i;
        });

        return list.join('/');
    }

    renderThumbnails = images => {
        return images.map((image, index) => {
            if (image.videoThumb) {
                const thumbnailVideo = this.replaceUrlHttpToHttps(image.videoThumb);

                return (
                    <li onClick={() => this.setVideo(image)} className="box-gallery_image-slider" key={index}>
                        <Icon name="play" />
                        <img src={thumbnailVideo} className={image == this.state.video ? "active" : ""} />
                    </li>
                )
            } else {
                const thumbnailImage = this.replaceUrlHttpToHttps(image.imageUrl);
                return <li onClick={() => this.setImage(image.imageUrl)} key={index}><img src={this.generateThumb(thumbnailImage)} className={thumbnailImage == this.state.image ? "active" : ""} /></li>
            }
        });
    }

    componentDidMount = () => {
        let product = this.props.product

        const video = this.gerarVideo(this.props.properties)

        if (video && product.images && !product.images.find(vd => JSON.stringify(vd) == JSON.stringify(video))) {
            product.images.unshift(video)
        }

        this.setState({
            product: this.props.items.length > 1 ? initProduct(this.props.items) : product,
            image: !video ? this.props.items[0].images[0].imageUrl : this.props.items[0].images[1].imageUrl,
        });
    }

    gerarVideo(properties) {
        const idVideo = properties.find(prop => prop.name === "ID do vídeo");
        const thumbName = properties.find(prop => prop.name === "Thumbnail do vídeo");

        let objVideo;

        if (idVideo) {
            objVideo = {
                videoThumb: thumbName && thumbName.values ? `http://brastemp.vteximg.com.br/arquivos/${thumbName.values[0]}` : `http://i.ytimg.com/vi/${idVideo.values}/hqdefault.jpg`,
                urlYoutube: `https://www.youtube.com/embed/${idVideo.values[0]}?autoplay=1&fullscreen=1&enablejsapi=1&origin=https://${Location.host}`,
                idYoutube: idVideo.values[0]
            };
        }

        return objVideo;
    }

    abrirModal(event) {
        event.preventDefault();

        this.setState({ openModal: 'show' });
    }

    hideModal() {
        this.setState({ openModal: 'hide' })
    }

    render() {
        const { data, product, loading } = this.props;

        return (
            <div id="ModuloBoxGallery" className="box-gallery">
                <ModalFull id="modal" event={this.state.openModal} lockScroll={true} style={styleVideo} click={() => this.hideModal()}>
                    {this.renderIframeVideo()}
                </ModalFull>

                <div className="box-gallery_image" >

                    {
                        !this.state.video && (
                            <img src={this.state.image} />
                        )
                    }

                    {
                        this.state.video && (
                            <a href="#" className="box-gallery_link-youtube" onClick={(e) => this.abrirModal(e)}>
                                <span className="icon icon-youtube"></span>
                                <img src={this.replaceUrlHttpToHttps(this.state.video.videoThumb)} />
                            </a>
                        )
                    }


                </div>

                {product && (
                    <Slider {...sliderSetting}>
                        {this.renderThumbnails(product.images)}
                    </Slider>
                )}
            </div>
        )
    }

    youtubeAPIRastreamento() {
        setTimeout(() => {
            function onPlayerStateChange(event) {
                if (event.data == YT.PlayerState.PLAYING) {
                    dataLayer.push({
                        event: 'generic-event-trigger',
                        category: 'produto',
                        action: 'video_galeria ',
                        label: 'play '
                    });
                }
            }

            const player = new YT.Player('player', {
                videoId: this.state.video.idYoutube,
                events: {
                    // 'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }, 1)
    }

    renderIframeVideo() {
        if (this.state.video && this.state.openModal == 'show') {
            return (
                <div style={{ width: '90%', height: '80%' }} >
                    <iframe src={this.state.video.urlYoutube} id="player" width="100%" height="100%" scrolling="no" frameBorder="0" allow="accelerometer; autoplay; picture-in-picture; allowfullscreen;" allowtransparency="true" allowFullScreen="true"></iframe>
                    {this.youtubeAPIRastreamento()}
                </div>
            );
        }
    }
}


export default moduloCompraGaleria;
// export default GetDataUtils.productDataVtex(moduloCompraGaleria, props => ({
//     slug: props.slug || ""
// }));
