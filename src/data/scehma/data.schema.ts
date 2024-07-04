import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Data extends Document {
  @Prop({ required: true })
  skintype: string;

  @Prop({ required: true })
  photo: Array<string>;

  @Prop({ required: true })
  castles: Array<string>;

  @Prop({ required: true, type: Number }) 
  quantity: number;

  @Prop({ required: true })
  permalink: string;

  @Prop({ required: true })
  buff: Array<string>;
}

export const DataSchema = SchemaFactory.createForClass(Data);
