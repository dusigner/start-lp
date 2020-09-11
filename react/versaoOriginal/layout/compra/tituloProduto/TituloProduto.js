
import React, { Component } from 'react';

export default class TituloProduto extends Component {
    constructor(props) {
        super(props);

    }

    splitTitle(title, index) {
        return title.split("Brastemp")[index];
    }

    render() {

        const { product, productData } = this.props;
        const regexvoltagem = /(\d\d\dv|BIVOLT)$/gi;
        let titulo;
        let subtitulo;
        let type

        if(productData) {
            type = regexvoltagem.test(product.name) && 'eletrodomesticos'
                || (productData.department == 'Peças de Reposição') && 'pecas'
                || (productData.categoryName == "Bebidas") && 'capsulas';
        }

        switch (type) {

            case 'eletrodomesticos':

                const tituloSplit = this.splitTitle(product.nameComplete, 1) || '';
                subtitulo = product.complementName + " • " + this.splitTitle(product.nameComplete, 0);
                titulo = (
                    <>
                        {tituloSplit.replace(regexvoltagem, '')}
                        <span className="description--voltage">
                        •  {product.name}
                        </span>
                    </>
                );

                break;
            case 'capsulas':

                subtitulo = product.complementName + ' • Cápsula';
                titulo = product.nameComplete;
                

                break;
            case 'pecas':

                subtitulo = product.complementName + ' • Peça de Reposição';
                titulo = this.splitTitle(product.nameComplete, 0) || product.nameComplete;

                break;
            default:
                break;
        }



        return <>
            <h3 className="description--subtitulo">
                {subtitulo}
            </h3>
            <h4 className="description--titulo">
                {titulo}
            </h4>
        </>
    }
} 
