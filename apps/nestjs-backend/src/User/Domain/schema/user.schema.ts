import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import { User } from '../user.domain';
import { ApiProperty } from '@nestjs/swagger';
export type UserDocument = HydratedDocument<User>;

@Schema()
export class UserObject extends Document {
  @Prop()
  @ApiProperty({ example: 'Juan', description: 'Name of user' })
  name: string;

  @Prop({ unique: true, required: true })
  @ApiProperty({ example: 'example@gmail.com', description: 'Email of user' })
  email: string;

  @Prop({ required: true, select: false })
  @ApiProperty({ example: 'password', description: 'Password of user' })
  password: string;

  @Prop()
  @ApiProperty({ example: 'Smith', description: 'Last name of user' })
  lastName: string;

  @Prop()
  @ApiProperty({ example: '01/10/2000', description: 'Birth date of user' })
  birthDate: string;
}

export const UserSchema = SchemaFactory.createForClass(UserObject);
