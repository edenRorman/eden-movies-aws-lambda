import serverlessMysql, { ServerlessMysql } from "serverless-mysql";
import { UserAlreadyExistError } from "./errors/UserAlredyExistError";

type MySqlError = { code: string };
interface UserModel {
  userName: string;
}

export class UsersDal {
  mysql: ServerlessMysql;

  constructor() {
    this.mysql = serverlessMysql();
    this.mysql.config({
      host: process.env.RDS_HOSTNAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      port: parseInt(process.env.RDS_PORT!!),
      database: "moviesDb",
    });
    console.log("created mysql");
  }

  async createUser(userName: string): Promise<void> {
    try {
      const insertUsers = `INSERT INTO moviesDb.USERS (userName) VALUES (?)`;
      console.log("about to run query: " + insertUsers);
      await this.mysql.query(insertUsers, [userName]);
      console.log("ran insertUsers query successfully");
    } catch (err) {
      console.log("an error occured in createUser");
      console.log(err);
      if (err instanceof Error && Object.hasOwn(err, "code")) {
        const ObjError = err as unknown as MySqlError;
        if (ObjError.code === "ER_DUP_ENTRY") {
          throw new UserAlreadyExistError();
        }
      }
      throw err;
    } finally {
      await this.mysql.end();
      console.log("ended mysql");
    }
  }

  async userExist(userName: string): Promise<boolean> {
    const selectUsers: string = `SELECT * FROM moviesDb.USERS
    WHERE userName = ?`;
    const queryResult: UserModel[] = await this.mysql.query(selectUsers, [
      userName,
    ]);
    console.log("ran userExist query successfully");
    return queryResult.length > 0;
  }
}
