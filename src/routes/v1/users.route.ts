import { Request, Response, Router } from "express";
import { UserAlreadyExistError } from "../../dal/errors/UserAlredyExistError";
import { UsersDal } from "../../dal/usersDal";

const router = Router();
const newUserDal = new UsersDal();

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

export default router;
