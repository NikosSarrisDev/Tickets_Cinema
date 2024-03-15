import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Movie extends Document{
    //όλα τα στοιχεία για τις ταινίες είναι αναγκαία και μοναδικά
    @Prop({ required: true , unique: true})
    title: string;

    @Prop({ required: true })
    director: string;

    @Prop({ required: true })
    actors: string[];

    @Prop({ required: true })
    duration: string;

    @Prop({ required: true })
    ticketCount: number;

    @Prop({ required: true, unique: true })
    image: string; //Πρέπει να μετατραπούν σε base64
}

export const MovieSchema = SchemaFactory.createForClass(Movie);