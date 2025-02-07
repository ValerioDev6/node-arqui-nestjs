import { BaseRouter } from "../../shared/router/router";
import { UserController } from "./controllers/user.controller";

export class UserRouter extends BaseRouter<UserController> {
  constructor() {
    super(UserController);
  }

  routes(): void {
    this.router.get("/users", (req, res) => {
      this.controller.getUsers(req, res);
    });
    this.router.get("/users/:id", (req, resp) => {
      this.controller.getUserById(req, resp);
    });

    this.router.post("/users", (req, resp) => {
      this.controller.createUser(req, resp);
    });

    this.router.put("/users/:id", (req, resp) => {
      this.controller.updateUser(req, resp);
    });

    this.router.delete("/users/:id", (req, resp) => {
      this.controller.deleteUserById(req, resp);
    });
  }
}
