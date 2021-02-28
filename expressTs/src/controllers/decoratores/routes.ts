import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';

interface RequestDescriptor extends PropertyDescriptor {
	value?: RequestHandler;
}

export function rootBinder(method: string) {
	return function(path: string) {
		return function(
			target: any,
			key: string,
			desc: RequestDescriptor,
		) {
			Reflect.defineMetadata(
				MetadataKeys.path,
				path,
				target,
				key,
			);

			Reflect.defineMetadata(
				MetadataKeys.method,
				method,
				target,
				key,
			);
		};
	};
}

export const get = rootBinder(Methods.get);
export const post = rootBinder(Methods.post);
export const del = rootBinder(Methods.del);
export const put = rootBinder(Methods.put);
export const patch = rootBinder(Methods.patch);
