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
      const existingEquipment = await this._equipmentModel.findOne({
        imei: data?.imei,
      });

      if (existingEquipment) {
        throw new Error('Equipment with this IMEI already exists.');
      }
      const newEquipment = await this._equipmentModel.create(data);
      return newEquipment;
    } catch (error) {
      console.log(error?.message);
      // Depending on your framework and requirements, you may want to handle different types of errors differently
      throw new BadRequestException(error?.message);
    }
  }

  async editEquipment(imei: string, newData: CreateEquipmentDTO) {
    try {
      // Check if IMEI already exists in the database
      const existingEquipment = await this._equipmentModel.findOne({ imei });

      if (!existingEquipment) {
        throw new Error('Equipment not found');
      }

      // Update the equipment with new data
      await this._equipmentModel.findOneAndUpdate({ imei }, newData);

      // Optionally, you can fetch the updated equipment data and return it
      const updatedEquipment = await this._equipmentModel.findOne({ imei });
      return updatedEquipment;
    } catch (error) {
      console.error(error);
      // Depending on your requirement, you may want to throw a specific exception type
      throw new BadRequestException('Failed to update equipment');
    }
  }

  async getEquipment() {
    try {
      const equipments = await this._equipmentModel.find();
      return equipments;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
