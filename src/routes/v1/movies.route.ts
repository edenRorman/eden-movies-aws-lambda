import { Request, Response, Router } from "express";
import randomMovies from "../../mocks/randomMovies";

const router = Router();

router.get("/random", async (req: Request, res: Response) => {
  try {
    res.status(200).json(randomMovies);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

export default router;
