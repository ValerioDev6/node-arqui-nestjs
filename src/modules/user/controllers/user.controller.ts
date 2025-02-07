import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { HttpResponse } from "../../../shared/response/http.response";
import { DeleteResult, UpdateResult } from "typeorm";

export class UserController {
  constructor(
    private readonly userService: UserService = new UserService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  async getUsers(req: Request, res: Response) {
    try {
      const data = await this.userService.findAllUser();
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, "No hay datos");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.error(e);
      return this.httpResponse.Error(res, "Error al obtener usuarios");
    }
  }
  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.userService.findUserById(id);
      if (!data) {
        return this.httpResponse.NotFound(res, `No se encontro con id: ${id}`);
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.error(e);
      return this.httpResponse.Error(res, "Error al obtener usuario");
    }
  }
  async createUser(req: Request, res: Response) {
    try {
      const data = await this.userService.createUser(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.error(e);
      return this.httpResponse.Error(res, "Error al crear usuarios");
    }
  }
  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data: UpdateResult = await this.userService.updateUser(
        id,
        req.body
      );
      if (!data.affected) {
        return this.httpResponse.NotFound(res, "Hay un error al actualizar");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.error(e);
      return this.httpResponse.Error(res, "Error al actualizar usuarios");
    }
  }

  async deleteUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data: DeleteResult = await this.userService.deleteUser(id);
      if (!data.affected) {
        return this.httpResponse.NotFound(res, "Hay un error al actualizar");
      }

      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.error(e);
      return this.httpResponse.Error(res, "Error al eliminar usuario");
    }
  }
}
