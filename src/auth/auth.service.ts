import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) { }

    async validateUser(email: string, password: string): Promise<any> {
        try {
            const user = await this.userService.findByEmail(email);            
            if (user && bcrypt.compareSync(password, user.password)) {
                return {'message': 'Bienvenido'};
               /*  return user; */
            } else {
                throw new HttpException({ message: 'Forbbiden' }, HttpStatus.FORBIDDEN);
            }
        } catch (error) {
            console.log(error);            
            throw new HttpException({ message: 'Forbbiden' }, HttpStatus.FORBIDDEN);
        }
    }
}
