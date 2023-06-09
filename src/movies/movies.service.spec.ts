import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';
import exp from 'constants';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getById', () => {
    it('should retrun a movie', () => {
      service.create({
        title: 'title',
        genres: [],
        year: 2002,
      });
      const movie = service.getById(1);
      expect(movie).toBeDefined;
      expect(movie.id).toEqual(1);
    });

    it('should throw 404 error', () => {
      try {
        service.getById(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with id not found');
      }
    });
  });
});
