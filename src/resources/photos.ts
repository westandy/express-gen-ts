import jsonApi from '@jagql/framework';
import { memoryHandler } from '../handlers';
import { ResourceDefinition } from 'src/structs';

export const photos = (jagql: any): ResourceDefinition => {
    const definition: ResourceDefinition = {
        resource: 'photos',
        handlers: memoryHandler(),
        attributes: {
            title: jsonApi.Joi.string(),
            url: jsonApi.Joi.string().uri(),
            height: jsonApi.Joi.number()
                .min(1)
                .max(10000)
                .precision(0),
            width: jsonApi.Joi.number()
                .min(1)
                .max(10000)
                .precision(0)
        }
    };
    jagql.define(definition);
    return definition;
};
