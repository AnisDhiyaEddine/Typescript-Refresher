import 'reflect-metadata';
import { Router } from 'express';
import { AppRouter } from '../../AppRouter';
import { Methods, MetadataKeys } from '../decoratores';

export function controller(routePrefix: string) {
	return function(target: Function) {
		const router = AppRouter.getInstance();

		for (let key in target.prototype) {
			const routeHandler = target.prototype[key];

			const path = Reflect.getMetadata(
				'path',
				target.prototype,
				key,
			);

			const method: Methods = Reflect.getMetadata(
				'method',
				target.prototype,
				key,
			);

			if (path) {
				router[method](
					routePrefix + path,
					routeHandler,
				);
			}
		}
	};
}
