import "dotenv/config";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

// ========================== entities ==========================
import { UserEntity } from "../app/users/entities/user.entity";
import { RoleEntity } from "../app/roles/entities/role.entity";

// ========================== migrations ==========================


const databaseConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [
    UserEntity,
        RoleEntity,
      ],
  synchronize: false,
  migrations: [
   
  ],
};

export default databaseConfig;
