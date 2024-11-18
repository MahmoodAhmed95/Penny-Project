/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(5);
const user_module_1 = __webpack_require__(6);
const auth_module_1 = __webpack_require__(12);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.DATABASE_URL), //MongoDB connection
            user_module_1.UserModule,
            auth_module_1.AuthModule,
        ],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(5);
const user_schema_1 = __webpack_require__(7);
const user_service_1 = __webpack_require__(8);
const user_controller_1 = __webpack_require__(11);
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_schema_1.UserSchema }])],
        providers: [user_service_1.UserService],
        controllers: [user_controller_1.UserController],
        exports: [user_service_1.UserService],
    })
], UserModule);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const tslib_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(5);
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
exports.User = User = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__(3);
// apps/backend/src/user/user.service.ts
const common_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(5);
const mongoose_2 = __webpack_require__(9);
const user_schema_1 = __webpack_require__(7); // Import UserDocument
const bcrypt = tslib_1.__importStar(__webpack_require__(10));
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(createUserDto) {
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
        }
        catch (error) {
            // Handle any unexpected errors
            console.error('Error creating user:', error);
            throw new Error('An error occurred while creating the user.');
        }
    }
    async validateUser(email, password) {
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
};
exports.UserService = UserService;
exports.UserService = UserService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserService);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const user_service_1 = __webpack_require__(8);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(userData) {
        return this.userService.createUser(userData);
    }
};
exports.UserController = UserController;
tslib_1.__decorate([
    (0, common_1.Post)('create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
exports.UserController = UserController = tslib_1.__decorate([
    (0, common_1.Controller)('user'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(13);
const passport_1 = __webpack_require__(14);
const user_module_1 = __webpack_require__(6);
const auth_service_1 = __webpack_require__(15);
const auth_controller_1 = __webpack_require__(16);
const jwt_strategy_1 = __webpack_require__(18);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '8h' },
            }),
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(3);
// apps/backend/src/auth/auth.service.ts
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(13);
const user_service_1 = __webpack_require__(8);
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signup(signUpDto) {
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
    async signin(signInDto) {
        const { email, password } = signInDto;
        // Validate the user using the UserService
        const user = await this.userService.validateUser(email, password);
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const auth_service_1 = __webpack_require__(15);
const auth_dto_1 = __webpack_require__(17);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signup(signUpDto) {
        return this.authService.signup(signUpDto);
    }
    async signin(signInDto) {
        return this.authService.signin(signInDto);
    }
};
exports.AuthController = AuthController;
tslib_1.__decorate([
    (0, common_1.Post)('signup'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof auth_dto_1.SignUpDto !== "undefined" && auth_dto_1.SignUpDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
tslib_1.__decorate([
    (0, common_1.Post)('signin'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof auth_dto_1.SignInDto !== "undefined" && auth_dto_1.SignInDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignInResponseDto = exports.SignInDto = exports.SignUpDto = void 0;
class SignUpDto {
}
exports.SignUpDto = SignUpDto;
class SignInDto {
}
exports.SignInDto = SignInDto;
class SignInResponseDto {
}
exports.SignInResponseDto = SignInResponseDto;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const passport_1 = __webpack_require__(14);
const passport_jwt_1 = __webpack_require__(19);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        });
    }
    async validate(payload) {
        return { userId: payload.sub, email: payload.email };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], JwtStrategy);


/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

// /**
//  * This is not a production server yet!
//  * This is only a minimal backend to get started.
//  */
Object.defineProperty(exports, "__esModule", ({ value: true }));
// import { Logger } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app/app.module';
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.PORT || 3000;
//   await app.listen(port);
//   Logger.log(
//     `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
//   );
// }
// bootstrap();
// src/main.ts in NestJS
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Enable CORS for all origins (or configure as per your need)
    app.enableCors();
    await app.listen(3000); // Or whatever port your backend is using
}
bootstrap();

})();

/******/ })()
;