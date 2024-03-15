import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../user.model";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {
    }

    async register(user: User): Promise<User>{
        const salt = 10;
        const hashedPassword = await bcrypt.hash(user.password, salt);
        const registerUser = new this.userModel({
            username: user.username,
            password: hashedPassword,
            phone: user.phone,
            name: user.name,
            surname: user.surname,
            email: user.email,
            photo: user.photo,
        })

        return await registerUser.save();
    }


    async findOne(username: string): Promise<User> {
        return this.userModel.findOne({ username });
    }

    //Find All users in Database
    async findAll(){
        return this.userModel.find().exec();
    }

    async deleteOne(username: string){
        return this.userModel.deleteOne({ username });
    }




}
