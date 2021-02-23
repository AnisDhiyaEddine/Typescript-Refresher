import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Model } from './Model';
import { Sync } from './ApiSync';
import { Collection } from './Collection';

export interface userProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<userProps> {
	static buildUser(attrs: userProps): User {
		return new User(
			new Eventing(),
			new Attributes<userProps>(attrs),
			new Sync<userProps>(rootUrl),
		);
	}

	static buildUserCollection(
		json,
	): Collection<User, userProps> {
		return new Collection<
			User,
			userProps
		>(rootUrl, (json: userProps) =>
			this.buildUser(json),
		);
	}
}
