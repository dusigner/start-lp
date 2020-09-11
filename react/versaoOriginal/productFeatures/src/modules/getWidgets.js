import LayoutData from '../helper';
import hasWidget from './hasWidget';
import $ from '../../../components/dataTree/src/self';

export default function getWidgets(component) {
    const { layout } = component.state.product;
    const { purchaseModules } = component.state;

		let widgets = [];

        if (hasWidget(layout, 'comprar', component)) {
            widgets.push(
                {
                    id: 0,
                    title: 'Comprar',
                    elm: () => component.modelCompra
                }
            )
        }

        if (hasWidget(layout, 'hero', component)) {
            widgets.push(
                {
                    id: 1,
                    title: 'Introdução',
                    elm: () => component.introducaoWidget
                }
            )
        }

        //Produtos G
        if (hasWidget(layout, 'external', component)) {
            widgets.push(
                {
                    id: 2,
                    title: 'Visão Externa',
                    elm: () => component.refExternal
                }
            )
        }

        //Produtos M
        if (hasWidget(layout, 'video', component) && $(component.state.product, "videos.video", null)) {
            const wVideo = {
                id: 3,
                title: 'Vídeo',
                elm: () => component.videoWidget
            }

            widgets.splice(1, 0, wVideo);
        }

        if (hasWidget(layout, 'killer', component)) {
            widgets.push(
                {
                    id: 4,
                    title: 'Diferenciais Exclusivos',
                    elm: () => component.difExcWidget
                }
            )
        }

        return widgets;
}