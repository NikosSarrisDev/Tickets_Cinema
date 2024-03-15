import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import {APP_GUARD} from "@nestjs/core";
import {AuthGuard} from "./auth.guard";
import {UserService} from "../user/user.service";

//Στα imports θα χρειαστούμε το userModule όπου: userService για κάνουμε χρήση του , μέσα στο authService και το JwtModule
//για διάφορες ρυθμήσεις στο JWT

//Στους providers πρέπει εκτός από το service να βάλω και το APP_GUARD token το οποίο υπάρχει για να γίνει
//ο auth guard global έτσι ώστε να μην χρειάζεται να βάζω τον decorator Useguard σε κάθε end point
@Module({
  imports: [UserModule, JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: {
      expiresIn : '60s'
    }
  })],
  controllers: [AuthController],
  providers: [AuthService, {
    provide: APP_GUARD,
    useClass: AuthGuard
  }]
})
export class AuthModule {}
