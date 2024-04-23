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
    try {
      const getUserFavorites = `SELECT favoriteId FROM moviesDb.FAVORITES WHERE userName = ?`;
      console.log("about to run query: " + getUserFavorites);
      const queryResult: FavoriteModel[] = await this.mysql.query(
        getUserFavorites,
        [userName]
      );
      console.log("ran getUserFavorite query successfully");
      const favoriteToReturn = queryResult.map(
        (faviroteModel) => faviroteModel.favoriteId
      );
      return favoriteToReturn;
    } catch (err) {
      console.log("an error occured in getUserFavorite");
      console.log(err);
      throw err;
    } finally {
      await this.mysql.end();
      console.log("ended mysql");
    }
  }

  async insertUserFavorite(userName: string, movieId: string): Promise<void> {
    try {
      const insertUserFavorite = `INSERT INTO moviesDb.FAVORITES (userName, favoriteId) VALUES (?,?)`;
      console.log("about to run query: " + insertUserFavorite);
      await this.mysql.query(insertUserFavorite, [userName, movieId]);
      console.log("ran insertUserFavorite query successfully");
    } catch (err) {
      console.log("an error occured in insertUserFavorite");
      console.log(err);
      throw err;
    } finally {
      await this.mysql.end();
      console.log("ended mysql");
    }
  }

  async deleteUserFavorite(userName: string, movieId: string): Promise<void> {
    try {
      const deleteUserFavorite = `DELETE FROM moviesDb.FAVORITES WHERE userName = ? AND favoriteId = ?`;
      console.log("about to run query: " + deleteUserFavorite);
      await this.mysql.query(deleteUserFavorite, [userName, movieId]);
      console.log("ran deleteUserFavorite query successfully");
    } catch (err) {
      console.log("an error occured in deleteUserFavorite");
      console.log(err);
      throw err;
    } finally {
      await this.mysql.end();
      console.log("ended mysql");
    }
  }

  async isUserFavorite(userName: string, movieId: string): Promise<boolean> {
    try {
      const isUserFavorite = `SELECT * FROM moviesDb.FAVORITES WHERE userName = ? AND favoriteId= ?`;
      console.log("about to run query: " + isUserFavorite);
      const queryResult: FavoriteModel[] = await this.mysql.query(
        isUserFavorite,
        [userName, movieId]
      );
      console.log("ran isUserFavorite query successfully");
      return queryResult.length > 0;
    } catch (err) {
      console.log("an error occured in isUserFavorite");
      console.log(err);
      throw err;
    } finally {
      await this.mysql.end();
      console.log("ended mysql");
    }
  }
}
