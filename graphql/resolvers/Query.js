const Query = {
	director: (parent, args, { db }) => {
		return db.directors.find(director => director.id === args.id)
	},
	directors: (parent, args, { db }) => db.directors,

	movie: (parent, args, { db }) => {
		return db.movies.find(movie => movie.id === args.id)
	},
	movies: (parent, args, { db }) => db.movies
};

module.exports = Query;