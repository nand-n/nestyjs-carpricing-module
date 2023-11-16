import { IsEmail, IsString } from "class-validator";

export class CreateUseerDto {
    @IsEmail()
    email:string
    @IsString()
    password:string
}