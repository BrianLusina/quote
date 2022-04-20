export default {
    api: {
        token: process.env.GITHUB_TOKEN,
        graphQlUrl: process.env.GITHUB_GRAPHQL_URL || 'https://api.github.com/graphql',
        restUrl: process.env.GITHUB_REST_API_URL || 'https://api.github.com',
    }
};
