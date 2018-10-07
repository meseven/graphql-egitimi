const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const { directors, movies } = require('./data');

// String, Int, ID, Boolean, Float
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
  	director(id: ID!): Director!
  	directors: [Director!]!
  	
  	movie(id: ID!): Movie!
  	movies: [Movie!]!
  }
  
  type Director {
  	id: ID!
  	name: String!
  	birth: Int
  }
  
  type Movie {
  	id: ID!
  	title: String!
  	description: String
  	year: Int!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		director: (parent, args) => {
			return directors.find(director => director.id === args.id)
		},
		directors: () => directors,

		movie: (parent, args) => {
			return movies.find(movie => movie.id === args.id)
		},
		movies: () => movies
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);