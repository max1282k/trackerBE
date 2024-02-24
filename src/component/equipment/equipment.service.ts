import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Equipment } from '../schema/equipment.schema';
import { CreateEquipmentDTO } from './dto/createEquipment.dto';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipment.name)
    private readonly _equipmentModel: Model<Equipment>,
  ) {}

  async createEquipment(data: CreateEquipmentDTO) {
    try {
      const newEquipment = await this._equipmentModel.create(data);
      return newEquipment;
    } catch (error) {
      console.log(error?.message);
      throw new BadRequestException(error?.message);
    }
  }

}
