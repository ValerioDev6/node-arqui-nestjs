import express from "express";
import morgan from "morgan";
import cors from "cors";
import { UserRouter } from "./modules/user/user.router";
import { envs } from "./config/config";
import "reflect-metadata";
import { ConfigServer } from "./config";

class ServerApp extends ConfigServer {
  public app: express.Application = express();
  private port: number = envs.PORT;

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // todo: basedatos
    this.connectDB();

    this.app.use(morgan("dev"));
    this.app.use(cors());

    this.app.use("/api", this.routers());
    this.listen();
  }

  routers(): Array<express.Router> {
    return [new UserRouter().router];
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server listening on port => ${this.port}`);
    });
  }
}

new ServerApp();
