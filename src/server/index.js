const { GraphQLServer } = require('graphql-yoga');
const fs = require('fs');
const merge = require('lodash/merge');
const { static } = require('express');

require('./events/listener');

const restaurantResolvers = require('./resolvers/restaurant');
const searchesResolvers = require('./resolvers/searches');

const typeDefs = fs.readFileSync(__dirname + '/schema.graphql', 'utf8');

const resolvers = merge(restaurantResolvers, searchesResolvers);

const server = new GraphQLServer({ typeDefs, resolvers });

const options = {
    port: 5000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
    uploads: false,
};

server.start(options, ({ port }) =>
    console.log(`Server is running on localhost:${port}`)
);

server.express.use(static('build'));
