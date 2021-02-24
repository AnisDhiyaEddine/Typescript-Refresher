import { User, userProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, userProps> {
	//Return all possible events on a UserForm instance

	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.setRandomAge': this.setRandomAge,
			'click:.setName': this.setName,
			'click:.saveUser': this.saveUser,
		};
	}

	saveUser = (): void => {
		this.model.save();
	};

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

	template(): string {
		return `
    <div>
    <h1> Hello world </h1>
    <input placeholder="${this.model.get('name')}"/>
		<div>User name: ${this.model.get('name')}</div>
		<div>User age: ${this.model.get('age')}</div>

		<button class="setName">setName</button>
		<button class="setRandomAge">setRandomAge</button>
		<button class="saveUser">save user</button>

    <div>
    `;
	}
}
