import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MinLength, Validate } from "class-validator";

/* Entidad: Son los datos que tendrá la base de datos
Dtos: Datos que se espera recibir al crear o actualizar 
para realizar estas operaciones
 */
import {UniqueValidator} from "../validations/unique-email.validator";
export class CreateUserDto {
    @IsNumber()
    readonly id: number;
    @IsNotEmpty({ message: "The name is required" })
    @MinLength(3, { message: "The name must be at least 3 characters" })
    @IsString({ message: "The name must be a string" })
    readonly name: string;
    @Validate(UniqueValidator,{message: "The email is already in use"})
    @IsNotEmpty({message: "The email is required"})
    @IsEmail({}, { message: "The email is not valid, check the format email" })
    readonly email: string;
    readonly lastname: string;
    @IsNotEmpty({message: "The password is required"})
    @IsString({ message: "The password must be a string" })
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
    {message: "The password must have at least 8 characters, one uppercase, one lowercase, one number and one special character"})
    readonly password: string;
}