import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { WorldService } from './world.service';
import { CreateWorldDto } from './dto/create-world.dto';
import { IWorld } from './interfaces/world.interface';
import { HttpExceptionFilter } from '../exceptions/http-exception.filter';
import { JoiValidationPipe } from '../pipes/joi-validation.pipe';
import { ValidationPipe } from '../pipes/validation.pipe';
import { AuthGuard } from '../guards/auth.guard';
import { Roles } from '../decorators/roles.decorator';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('world')
@UseGuards(JwtAuthGuard)
@UseInterceptors(new LoggingInterceptor())
export class WorldController {
  constructor(private worldService: WorldService) {}

  @Post()
  /**
   * filters method scoped case
   * @UseFilters(new HttpExceptionFilter())
   */
  /**
   * pipes handle DTO with Joi
   * @UsePipes(new JoiValidationPipe(createWorldSchema))
   */
  @Roles('admin')
  async create(@Body(new ValidationPipe()) createWorldDto: CreateWorldDto) {
    this.worldService.create(createWorldDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.worldService.delete(id);
  }

  @Get()
  async findAll(): Promise<IWorld[]> {
    /**
     * new  custom exception
     *  throw new ForbiddenException();
     */
    /**
     * new common described Exception
     *     throw new HttpException(
     *       {
     *         status: HttpStatus.FORBIDDEN,
     *         error: 'This is a custom message',
     *       },
     *       HttpStatus.FORBIDDEN,
     *     )
     */
    return this.worldService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.worldService.findOne(id);
  }
}
