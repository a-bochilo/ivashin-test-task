import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// ========================== entities ==================================
import { UserEntity } from "./entities/user.entity";
import { RoleEntity } from "../roles/entities/role.entity";

// ========================== repositories ==============================
import { UserRepository } from "./repos/user.repository";
import { RoleRepository } from "../roles/repos/role.repository";

// ========================== services & controllers ====================
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

// ========================== modules ===================================
import { SecurityModule } from "../security/security.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
            RoleEntity,
        ]),
        SecurityModule,
    ],
    controllers: [UserController],
    providers: [
        RoleRepository,
        UserService,
        UserRepository,
    ],
    exports: [UserService],
})
export class UserModule {}
