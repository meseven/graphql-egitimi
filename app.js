const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// String, Int, ID, Boolean, Float
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
  	id: ID!
    name: String
    surname: String
    age: Int
    isAdmin: Boolean
    score: Float
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		id: () => 'assndkjasd123',
		name: () => 'Mehmet',
		surname: () => 'Seven',
		age: () => 26,
		isAdmin: () => false,
		score: () => 4.6
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);