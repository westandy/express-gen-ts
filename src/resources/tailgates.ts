import jsonApi from '@jagql/framework';
import { memoryHandler } from '../handlers';
import { ResourceDefinition } from 'src/structs';

export const tailgates = (jagql: any): ResourceDefinition => {
    const definition: ResourceDefinition = {
        resource: 'tailgates',
        handlers: memoryHandler(),
        attributes: {
            pipe: jagql.Joi.one('pipes'),
            plant: jagql.Joi.one('plants')
        }
    };
    jagql.define(definition);
    return definition;
};
