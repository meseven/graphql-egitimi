// query resolvers
const Query = require('./Query');
const Director = require('./Director');
const Movie = require('./Movie');

// mutation resolvers
const Mutation = require('./mutation/index');

module.exports = {
	Query,
	Mutation,
	Director,
	Movie
};