type Callback = () => void; //Type alias

export class Eventing {
	events: { [key: string]: Callback[] } = {};

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
