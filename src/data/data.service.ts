import { Injectable, NotFoundException,  } from '@nestjs/common';
import { Data } from './scehma/data.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../auth/schemas/user.schema';
import { CreateDataDto } from './dto/createdatadto.dto';

@Injectable()
export class DataService {
  constructor(
    @InjectModel(Data.name)
    private readonly dataModel: Model<Data>,
  ) {}

  async findAll(): Promise<Data[]> {
    return await this.dataModel.find().exec();
  }

  async create(data: any, user: User): Promise<Data> {
    const info = Object.assign(data, { user: user._id });
    const res = await this.dataModel.create(info);
    return res;
  }

  async findByPermalink(permalink: string): Promise<Data[]> {
    return await this.dataModel.find({ permalink: permalink }).exec();
  }

  async findAllByCategory(skintype: string): Promise<Data[]> {
    return await this.dataModel.find({ skintype: skintype }).exec();
  }

  async updateById(id: string, updateData: CreateDataDto): Promise<Data> {
    // updateData.quantity = Number(updateData.quantity); // C
    return await this.dataModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    const result = await this.dataModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Data not found');
    }
  }
}
