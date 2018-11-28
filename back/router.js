const express = require('express');
const searchMovies = require('./searchmovies');

exports.router = (() => {
    const api = express.Router();

    api.route('/movies').post(searchMovies);
    return api;
})();