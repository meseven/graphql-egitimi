module.exports = {
	createDirector: (parent, args, { db }) => {
		const director = {
			id: Math.random().toString(36).substr(2,10),
			...args.data
		};
		db.directors.push(director);

		return director;
	}
};