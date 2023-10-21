const MovieRepository = require('../repositories/MovieRepository');

class MovieController {
  static async getAll(req, res) {
    try {
      const movies = await MovieRepository.getAll();
      res.json(movies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const movie = await MovieRepository.getById(id);
      if (!movie) {
        res.status(404).json({ error: 'Movie Not Found' });
      } else {
        res.json(movie);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async add(req, res) {
    const { title, genres, year } = req.body;
    const photoPath = req.file.path; // Ambil path foto dari file yang diunggah

    try {
      const movie = await MovieRepository.add(title, genres, year, photoPath);
      res.status(201).json(movie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { title, genres, year } = req.body;
    const photoPath = req.file.path; // Ambil path foto dari file yang diunggah

    try {
      const movie = await MovieRepository.update(id, title, genres, year, photoPath);
      if (!movie) {
        res.status(404).json({ error: 'Movie Not Found' });
      } else {
        res.json(movie);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      const movie = await MovieRepository.delete(id);
      if (!movie) {
        res.status(404).json({ error: 'Movie Not Found' });
      } else {
        res.json(movie);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async uploadPhoto(req, res) {
    const { id } = req.params;
    const photoPath = req.file.path;
  
    try {
      const updatedMovie = await MovieRepository.uploadPhoto(id, photoPath);
  
      if (updatedMovie) {
        res.json(updatedMovie);
      } else {
        res.status(404).json({ error: 'Movie Not Found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
}

module.exports = MovieController;
