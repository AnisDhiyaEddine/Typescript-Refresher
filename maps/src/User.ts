import faker from 'faker';
import { mappable } from './CostumMap';

export class User implements mappable {
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	content(): string {
		return `user name is ${this.name}`;
	}

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}
}
