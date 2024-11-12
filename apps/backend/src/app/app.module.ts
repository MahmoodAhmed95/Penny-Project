import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mahmood1995ahmed:PennyProject1@sei-5.ifbquwp.mongodb.net/'
    ), //MongoDB connection
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
