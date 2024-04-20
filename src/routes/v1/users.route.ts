import { Request, Response, Router } from "express";
import { UserAlreadyExistError } from "../../dal/errors/UserAlredyExistError";
import { UsersDal } from "../../dal/usersDal";
import { FavoritesDal } from "../../dal/favoriteDal";
import randomMovies from "../../mocks/randomMovies";
import Movie from "../../MovieDataModel";

const router = Router();
const newUserDal = new UsersDal();
const newFavoriteDal = new FavoritesDal();

router.post("/:userName", async (req: Request, res: Response) => {
  try {
    await newUserDal.createUser(req.params["userName"]);
    res.sendStatus(200);
  } catch (error) {
    if (error instanceof UserAlreadyExistError) {
      res.sendStatus(409);
    } else {
      res.status(500).json(error);
    }
  }
});

router.get("/:userName", async (req: Request, res: Response) => {
  try {
    const exists = await newUserDal.userExist(req.params["userName"]);
    if (exists) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

router.get("/:userName/favorites/", async (req: Request, res: Response) => {
  try {
    const favoritesId = await newFavoriteDal.getUserFavorites(
      req.params["userName"]
    );
    let favoriteMovies: Movie[] = [];
    for (const favoriteId of favoritesId) {
      const fullMovie: Movie | undefined = randomMovies.find(
        (movie) => movie.id === favoriteId
      );
      if (fullMovie) {
        favoriteMovies.push(fullMovie);
      }
    }

    res.status(200).json(favoriteMovies);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

router.put(
  "/:userName/favorites/:movieId",
  async (req: Request, res: Response) => {
    try {
      await newFavoriteDal.insertUserFavorite(
        req.params["userName"],
        req.params["movieId"]
      );
      res.sendStatus(200);
    } catch (error) {
      console.error("An error ocurred:", error);
      res.status(500).json(error);
    }
  }
);

router.delete(
  "/:userName/favorites/:movieId",
  async (req: Request, res: Response) => {
    try {
      await newFavoriteDal.deleteUserFavorite(
        req.params["userName"],
        req.params["movieId"]
      );
      res.sendStatus(200);
    } catch (error) {
      console.error("An error ocurred:", error);
      res.status(500).json(error);
    }
  }
);

router.get(
  "/:userName/favorites/:movieId",
  async (req: Request, res: Response) => {
    try {
      const isFavorite = await newFavoriteDal.isUserFavorite(
        req.params["userName"],
        req.params["movieId"]
      );
      res.status(200).json(isFavorite);
    } catch (error) {
      console.error("An error ocurred:", error);
      res.status(500).json(error);
    }
  }
);

export default router;
