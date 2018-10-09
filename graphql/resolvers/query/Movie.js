const Movie = {
	director: (parent, args, { db }) => {
		return db.directors.find(director => director.id === parent.directorId)
	}
};

module.exports = Movie;