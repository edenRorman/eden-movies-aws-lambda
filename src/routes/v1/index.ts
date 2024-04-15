import { Router } from "express";

import movies from "./movies.route";

const router = Router();

router.use("/movies", movies);

export default router;
