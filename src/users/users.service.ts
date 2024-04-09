import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

import * as bcrypt from 'bcryptjs';


@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    create(createUserDto: CreateUserDto): Promise<User> {
        try {

            const hashedPassword = bcrypt.hashSync(createUserDto.password, 10);
            const newUser = new this.userModel(
                {
                    ...createUserDto,
                    password: hashedPassword
                }
            );
            return newUser.save()
        } catch (error) {
            throw new HttpException({ message: 'User not created' }, HttpStatus.BAD_REQUEST);
        }
    }

    findAll(): Promise<User[]> {
        try {
            return this.userModel.find().exec();
        } catch (error) {
            throw new HttpException({ message: 'Users not found' }, HttpStatus.NOT_FOUND);
        }
    }

    findOne(id: string): Promise<User> {
        try {
            const user = this.userModel.findById(id).exec();
            if (!user){                
                throw new HttpException({ message: 'User not found' }, HttpStatus.NOT_FOUND);            
            }
            return user;
        } catch (error) {
            throw new HttpException({ message: 'User not found' }, HttpStatus.NOT_FOUND);
        }
    }

    update(id: string, updateUserDto: CreateUserDto): Promise<User> {
        if (updateUserDto.password) {
            const hashedPassword = bcrypt.hashSync(updateUserDto.password, 10)
            updateUserDto = {
                ...updateUserDto,
                password: hashedPassword
            }
        }
        try {
            return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
        } catch (error) {
            throw new NotFoundException('User not found',);
        }
    }

    delete(id: string): Promise<boolean> {
        try {
            this.userModel.findByIdAndDelete(id).exec();
            return Promise.resolve(true);
        } catch (error) {
            throw new HttpException({ message: 'User not found' }, HttpStatus.NOT_FOUND);
        }
    }

    findByEmail(email: string): Promise<User | any> {        
        return this.userModel.findOne({ email }).exec();
    }

}
