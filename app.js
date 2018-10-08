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
  
  type Mutation{
  	createDirector(data: CreateDirectorInput!): Director!
  	createMovie(data: CreateMovieInput!): Movie! 
  }
  
  input CreateDirectorInput {
  	name: String!, 
  	birth: Int
  }
  
  input CreateMovieInput {
  	title: String!, 
  	description: String, 
  	year: Int!, 
  	directorId: ID!
  }
  
  type Director {
  	id: ID!
  	name: String!
  	birth: Int
  	movies: [Movie!]!
  }
  
  type Movie {
  	id: ID!
  	title: String!
  	description: String
  	year: Int!
  	director: Director!
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
	Mutation: {
		createDirector: (parent, args) => {
			const director = {
				id: Math.random().toString(36).substr(2,10),
				...args.data
			};
			directors.push(director);

			return director;
		},
		createMovie: (parent, args) => {
			const directorExists = directors.some(director => director.id === args.data.directorId);

			if (!directorExists) {
			  throw new Error('Director does not exists.');
			}

			const movie = {
				id: Math.random().toString(36).substr(2,10),
				...args.data
			};

			movies.push(movie);

			return movie;
		}
	},
	Movie: {
		director: (parent, args) => {
			return directors.find(director => director.id === parent.directorId)
		}
	},
	Director: {
		movies: (parent, args) => {
			return movies.filter(movie => movie.directorId === parent.id)
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);