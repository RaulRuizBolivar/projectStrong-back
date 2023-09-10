import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) {
    const userCreated = await this.userModel.create(createUserDto);
    if (!userCreated)
      throw new HttpException('No se ha podido crear el usuario', 404);
    return userCreated;
  }

  async findAll() {
    const user = await this.userModel.find({});
    if (!user) throw new HttpException('No se han encontrado usuarios', 404);
    return user;
  }

  async findOne(id: string) {
    const user = await this.userModel.findOne({ _id: id });
    if (!user)
      throw new HttpException('No existe el usuario con id ' + id, 404);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.updateOne(updateUserDto);
    if (!user)
      throw new HttpException('No existe el usuario con id ' + id, 404);
    return user;
  }

  async remove(id: string) {
    const userDeleted = await this.findOne(id);
    if (!userDeleted)
      throw new HttpException('No existe el usuario con id ' + id, 404);
    const user = await this.userModel.deleteOne({ _id: id });
    if (!user)
      throw new HttpException(
        'No se ha podido eliminar el usuario con id ' + id,
        404,
      );
    return userDeleted;
  }
}
