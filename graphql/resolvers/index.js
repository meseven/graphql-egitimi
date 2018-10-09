// query resolvers
const Query = require('./query/Query');
const Director = require('./query/Director');
const Movie = require('./query/Movie');

// mutation resolvers
const Mutation = require('./mutation/index');

module.exports = {
	Query,
	Mutation,
	Director,
	Movie
};