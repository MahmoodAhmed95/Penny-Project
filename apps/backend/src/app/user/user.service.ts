// apps/backend/src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema'; // Import UserDocument
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: {
    username: string;
    email: string;
    password: string;
  }): Promise<UserDocument | string> {
    const { username, email, password } = createUserDto;

    // Check if a user with the given email already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      return 'Email exist Please Login'; // Return a message if the user already exists
    }

    // Hash the password if the user doesn't exist
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new this.userModel({
      username,
      email,
      password: hashedPassword,
    });

    try {
      // Save the new user
      await user.save();
      return user; // Return the new UserDocument instance
    } catch (error) {
      // Handle any unexpected errors
      console.error('Error creating user:', error);
      throw new Error('An error occurred while creating the user.');
    }
  }

  async validateUser(
    email: string,
    password: string
  ): Promise<UserDocument | null> {
    const user = await this.userModel.findOne({ email }).exec();

    if (!user) {
      return null; // No user found
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null; // Password is incorrect
    }

    return user; // User found and password is correct
  }
}
