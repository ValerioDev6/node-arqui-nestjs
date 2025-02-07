import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { ConfigServer } from "./database.config";
import { BaseEntity } from "./base.entity";

export class BaseService<T extends BaseEntity> extends ConfigServer {
  public execRepository: Promise<Repository<T>>;
  constructor(private getEntity: EntityTarget<T>) {
    super();
    this.execRepository = this.initRepository<T>(getEntity);
  }

  async initRepository<T extends ObjectLiteral>(
    e: EntityTarget<T>
  ): Promise<Repository<T>> {
    const getConn = await this.dataSource.initialize();
    return getConn.getRepository(e);
  }
}
