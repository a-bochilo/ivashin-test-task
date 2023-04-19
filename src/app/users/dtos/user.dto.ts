// ========================== validator ==========================
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";

// ========================== entities & dto's ==========================
import { UserEntity } from "../entities/user.entity";
import { UUIDDto } from "src/shared/dtos/uuid.dto";

// ========================== types ==========================
import { UserRoles } from "src/shared/types/user-roles.enum";

// ========================== swagger ==========================
import { ApiProperty } from "@nestjs/swagger";

export class UserDto extends UUIDDto {
  @ApiProperty({
    example: "test@test.com",
    description: "Email",
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: "password",
    description: "Password",
    required: true,
  })
  @IsOptional()
  @IsString()
  password?: string;

  @ApiProperty({
    example: "Elvis",
    description: "Name",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  firstName!: string;

  @ApiProperty({
    example: "Presley",
    description: "Last name",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  lastName!: string;

  @ApiProperty({
    example: "https://image-url.com",
    description: "Image url",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  image!: string;

  @ApiProperty({ example: 1, description: "Role id", required: true })
  @IsOptional()
  @IsNumber()
  roleId?: number;

  @ApiProperty({ example: "user", description: "Role type", required: true })
  @IsOptional()
  @IsEnum(UserRoles)
  roleType?: UserRoles;

  public static fromEntity(entity: UserEntity): UserDto {
    const outputDto = new UserDto();
    outputDto.id = entity.id;
    outputDto.email = entity.email;
    outputDto.firstName = entity.firstName;
    outputDto.lastName = entity.lastName;
    outputDto.image = entity.image;
    outputDto.created = entity.created.valueOf();
    outputDto.updated = entity.updated.valueOf();
    outputDto.roleId = entity.roleId;
    outputDto.roleType = entity.roleType;

    return outputDto;
  }

  public static fromJwt(dto: UserDto): UserDto {
    if (!dto) {
      return;
    }

    const outputDto = new UserDto();
    outputDto.id = dto.id;
    outputDto.email = dto.email;
    outputDto.roleId = dto.roleId;
    outputDto.roleType = dto.roleType;

    return outputDto;
  }
}
