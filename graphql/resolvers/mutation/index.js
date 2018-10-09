const director = require('./director.mutation');
const movie = require('./movie.mutation');

const Mutation = {
	...director,
	...movie
};

module.exports = Mutation;