import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

// ========================== entities & dto's ==========================
import { UserEntity } from "./entities/user.entity";
import { RoleEntity } from "../roles/entities/role.entity";
import { AssignUserRoleDto } from "./dtos/user-assigne-role.dto";

// ========================== enums =====================================
import { UserRoles } from "../../shared/types/user-roles.enum";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(UserEntity)
    private readonly roleRepository: Repository<RoleEntity>
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  // async getDetailsById(userId: string) {
  //   const user = await this.userRepository.getById(userId);
  //   if (!user) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.user.userDoesNotExist")}`,
  //       HttpStatus.NOT_FOUND
  //     );
  //   }
  //   return await this.userDetailsRepository.getDetailsById(user.details_id);
  // }

  // async getById(userId: string) {
  //   const user = await this.userRepository.getById(userId);
  //   if (!user) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.user.userDoesNotExist")}`,
  //       HttpStatus.NOT_FOUND
  //     );
  //   }
  //   return user;
  // }

  // async assignUserRole(assignUserRoleDto: AssignUserRoleDto, userId: string) {
  //   //=============== get a user and user role type, and verify its existence in the database ==================
  //   const user = await this.userRepository.getById(userId);
  //   if (!user) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.user.userDoesNotExist")}`,
  //       HttpStatus.NOT_FOUND
  //     );
  //   }

  //   if (user.roleType === UserRoles.superadmin) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.user.userIsSuperuser")}`,
  //       HttpStatus.NOT_FOUND
  //     );
  //   }

  //   //=============== get a role by name and role type, and verify its existence in the database ================
  //   const newRole = await this.roleRepository.getRoleByName(
  //     assignUserRoleDto.newRole
  //   );
  //   if (!newRole) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.roles.roleDoesNotExist")}`,
  //       HttpStatus.NOT_FOUND
  //     );
  //   }

  //   if (newRole.type === UserRoles.superadmin) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.roles.roleSuperuserLimit")}`,
  //       HttpStatus.NOT_FOUND
  //     );
  //   }

  //   if (!newRole) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.roles.roleDoesNotExist")}`,
  //       HttpStatus.NOT_FOUND
  //     );
  //   }

  //   //=============== if user and role by name already exist => assign role for user ============================
  //   user.updated = new Date();
  //   user.role = newRole;
  //   user.roleId = newRole.id;
  //   user.roleType = newRole.type;
  //   return await this.userRepository.assignUserRole(user);
  // }

  // async deleteUserById(userId: string) {
  //   const user = await this.userRepository.getById(userId);
  //   if (user.roleType === UserRoles.superadmin) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.user.userIsSuperuser")}`,
  //       HttpStatus.NOT_FOUND
  //     );
  //   }

  //   if (!user) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.user.userDoesNotExist")}`,
  //       HttpStatus.NOT_FOUND
  //     );
  //   }
  //   return await this.userRepository.deleteUserById(userId);
  // }

  // async updateUserDetails(info: UpdateUserDto, userId: string) {
  //   //=============== get a user array by email and verify its existence in the database ==================
  //   const usersByEmail = info.email
  //     ? await this.userRepository.getUsersArrayByEmail(info?.email)
  //     : null;
  //   if (
  //     usersByEmail?.length &&
  //     (usersByEmail.length > 1 || usersByEmail[0]?.id !== userId)
  //   ) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.user.userAlreadyExist")}`,
  //       HttpStatus.BAD_REQUEST
  //     );
  //   }
  //   //=============== get a user and user role type, and verify its existence in the database ==================
  //   const user = await this.userRepository.getById(userId);
  //   if (user.roleType === UserRoles.superadmin) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.roles.roleSuperuserLimit")}`,
  //       HttpStatus.BAD_REQUEST
  //     );
  //   }

  //   if (!user) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.user.userDoesNotExist")}`,
  //       HttpStatus.NOT_FOUND
  //     );
  //   }

  //   //=============== get a details and verify its existence in the database ===============================
  //   let details = await this.userDetailsRepository.getDetailsById(
  //     user.details_id
  //   );

  //   if (!details) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.details.userDoesNotExist")}`,
  //       HttpStatus.NOT_FOUND
  //     );
  //   }

  //   // if (info.isActive === "true") info.isActive = Boolean(info.isActive);
  //   const isActiveToggler = info.isActive === "true" ? true : false;

  //   //=============== if user and details already exist => update user with details =========================
  //   const newDetails = await this.userDetailsRepository.setDetails(
  //     Object.assign(details, info.details)
  //   );
  //   delete info.details;
  //   Object.assign(user, info);

  //   user.updated = new Date();
  //   details = newDetails;
  //   return await this.userRepository.updateUserDetails({
  //     ...user,
  //     details,
  //     isActive: isActiveToggler,
  //   });
  // }

  // async getUserByEmail(email: string) {
  //   const user = await this.userRepository.getUserByEmail(email);
  //   if (!user) {
  //     throw new HttpException(
  //       `${I18nContext.current().t("errors.user.userDoesNotExist")}`,
  //       HttpStatus.NOT_FOUND
  //     );
  //   }
  //   return user;
  // }
}
