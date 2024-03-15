import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import {InjectModel } from "@nestjs/mongoose";
import { Movie } from "../movie.model";

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movie.name) private readonly movieModel: Model<Movie>) {
    }

    async create(movie: Movie): Promise<Movie> {
        // const encodedImage = this.encodeImageToBase64(movie.image);
        const createdMovie = new this.movieModel(
            {
                title: movie.title,
                director: movie.director,
                actors: movie.actors,
                duration: movie.duration,
                ticketCount: movie.ticketCount,
                image: movie.image,
            }
        );
        return await createdMovie.save();
    }

    async findAll(): Promise<Movie[]> {
        return this.movieModel.find().exec();
    }

    //Μια findOne By ID
    async findOne(id: string): Promise<Movie> {
        return this.movieModel.findById(id).exec();
    }

    //Μια FindOne By title
    async findOneByTitle(title: string) : Promise<Movie> {
        return this.movieModel.findOne({ title: title }).exec()
    }

    async update(id: string, updatedMovie: Movie): Promise<Movie> {
        return this.movieModel.findByIdAndUpdate(id, updatedMovie, { new: true }).exec();
    }

    async delete(id: string): Promise<Movie> {
        return this.movieModel.findByIdAndDelete(id).exec();
    }
}
