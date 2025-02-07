import { IsNotEmpty } from "class-validator";
import { BaseDto } from "../../../config/base.dto";

export class UserDTO extends BaseDto {
  @IsNotEmpty()
  name!: string;
  @IsNotEmpty()
  username!: string;
  @IsNotEmpty()
  lastname!: string;
  @IsNotEmpty()
  email!: string;
  @IsNotEmpty()
  password!: string;
  @IsNotEmpty()
  city!: string;
  @IsNotEmpty()
  province!: string;
}
