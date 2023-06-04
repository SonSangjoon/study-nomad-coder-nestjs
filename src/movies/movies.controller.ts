import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieSerice: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieSerice.getAll();
  }

  @Get('/:id')
  getById(@Param('id') movieId: number): Movie {
    return this.movieSerice.getById(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieSerice.create(movieData);
  }

  @Delete('/:id')
  deleteById(@Param('id') movieId: number) {
    return this.movieSerice.deleteById(movieId);
  }
}
