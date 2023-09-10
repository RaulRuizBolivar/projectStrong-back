import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, minlength: 2, maxlength: 128 })
  name: string;

  @Prop({ unique: true, required: true, minlength: 2, maxlength: 128 })
  username: string;

  @Prop()
  lastname: string;

  @Prop({ required: true, default: 'user.png' })
  profilePicture: string;

  @Prop({ required: true, minlength: 8, maxlength: 128 })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
