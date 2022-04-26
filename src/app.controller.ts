import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateWorldDto } from './crud/world/dto/create-world.dto';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param() params): string {
    console.log('here', params);
    return `Туох дыгиин! ${params.id}`;
  }

  // @Get('ab*od')
  // @HttpCode(666)
  // @Redirect('https://nestjs.com', 301)
  // getHWildCard(): string {
  //   return `Get wild`;
  // }

  @Post()
  async create(@Body() createWorldDto: CreateWorldDto) {
    return 'This action adds new world';
  }
}
