const Movie = require('../models/Movie');
const pool = require('../db'); 

class MovieRepository {
  static getAll() {
    return Movie.getAll();
  }

  static getById(id) {
    return Movie.getById(id);
  }

  static add(title, genres, year, photoPath) {
    return Movie.add(title, genres, year, photoPath);
  }

  static update(id, title, genres, year, photoPath) {
    return Movie.update(id, title, genres, year, photoPath);
  }

  static delete(id) {
    return Movie.delete(id);
  }

  static async uploadPhoto(id, photoPath) {
    const query = 'UPDATE movies SET photo = $1 WHERE id = $2 RETURNING *';
    const { rows } = await pool.query(query, [photoPath, id]);
    return rows[0];
  }
}

module.exports = MovieRepository;
