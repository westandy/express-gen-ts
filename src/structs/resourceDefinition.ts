import { Handler } from '@jagql/framework';

export interface ResourceDefinition {
    resource: string;
    handlers: Handler;
    attributes: any;
    relationships?: any;
}
