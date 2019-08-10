import jagql, { ApiConfig } from '@jagql/framework';
import { photos, plants, pipes, tailgates } from './resources';

// Create configuration for server
jagql.setConfig({
    port: 3000,
    graphiql: true
} as ApiConfig);

jagql.start(() => {
    const photosDef = photos(jagql);
    const plantsDef = plants(jagql);
    const pipesDef = pipes(jagql);
    const tailgatesDef = tailgates(jagql);
});
