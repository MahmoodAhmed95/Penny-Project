import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from './auth.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel('Auth') private authModel: Model<Auth>) {}

  async createAuth(authData: {
    username: string;
    email: string;
    password: string;
  }) {
    const newAuth = new this.authModel(authData);
    return await newAuth.save();
  }
}
