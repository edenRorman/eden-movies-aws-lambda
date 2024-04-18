import { Router } from "express";

import movies from "./movies.route";
import users from "./users.route";

const router = Router();

router.use("/movies", movies);
router.use("/users", users);

export default router;
