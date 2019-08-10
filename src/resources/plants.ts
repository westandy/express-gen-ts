import jsonApi from '@jagql/framework';
import { memoryHandler } from '../handlers';
import { ResourceDefinition } from 'src/structs';

export const plants = (jagql: any): ResourceDefinition => {
    const definition: ResourceDefinition = {
        resource: 'plants',
        handlers: memoryHandler(),
        attributes: {
            name: jsonApi.Joi.string(),
            subregion: jsonApi.Joi.string(),
            region: jsonApi.Joi.string(),
            scheduler: jsonApi.Joi.string()
        }
    };
    jagql.define(definition);
    return definition;
};
