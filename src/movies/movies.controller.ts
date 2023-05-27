import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieSerice: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieSerice.getAll();
  }

  @Get('/id')
  getById(@Param('id') id: string): Movie {
    return this.movieSerice.getById(id);
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string) {
    return `This will delete moview with ${id}`;
  }
}
