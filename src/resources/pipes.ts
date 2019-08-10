import jsonApi from '@jagql/framework';
import { memoryHandler } from '../handlers';
import { ResourceDefinition } from 'src/structs';

export const pipes = (jagql: any): ResourceDefinition => {
    const definition: ResourceDefinition = {
        resource: 'pipes',
        handlers: memoryHandler(),
        attributes: {
            name: jsonApi.Joi.string()
        }
    };
    jagql.define(definition);
    return definition;
};
