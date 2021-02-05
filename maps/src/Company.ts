import faker from 'faker';
import { mappable } from './CostumMap';

export class Company implements mappable {
	name: string;
	location: {
		lat: number;
		lng: number;
	};

	content(): string {
		return `company: ${this.name}
		`;
	}
	constructor() {
		this.name = faker.company.companyName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}
}
