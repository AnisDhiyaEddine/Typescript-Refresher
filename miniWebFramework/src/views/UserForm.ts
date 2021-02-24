import { User } from '../models/User';

export class UserForm {
	constructor(
		public parent: Element,
		public model: User,
	) {
		this.bindModel();
	}

	bindModel(): void {
		this.model.on('change', () => this.render());
	}
	//Return all possible events on a UserForm instance
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.setRandomAge': this.setRandomAge,
			'click:.setName': this.setName,
		};
	}

	setName = (): void => {
		let input = this.parent.querySelector('input');
		if (input) {
			let name = input.value;
			this.model.set({ name });
		}
	};
	setRandomAge = (): void => {
		this.model.setRandomAge();
	};

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

	template(): string {
		return `
    <div>
    <h1> Hello world </h1>
    <input placeholder="enter a name"/>
		<button class="setName">setName</button>
		<button class="setRandomAge">setRandomAge</button>

		<div>User name: ${this.model.get('name')}</div>
		<div>User age: ${this.model.get('age')}</div>

    <div>
    `;
	}

	render(): void {
		this.parent.innerHTML = '';
		let htmlElement = document.createElement(
			'template',
		);
		htmlElement.innerHTML = this.template();
		this.bindEvents(htmlElement.content);
		this.parent.append(htmlElement.content);
	}
}
