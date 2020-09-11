import {
    Utils
} from 'brastemp.components';

const GetHeroImage = (heroList, model) => {
    var url = null;
    if (heroList != null) {
        heroList.forEach(item => {
            var modelHero = Utils.dataTree(item, "model", null)
            if (modelHero != null && modelHero === model) {
                url = Utils.dataTree(item, "url_image", null)
            }
        });
        return url;
    }
}

const GetSku = (slug) => {
    if (slug != null) {
        var array = slug.split("-");
        var sku = array[array.length - 1];
        return sku;
    }
}

const GetSlug = (model, listSlug) => {

    var slug = null;

    if (listSlug != null) {
        listSlug.forEach(item => {
            var array = item.slug.split("-");
            var sku = array[array.length - 1].toUpperCase();
            if (model != null && model === sku) {
                slug = item.slug
            }

        });
    }

    return slug
}

const ResolverImages = (imagesCardList, heroList, associacaoVtex) => {
    if (imagesCardList != null) {
        const imagesList = imagesCardList.map((item, index) => {
            var cor = Utils.dataTree(item, "taxonomy_cores[0]", null);

            var imageItem = {
                id: index,
                urlImage: Utils.dataTree(item, "url_image", null),
                urlImageHero: GetHeroImage(heroList, Utils.dataTree(item, "model", null)),
                model: Utils.dataTree(item, "model", null),
                color: Utils.dataTree(cor, "color_hex", null),
                colorDescription: Utils.dataTree(cor, "description", null),
                colorName: Utils.dataTree(cor, "name", null),
                colorSlug: Utils.dataTree(cor, "slug", null),
                slug: GetSlug(Utils.dataTree(item, "model", null), associacaoVtex)
            }
            return imageItem
        });

        return imagesList
    }
    return null;
}

const isParts = (product) => {
    const productType = product.properties.find(prop => prop.name === "Tipo do produto")

    if(!productType) {
        const partsCategory = product.categories.find(category => category.replace(/\//g, "") === "Peças de Reposição");

        return !!partsCategory
    } else {

        return (productType.values[0] === "Peça de Reposição");
    }
}

const ProductDataSchema = (data, productQuery, params) => {

    let relatedProducts = null;
    let compatibleModels = null;
    let partsAccessoriesSkus = [];
    let buy = [];

    if (!productQuery.loading) {
        relatedProducts = Utils.dataTree(productQuery.product.recommendations, "view", []), // lista de produtos relacionados
            buy = Utils.dataTree(productQuery.product.recommendations, "buy", []), // lista de produtos relacionados
            compatibleModels = productQuery.product.properties[7] ? Utils.getSkusMaxIndex(productQuery.product.properties[7].values[0].replace(/\s+/g, ''), 10) : '';
        partsAccessoriesSkus = Utils.getSkusMaxIndex(productQuery.product.properties[0].values[0].replace(/\s+/g, ''), 10); // objeto com 2 skus de pecas relacionadas
    }

    return {
        relatedProducts: relatedProducts,
        partsAccessoriesSkus: partsAccessoriesSkus,
        compatibleModels: compatibleModels,
        buy: buy,
        modelSku: Utils.dataTree(data, "getProductInfo[0].product.model_sku", null),
        categoria: {
            name: Utils.dataTree(data, "getProductInfo[0].taxonomy.category[0].name", null),
            slug: Utils.dataTree(data, "getProductInfo[0].taxonomy.category[0].slug", null),
        },
        especificacoesTecnicas: {
            features: Utils.dataTree(data, "getProductInfo[0].technical.features_list", null),
            measures: Utils.dataTree(data, "getProductInfo[0].technical.measures_list", null),
        },
        name: Utils.dataTree(data, "getProductInfo[0].product.name", null),
        description: Utils.dataTree(data, "getProductInfo[0].product.description", null),
        images: ResolverImages(Utils.dataTree(data, "getProductInfo[0].product.cardimage_list", null), Utils.dataTree(data, "getProductInfo[0].product.hero_list", null), Utils.dataTree(data, "getProductInfo[0].taxonomy.associacao_vtex", null)),
        mainFeature: {
            image: Utils.dataTree(data, "getProductInfo[0].product.cardimage_list[0].url_image", null),
            listFeature: Utils.dataTree(data, "getProductInfo[0].product.features_list", null)
        },
        colors: Utils.dataTree(data, "getProductInfo[0].taxonomy.cores", null),
        videos: {
            imagemVideo: Utils.dataTree(data, "getProductInfo[0].product.video_do_produto[0].url_thumbnail_do_video", null),
            video: Utils.dataTree(data, "getProductInfo[0].product.video_do_produto[0].url_do_video", null),
            KillerFeatures: {
                video: Utils.dataTree(data, "getProductInfo[0].product.videos.KillerFeatures[0].url_Link", null)
            },
            heroShot: Utils.dataTree(data, 'getProductInfo[0].product.videos.url_HeroShot', null)
        },
        statusInstalacao: Utils.dataTree(data, "getProductInfo[0].status_instalacao", null),
        documentos: Utils.dataTree(data, "getProductInfo[0].documents", null),
        slug: Utils.dataTree(params, "params.slug", null),
        sku: GetSku(Utils.dataTree(params, "slug", null)),
        layout: isParts(productQuery.product) ? "parts" : Utils.dataTree(data, "getProductInfo[0].product.layout", null),
        killerfeature: Utils.dataTree(data, "getProductInfo[0].highlights.killerfeature", null),
        highlightsTitle: Utils.dataTree(data, "getProductInfo[0].highlights.section_title", 'Destaque'),
        highlightsListName: Utils.dataTree(data, "getProductInfo[0].highlights.list_name", null),
        features: {
            external: {
                title: Utils.dataTree(data, "getProductInfo[0].external.section_title", 'Diferenciais Exclusivos'),
                featuresList: Utils.dataTree(data, "getProductInfo[0].external.features_list", []),
                video: Utils.dataTree(data, "getProductInfo[0].product.videos.url_External", null),
                listName: Utils.dataTree(data, "getProductInfo[0].external.list_name", null),
                mobileImage: Utils.dataTree(data, "getProductInfo[0].external.url_section_background", null)
            },
            internal: {
                title: Utils.dataTree(data, "getProductInfo[0].internal.section_title", null),
                featuresList: Utils.dataTree(data, "getProductInfo[0].internal.features_list", []),
                video: Utils.dataTree(data, "getProductInfo[0].product.videos.url_Internal", null),
                listName: Utils.dataTree(data, "getProductInfo[0].internal.list_name", null),
                mobileImage: Utils.dataTree(data, "getProductInfo[0].internal.url_section_background", null)
            }
        }
    }
}

export default ProductDataSchema;
