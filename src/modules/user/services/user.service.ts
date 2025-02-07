import { DeleteResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { UserDTO } from "../dto/user.dto";
import { UserEntity } from "../entities/user.entity";

export class UserService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity);
  }
  async findAllUser(): Promise<UserEntity[]> {
    return (await this.execRepository).find();
  }
  async findUserById(id: string): Promise<UserEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createUser(body: UserDTO): Promise<UserEntity> {
    return (await this.execRepository).save(body);
  }
  async updateUser(id: string, updateDto: any) {
    return await (await this.execRepository).update(id, updateDto);
  }
  async deleteUser(id: string): Promise<DeleteResult> {
    return await (await this.execRepository).delete(id);
  }
}
