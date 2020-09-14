import { LayoutData } from '../helper';
import { GetDataUtils } from 'brastemp.components';

const hasWidget = (layout, widget, component) => {
    let test;
        const { querySchema={} } = component.props;
        switch (widget) {
            case 'comprar':
                test = LayoutData(layout, {
                    default: component.props.productVtex.items != null,
                    pp: null,
                })
                break;

            case 'hero':
                test = LayoutData(layout, {
                    pp: component.state.product,
                    parts: component.state.product,
                    m: (component.state.product.videos.heroShot || (component.state.product.images && component.state.product.images[0].urlImageHero)) && component.state.product.name,
                    default: (component.state.product.videos.heroShot || (component.state.product.images && component.state.product.images[0].urlImageHero)) && component.state.product.name && component.state.product.description
                })
                break;
            
            case 'video':
                test = LayoutData(layout, {
                    m: component.state.product,
                    default: null,
                })
                break;

            case 'external':
            test = LayoutData(layout, { 
                parts: null,
                pp: null,
                m: null,
                default: (component.state.product.features.external.video || component.state.product.features.external.mobileImage) && component.state.product.features.external.title,
            })
            break;

            case 'killer':
				test = LayoutData(layout, {
                    'g-black': (component.state.product.videos.KillerFeatures.video || component.state.product.videos.KillerFeatures.imagem) && component.state.product.highlightsTitle && component.state.product.killerfeature.title && component.state.product.killerfeature.description_short,
                    g: (component.state.product.videos.KillerFeatures.video || component.state.product.videos.KillerFeatures.imagem) && component.state.product.highlightsTitle && component.state.product.killerfeature.title && component.state.product.killerfeature.description_short,
                    default: component.state.product,
                })
                break;

            case 'especificacoes':
                test = LayoutData(layout,
                    {
                        parts: component.state.product != null,
                        default: component.state.product.especificacoesTecnicas != null,
                    })
                break;

            case 'Especificações técnicas':
                test = LayoutData(layout, {
                    parts: component.state.product != null,
                })
                break;

            case 'internal':
                test = LayoutData(layout, {
                    parts: null,
                    pp: null,
                    m: null,
                    default: (component.state.product.features.internal.video || component.state.product.features.internal.mobileImage) && component.state.product.features.internal.title,
                })
                break;

            case 'loja':
                test = LayoutData(layout, {
                    default: component.props.data.variables.tag != null,
                })
                break;
    
            case 'instalacao':
                test = LayoutData(layout, {
                    default: component.state.product.statusInstalacao != null,
                })
                break;
            
            case 'Saiba Mais':
                test = LayoutData(layout, {
                    default: component.state.product != null,
                })
                break;

            case 'pecasAcessorios':
                test = LayoutData(layout, {
                    parts: null,
                    default: component.state.product.partsAccessoriesSkus != null && querySchema.activeLoja === true,
                })
                break;

            case 'relacionados':
            test = LayoutData(layout, {  
                m: component.state.product.relatedProducts != null,
                g: component.state.product.relatedProducts != null,
                default: null
            })
            break;

            case 'assEspWidget':
                test = LayoutData(layout, {
                    parts: null,
                    pp: component.state.product != null,
                    m: component.state.product != null,
                    g: component.state.product != null,
                    default: component.state.product != null,
                })
                break;

            case 'chaordic':
                test = LayoutData(layout, {
                    m: component.state.product != null,
                    g: component.state.product != null,
                    default: null
                })
            break;

            case 'Produtos Compatíveis':
                test = LayoutData(layout, {
                    parts: component.state.product != null,
                    default: null
                })
                break;
        }
        return test;
}

export default hasWidget;