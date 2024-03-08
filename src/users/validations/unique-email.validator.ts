import { Injectable } from "@nestjs/common";
import { UsersService } from "../users.service";

@Injectable()
export class UniqueValidator{
    constructor(private readonly usersService: UsersService){
        
    }
    async validate(email:string):Promise<boolean>{
       /* const user = await this.usersService.findByEmail(email);
       if(!user){
        return false;
       } */
       return true    
    }
}