import { Injectable } from "@nestjs/common";
import { UsersService } from "../users.service";
import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";


@ValidatorConstraint({ name: 'uniqueEmail', async: true })
@Injectable()
export class UniqueValidator implements ValidatorConstraintInterface {

    constructor(private readonly usersService: UsersService) { }
    
    async validate(email: string) {
        try {
            await this.usersService.findByEmail(email);
            return true;
        } catch (error) {
            console.log(error);
            
            return false;
        }
    }
    defaultMessage(): string {
        return "Email already exists";
    }
}