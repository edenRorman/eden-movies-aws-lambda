import { Request, Response, Router } from "express";
import randomMovies from "../../mocks/randomMovies";
import upcomimg from "../../mocks/upcomingMovies";
import moviesGenres from "./moviesGenres.route";

const router = Router();
router.use("/genres", moviesGenres);

router.get("/random", async (req: Request, res: Response) => {
  try {
    res.status(200).json(randomMovies);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

router.get("/upcomimg", async (req: Request, res: Response) => {
  try {
    res.status(200).json(upcomimg);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const moviesById = randomMovies.filter((movie) =>
      movie.id.includes(req.params["id"])
    );

    if (moviesById.length === 0) {
      res.status(404).json();
    } else {
      res.status(200).json(moviesById[0]);
    }
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

router.get("/:title", async (req: Request, res: Response) => {
  try {
    const moviesById = randomMovies.filter((movie) =>
      movie.title.includes(req.params["title"])
    );
    res.status(200).json(moviesById);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

export default router;
