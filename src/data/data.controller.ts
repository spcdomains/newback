import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { DataService } from './data.service';
import { Data } from './scehma/data.schema'; // Adjust import path as per your actual structure
import { CreateDataDto } from './dto/createdatadto.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('all')
  async getAllData(): Promise<Data[]> {
    return this.dataService.findAll();
  }

  @Post('machine')
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() data: CreateDataDto, @Req() req): Promise<Data> {
    return this.dataService.create(data, req.user);
  }

  @Get('permalink/:permalink')
  async getByPermalink(@Param('permalink') permalink: string): Promise<Data[]> {
    try {
      return await this.dataService.findByPermalink(permalink);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get('category/:categoryName')
  async getByCategory(@Param('categoryName') skintype: string): Promise<Data[]> {
    try {
      return await this.dataService.findAllByCategory(skintype);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Put('castles/:id')
  @UseGuards(AuthGuard('jwt'))
  async updateById(
    @Param('id') id: string,
    @Body() updateData: CreateDataDto,
  ): Promise<Data> {
    return this.dataService.updateById(id, updateData);
  }

  @Delete('delete/machine/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteById(@Param('id') id: string): Promise<void> {
    return this.dataService.delete(id);
  }
}
