import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { MongooseModule } from '@nestjs/mongoose';
// Corrected import path
import { PassportModule } from '@nestjs/passport';
import { DataSchema } from './scehma/data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Data', schema: DataSchema }]), // Removed unnecessary comma
    PassportModule,
  ],
  providers: [DataService],
  controllers: [DataController]
})
export class DataModule {}
