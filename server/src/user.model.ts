import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as bcrypt from 'bcrypt'

@Schema()
export class User extends Document{
    @Prop({ required:true })
    username: string;

    @Prop({ required:true })
    password: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    surname: string;

    @Prop({required : true})
    email: string;

    @Prop({ required: true})
    photo: string;

    //Πρέπει να χρησιμοποιήσω το compare function για να το χρησιμοποιήσω στο login
    async validatePassword(plainTextPassword: string): Promise<boolean>{
        return bcrypt.compare(plainTextPassword,this.password);
    }
}

export const UserSchema = SchemaFactory.createForClass(User);