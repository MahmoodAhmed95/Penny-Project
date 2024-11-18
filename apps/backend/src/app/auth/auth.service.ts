// apps/backend/src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto, SignUpDto } from './dto/auth.dto';
import { UserService } from '../user/user.service';
import { UserDocument } from '../user/user.schema'; // Import UserDocument
import { SignInResponseDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signup(signUpDto: SignUpDto) {
    const { username, email, password } = signUpDto;

    // Call the createUser method, which will check for existing users
    const user = await this.userService.createUser({
      username,
      email,
      password,
    });

    // If the user already exists, createUser will return a string message
    if (typeof user === 'string') {
      return { message: user }; // This will return "Email registered Please Login!"
    }

    // If a new user was created, return a success message
    return { message: 'User registered successfully!' };
  }

  async signin(signInDto: SignInDto): Promise<SignInResponseDto> {
    const { email, password } = signInDto;

    // Validate the user using the UserService
    const user: UserDocument | null = await this.userService.validateUser(
      email,
      password
    );

    // If user validation fails, return a custom message
    if (!user) {
      return { message: 'Invalid email or password' }; // Return custom message
    }

    // Construct the payload for the JWT
    const payload = { email: user.email, sub: user._id }; // _id is the user's unique identifier

    // Sign the payload to create the JWT access token
    const accessToken = this.jwtService.sign(payload);

    // Return the access token and a success message
    return { accessToken, message: 'Login successful' };
  }
}
