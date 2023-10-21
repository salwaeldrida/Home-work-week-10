const pool = require('../db');

class Movie {
  static async getAll() {
    const query = 'SELECT * FROM movies';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async getById(id) {
    const query = 'SELECT * FROM movies WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  static async add(title, genres, year, photoPath) {
    const query = 'INSERT INTO movies (title, genres, year, photo) VALUES ($1, $2, $3, $4) RETURNING *';
    const { rows } = await pool.query(query, [title, genres, year, photoPath]);
    return rows[0];
  }

  static async update(id, title, genres, year, photoPath) {
    const query = 'UPDATE movies SET title = $1, genres = $2, year = $3, photo = $4 WHERE id = $5 RETURNING *';
    const { rows } = await pool.query(query, [title, genres, year, photoPath, id]);
    return rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM movies WHERE id = $1 RETURNING *';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }
}

module.exports = Movie;
