import { Module } from '@nestjs/common';
import { AppController,AppController1 } from './BooksController.controller';
import { BooksRepository } from './BooksService.service';

@Module({
  imports: [],
  controllers: [AppController,AppController1],
  providers: [BooksRepository as any],
})
export class AppModule {}
