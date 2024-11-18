export class SignUpDto {
  username: string;
  email: string;
  password: string;
}

export class SignInDto {
  email: string;
  password: string;
}
export class SignInResponseDto {
  accessToken?: string;
  message: string;
}
