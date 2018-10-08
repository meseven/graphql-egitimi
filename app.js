const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { importSchema } =  require('graphql-import');

const db = require('./data');

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		director: (parent, args, { db }) => {
			return db.directors.find(director => director.id === args.id)
		},
		directors: (parent, args, { db }) => db.directors,

		movie: (parent, args, { db }) => {
			return db.movies.find(movie => movie.id === args.id)
		},
		movies: (parent, args, { db }) => db.movies
	},
	Mutation: {
		createDirector: (parent, args, { db }) => {
			const director = {
				id: Math.random().toString(36).substr(2,10),
				...args.data
			};
			db.directors.push(director);

			return director;
		},
		createMovie: (parent, args, { db} ) => {
			const directorExists = db.directors.some(director => director.id === args.data.directorId);

			if (!directorExists) {
			  throw new Error('Director does not exists.');
			}

			const movie = {
				id: Math.random().toString(36).substr(2,10),
				...args.data
			};

			db.movies.push(movie);

			return movie;
		}
	},
	Movie: {
		director: (parent, args, { db }) => {
			return db.directors.find(director => director.id === parent.directorId)
		}
	},
	Director: {
		movies: (parent, args, { db }) => {
			return db.movies.filter(movie => movie.directorId === parent.id)
		}
	}
};

const server = new ApolloServer({
	typeDefs: importSchema('./graphql/schema/schema.graphql'),
	resolvers,
	context: {
		db
	}
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);