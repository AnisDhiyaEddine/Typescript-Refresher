import { AxiosPromise } from 'axios';

interface modelAttributes<T> {
	get<K extends keyof T>(key: K): T[K];
	set(data: T): void;
	getAll(): T;
}

interface Events {
	on(eventNale: string, callback: () => void): void;
	trigger(eventName: string): void;
}

interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}

interface hasID {
	id?: number;
}

export class Model<T extends hasID> {
	constructor(
		private events: Events,
		private attributes: modelAttributes<T>,
		private sync: Sync<T>,
	) {}
	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	get get() {
		return this.attributes.get;
	}

	set(update: T) {
		this.attributes.set(update);
		this.events.trigger('change');
	}

	save(): void {
		this.sync.save(this.attributes.getAll());
		this.events.trigger('save');
	}
}
