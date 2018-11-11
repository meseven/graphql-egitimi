const Director = {
	movies: (parent, args, { db }) => {
		return db.movies.filter(movie => movie.directorId === parent.id)
	}
};

module.exports = Director;