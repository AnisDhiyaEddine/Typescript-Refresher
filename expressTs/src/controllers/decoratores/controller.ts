import { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods, MetadataKeys } from '../decoratores';
import { bodyValidator } from './bodyValidator';

function validatorMiddleware(keys: string[]) {
	return function(
		req: Request,
		res: Response,
		next: NextFunction,
	) {
		if (!req.body) {
			res.status(422).send('Invalid request');
			return;
		}

		keys.forEach((key) => {
			if (!req.body[key]) {
				res.status(422).send('Invalid request');
				return;
			}
		});

		next();
	};
}

export function controller(routePrefix: string) {
	return function(target: Function) {
		const router = AppRouter.getInstance();

		for (let key in target.prototype) {
			const routeHandler = target.prototype[key];

			const path = Reflect.getMetadata(
				MetadataKeys.path,
				target.prototype,
				key,
			);

			const method: Methods = Reflect.getMetadata(
				MetadataKeys.method,
				target.prototype,
				key,
			);

			const middlewares =
				Reflect.getMetadata(
					MetadataKeys.middleware,
					target.prototype,
					key,
				) || [];

			const keys =
				Reflect.getMetadata(
					MetadataKeys.validator,
					target.prototype,
					key,
				) || [];

			const validator = validatorMiddleware(keys);

			if (path) {
				router[method](
					routePrefix + path,
					...middlewares,
					validator,
					routeHandler,
				);
			}
		}
	};
}
