import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HousesModule } from './houses/houses.module';

import * as dotenv from 'dotenv';
dotenv.config()//Cargamos las variables de configuracion


import { MongooseModule } from '@nestjs/mongoose';

console.log(process.env.DB_URL);
@Module({
  imports: [UsersModule,HousesModule,MongooseModule.forRoot(process.env.DB_URL)],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule { }
