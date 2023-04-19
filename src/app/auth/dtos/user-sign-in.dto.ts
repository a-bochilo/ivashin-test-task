import { IsEmail, IsString } from "class-validator";

// ========================== swagger ==========================
import { ApiProperty } from "@nestjs/swagger";

export class UserSignInDto {
  @ApiProperty({
    example: "test@test.com",
    description: "Email",
    required: true,
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    description: "Password to sign in",
  })
  @IsString()
  password!: string;

  static from(dto: UserSignInDto) {
    const it = new UserSignInDto();
    it.email = dto.email;
    it.password = dto.password;
    return it;
  }
}
