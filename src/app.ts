import express from "express";
import serverless from "serverless-http";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).send();
  }
);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(err.status || 500).send();
  }
);

export const handler = serverless(app);
