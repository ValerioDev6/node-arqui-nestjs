import { DataSource, DataSourceOptions } from "typeorm";
import { envs } from "./config";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export abstract class ConfigServer {
  public dataSource: DataSource;

  constructor() {
    this.dataSource = new DataSource(this.typeORMConfig);
  }

  public get typeORMConfig(): DataSourceOptions {
    return {
      type: "mysql",
      host: envs.DB_HOST,
      port: envs.DB_PORT,
      username: envs.DB_USER,
      password: envs.DB_PASSWORD,
      database: envs.DB_DATABASE,
      entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      migrations: [__dirname + "/../../migrations/*{.ts,.js}"],
      synchronize: false,
      migrationsRun: true,
      logging: false,
      namingStrategy: new SnakeNamingStrategy(),
    };
  }

  async connectDB(): Promise<void> {
    try {
      if (!this.dataSource.isInitialized) {
        await this.dataSource.initialize();
        console.log("✅ Database connected successfully!");
      }
    } catch (error) {
      console.error("❌ Error connecting to database:", error);
    }
  }
}
