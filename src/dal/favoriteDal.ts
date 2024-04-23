import serverlessMysql, { ServerlessMysql } from "serverless-mysql";

interface FavoriteModel {
  favoriteId: string;
}

export class FavoritesDal {
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

  async getUserFavorites(userName: string): Promise<string[]> {
    const query = `SELECT favoriteId FROM moviesDb.FAVORITES WHERE userName = ?`;
    const queryResult = await this.runQuery<FavoriteModel[]>(
      "getUserFavorites",
      query,
      [userName]
    );

    return queryResult.map((faviroteModel) => faviroteModel.favoriteId);
  }

  async insertUserFavorite(userName: string, movieId: string): Promise<void> {
    const query = `INSERT INTO moviesDb.FAVORITES (userName, favoriteId) VALUES (?,?)`;
    await this.runQuery<FavoriteModel[]>("insertUserFavorite", query, [
      userName,
      movieId,
    ]);
  }

  async deleteUserFavorite(userName: string, movieId: string): Promise<void> {
    const query = `DELETE FROM moviesDb.FAVORITES WHERE userName = ? AND favoriteId = ?`;
    await this.runQuery<FavoriteModel[]>("deleteUserFavorite", query, [
      userName,
      movieId,
    ]);
  }

  async isUserFavorite(userName: string, movieId: string): Promise<boolean> {
    const query = `SELECT * FROM moviesDb.FAVORITES WHERE userName = ? AND favoriteId= ?`;
    const queryResult = await this.runQuery<FavoriteModel[]>(
      "isUserFavorite",
      query,
      [userName, movieId]
    );
    return queryResult.length > 0;
  }

  private async runQuery<T>(
    queryName: string,
    query: string,
    params: string[]
  ): Promise<T> {
    try {
      console.log("about to run query: " + queryName);
      const queryResult: T = await this.mysql.query(query, params);
      console.log(`ran ${queryName} query successfully`);
      return queryResult;
    } catch (err) {
      console.log(`an error occured in ${queryName}`);
      console.log(err);
      throw err;
    } finally {
      await this.mysql.end();
      console.log("ended mysql");
    }
  }
}
