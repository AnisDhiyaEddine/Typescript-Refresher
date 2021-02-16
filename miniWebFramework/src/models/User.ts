import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface userProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = 'http://localhost:3000/users';
export class User {
	public events: Eventing = new Eventing();
	public sync: Sync<userProps> = new Sync<userProps>(
		rootUrl,
	);
	public attributes: Attributes<userProps>;

	constructor(attrs: userProps) {
		this.attributes = new Attributes<userProps>(attrs);
	}
}
