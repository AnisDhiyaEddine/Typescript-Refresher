import { Model } from '../models/Model';
import { User } from '../models/User';

export abstract class View<T extends Model<K>, K> {
	regions: { [key: string]: Element } = {};
	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	abstract template(): string;

	eventsMap(): { [key: string]: () => void } {
		return {};
	}

	regionsMap(): { [key: string]: string } {
		return {};
	}

	bindModel(): void {
		this.model.on('change', () => this.render());
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();
		for (let key in eventsMap) {
			const [ eventName, selector ] = key.split(':');
			fragment
				.querySelectorAll(selector)
				.forEach((element) => {
					element.addEventListener(
						eventName,
						eventsMap[key],
					);
				});
		}
	}

	mapRegions(fragment: DocumentFragment): void {
		const regionsMap = this.regionsMap();

		for (let key in regionsMap) {
			const selector = regionsMap[key];
			const element = fragment.querySelector(
				selector,
			);

			if (element) {
				this.regions[key] = element;
			}
		}
	}

	onRender(): void {}

	render(): void {
		this.parent.innerHTML = '';
		let htmlElement = document.createElement(
			'template',
		);
		htmlElement.innerHTML = this.template();
		this.bindEvents(htmlElement.content);
		this.mapRegions(htmlElement.content);
		this.onRender();
		this.parent.append(htmlElement.content);
	}
}
