import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.qlwvm.mongodb.net/test`),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
