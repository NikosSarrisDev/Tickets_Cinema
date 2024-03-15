import {ConflictException, Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import {User} from "../user.model";
import * as diagnostics_channel from "diagnostics_channel";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {
    }

    async singIn(username: string, pass: string): Promise<{ assess_token: string }>{
        const user = await this.userService.findOne(username);

        if(!user){
            throw new UnauthorizedException("Invalid credentials")
        }

        //Πρέπει να ελένξω με το compare διότι ο password είναι σε κρυπτογραφημένη μορφή
        let isPassWordValid = await bcrypt.compare(pass, user.password);

        if(!isPassWordValid){
            throw new UnauthorizedException("Invalid Credentials");
        }
        const payload = { sub: user._id, username: user.username }
        return {
            assess_token: await this.jwtService.signAsync(payload),
        };
    }

    async registerUser(user: User): Promise<{ accessToken: string }> {

        const existingUser = await this.userService.findOne(user.username);
        if(existingUser){
            throw new ConflictException("Username already exists")
        }

        const savedUser = await this.userService.register(user);

        const payload = { sub: savedUser._id, username: savedUser.username  }

        return {
            accessToken : await this.jwtService.signAsync(payload),
        }
    }

    async returnAllUsersInDB() {
        return this.userService.findAll();
    }

    async deleteOneUser(username: string) {
        return this.userService.deleteOne(username);
    }

}
