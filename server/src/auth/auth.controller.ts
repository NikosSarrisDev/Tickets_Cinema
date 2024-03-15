import {Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {User} from "../user.model";
import { Public } from "../decorators/public.decorator";

@Controller('auth')
export class AuthController {

    //Σε όλα τα endpoints έχω βάλει έναν global authguard

    constructor(private readonly authService: AuthService) {
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @Public()
    signIn(@Body() signInDto: Record<string, any>){
        return this.authService.singIn(signInDto.username, signInDto.password);
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    @Public()
    registerUser(@Body() user: User): Promise<{ accessToken: string }> {
        return this.authService.registerUser(user)
    }

    //Return all users , testing perposes
    @HttpCode(HttpStatus.OK)
    @Get('all')
    @Public()
    findAllUsers(){
        return this.authService.returnAllUsersInDB();
    }

    @HttpCode(HttpStatus.OK)
    @Delete(':username')
    @Public()
    async deleteOneUser(@Param('username') username: string){
        const isDeleted = this.authService.deleteOneUser(username);

        if(isDeleted){
            return {
                success: true, message: `User with username ${username} has been deleted`
            }
        }else{
            throw new NotFoundException(`User with username ${username} not found`)
        }
    }


}
