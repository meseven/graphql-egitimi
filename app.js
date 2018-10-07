const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// String, Int, ID, Boolean, Float
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
  	director: Director!
  	movie: Movie!
  }
  
  type Director {
  	id: ID!
  	name: String!
  	age: Int
  }
  
  type Movie {
  	id: ID!
  	title: String!
  	year: Int!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		director: () => ({
			id: 'alskjdlasd',
			name: 'Ahmet',
			age: 44
		}),
		movie: () => ({
			id: '1',
			title: 'The Godfather',
			year: 1960
		})
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);