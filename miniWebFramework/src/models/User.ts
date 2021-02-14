interface userProps {
	name?: string;
	age?: number;
}

type Callback = () => void; //Type alias
export class User {
	events: { [key: string]: Callback[] } = {};

	constructor(private data: userProps) {}
	get(propName: string): number | string {
		return this.data[propName];
	}

	set(data: userProps): void {
		Object.assign(this.data, data);
	}

	on(eventName: string, callback: Callback): void {
		let handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger(eventName: string): void {
		let handlers = this.events[eventName] || [];
		if (!handlers.length) return;
		handlers.forEach((callback) => callback());
	}
}
