import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface userProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	public events: Eventing = new Eventing();
	constructor(private data: userProps) {}
	get(propName: string): number | string {
		return this.data[propName];
	}

	set(data: userProps): void {
		Object.assign(this.data, data);
	}

	fetch(): void {
		axios
			.get(
				`http://localhost:3000/users/${this.get(
					'id',
				)}`,
			)
			.then((response: AxiosResponse) => {
				this.set(response.data);
			});
	}

	save(): void {
		if (this.get('id')) {
			// Put request
			axios.put(
				`http://localhost:3000/users/${this.get(
					'id',
				)}`,
				this.data,
			);
		} else {
			axios.post(
				'http://localhost:3000/users',
				this.data,
			);
		}
	}
}
