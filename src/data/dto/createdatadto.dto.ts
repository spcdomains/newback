import { IsNotEmpty, IsString, IsArray, IsNumber } from 'class-validator';

export class CreateDataDto {
  @IsNotEmpty()
  @IsString()
  readonly skintype: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true }) // Ensure each element in the array is a string
  readonly photo: Array<string>;

  @IsNotEmpty()
  @IsArray()
  readonly castles: Array<string>;

  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;
  @IsNotEmpty()
  @IsString()
  readonly permalink: string;

  @IsNotEmpty()
  @IsArray()
  readonly buff: Array<string>;
}
