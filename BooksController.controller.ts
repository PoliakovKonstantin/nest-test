import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BooksRepository } from './BooksService.service';

@Controller('api/books')
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: BooksRepository) {}

  @Get()
  getBooks(): Object[] {
    return this.appService.getBooks();
  }
  @Post()
  createBook(abc:Object):Object {
    return this.appService.createBook(abc)
  }
}

@Controller('api/books:id')
export class AppController1 {
  constructor(private readonly appService:BooksRepository) {}
  @Get()
  getBook(id:number) {
    return this.appService.getBook(id)
  }
  @Put()
  updateBook(id:number,book:Object):Object {
    return this.appService.updateBook(id,book)
  }
  @Delete()
  deleteBook(id:number):string {
    return this.deleteBook(id)
  }
}
