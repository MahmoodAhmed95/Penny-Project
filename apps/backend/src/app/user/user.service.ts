import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async createUser(userData: {
    username: string;
    email: string;
    password: string;
  }) {
    const newUser = new this.userModel(userData);
    return await newUser.save();
  }
}