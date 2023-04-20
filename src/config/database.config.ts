import "dotenv/config";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

// ========================== entities ==========================
import { UserEntity } from "../app/users/entities/user.entity";
import { RoleEntity } from "../app/roles/entities/role.entity";
import { ImageEntity } from "../app/image/entities/image.entity";

// ========================== migrations ==========================
import { $migration1681972850120 } from "../../migrations/1681972850120-$migration";
import { $migration1681972850125 } from "../../migrations/1681972850125-$migration";

const databaseConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [UserEntity, RoleEntity, ImageEntity],
  synchronize: false,
  migrations: [$migration1681972850120, $migration1681972850125],
};

export default databaseConfig;
