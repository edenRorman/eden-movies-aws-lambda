import { Request, Response, Router } from "express";
import allGenres from "../../mocks/genresList";
import randomMovies from "../../mocks/randomMovies";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json(allGenres);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

router.get("/:genreName", async (req: Request, res: Response) => {
  try {
    const moviesByGenres = randomMovies.filter((movie) =>
      movie.genres.includes(req.params["genreName"])
    );
    res.status(200).json(moviesByGenres);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

export default router;
