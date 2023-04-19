// ========================== nest ======================================
import { Module } from "@nestjs/common";

// ========================== typeorm ===================================
import { TypeOrmModule } from "@nestjs/typeorm";

// ========================== security ==================================
import { SecurityModule } from "../security/security.module";

// ========================== entities ==================================
import { UserEntity } from "../users/entities/user.entity";
import { RoleEntity } from "./entities/role.entity";

// ========================== repositories ==============================
import { RoleRepository } from "./repos/role.repository";

// ========================== services & controllers ====================
import { RoleService } from "./role.service";
import { RoleController } from "./role.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RoleEntity,
      UserEntity,
    ]),
    SecurityModule,
  ],
  controllers: [RoleController],
  providers: [RoleService, RoleRepository],
  exports: [RoleService],
})
export class RoleModule {}
