export default {
    api: {
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
        restUrl: process.env.REST_API_URL || '/api/v1/quotes',
    }
};
