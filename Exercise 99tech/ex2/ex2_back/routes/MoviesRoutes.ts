import { Router, Request, Response } from 'express';
import Movies from '../models/MoviesModel';

const router = Router();


router.post('/movie', async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description, year, cast, director } = req.body;

        if (!title || !description || !year || !cast || !director) {
             res.status(400).json({ message: 'Title, description, year, cast, and director are required' });
             return; 
        }

        const newMovie = await Movies.create({
            title,
            description,
            year,
            cast,
            director
        });

        res.status(201).json(newMovie);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating movie' });
    }
});

router.get('/all_movies', async (req: Request, res: Response) => {
    try {
        const movies = await Movies.findAll();
        console.log(movies);
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching movies' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response = await Movies.findByPk(id);
        console.log(response);
        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching a movie' });
    }
});



router.put('/movie/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;  
        const { title, description, year, cast, director } = req.body;  

        const movie = await Movies.findByPk(id);

        if (!movie) {
            res.status(404).json({ message: 'Movie not found' });
            return;
        }

        if (!title && !description && !year && !cast && !director) {
            res.status(400).json({ message: 'At least one field (title, description, year, cast, director) must be provided for update' });
            return;
        }

        await movie.update({
            title: title || movie.title,  
            description: description || movie.description,
            year: year || movie.year,
            cast: cast || movie.cast,
            director: director || movie.director
        });

        res.status(200).json(movie);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating movie' });
    }
});




router.delete('/movie/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;  

        const movie = await Movies.findByPk(id);

        if (!movie) {
            res.status(404).json({ message: 'Movie not found' });
            return;
        }


        await movie.destroy();
            
        res.status(200).json({message: 'Movie deleted'});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating movie' });
    }
});

export default router;
