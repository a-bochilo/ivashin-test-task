// ========================== nest ==========================
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

// ========================== repository & entities ==========================
import { UserRepository } from "../users/repos/user.repository";
import { RoleRepository } from "../roles/repos/role.repository";
import { UserEntity } from "../users/entities/user.entity";

// ========================== dto ==========================
import { UserDto } from "../users/dtos/user.dto";
import { TokenDto } from "./dtos/token.dto";

@Injectable()
export class SecurityService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roleRepository: RoleRepository,
    private readonly jwtService: JwtService
  ) {}

  generateJwt(user: UserEntity): TokenDto {
    const payload = UserDto.fromEntity(user);
    const token = this.jwtService.sign(payload);
    return { token };
  }

  async getUser(id: string): Promise<UserEntity> {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new HttpException(`User does not exist`, HttpStatus.NOT_FOUND);
    }
    //! Create request to db with relations
    user.role = await this.roleRepository.getById(user.roleId);
    return user;
  }
}
