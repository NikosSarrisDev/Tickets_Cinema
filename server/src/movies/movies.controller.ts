import {Controller, Get, Post, Body, Param, Put, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import {MoviesService} from "./movies.service";
import { Movie } from "../movie.model";
import { FileInterceptor } from "@nestjs/platform-express";
import { Public } from "../decorators/public.decorator";

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {
    }

    @Post()
    @Public()
    @UseInterceptors(FileInterceptor('image'))
    async create(@Body() movie: Movie): Promise<Movie> {
        return this.moviesService.create(movie);
    }

    @Get()
    @Public()
    async findAll(): Promise<Movie[]> {
        return this.moviesService.findAll();
    }

    @Get(':id')
    @Public()
    async findOne(@Param('id') id: string): Promise<Movie> {
        return this.moviesService.findOne(id);
    }

    @Get(':title')
    @Public()
    async findOneByTitle(@Param('title') title : string): Promise<Movie> {
        return this.moviesService.findOneByTitle(title);
    }

    @Put(':id')
    @Public()
    async update(@Param('id') id: string, @Body() updatedMovie: Movie): Promise<Movie> {
        return this.moviesService.update(id, updatedMovie);
    }

    @Delete(':id')
    @Public()
    async remove(@Param('id') id: string): Promise<Movie> {
        return this.moviesService.delete(id);
    }


}
