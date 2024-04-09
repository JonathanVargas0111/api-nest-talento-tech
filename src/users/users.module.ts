import { AuthService } from './../auth/auth.service';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { AuthController } from 'src/auth/auth.controller';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [UsersController,AuthController],
    providers:[UsersService, AuthService]
})
export class UsersModule {}
