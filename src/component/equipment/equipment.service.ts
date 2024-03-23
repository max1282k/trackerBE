import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Equipment } from '../schema/equipment.schema';
import { CreateEquipmentDTO } from './dto/createEquipment.dto';
import { EditInstantParams } from './dto/instantParams.dto';
import { FixedParamsDTO } from './dto/fixedParams.dto';
import { ImeiDTO } from './dto/imeiDTO.dto';

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
      if (Number(data?.latitude)<-90 || Number(data?.latitude)>90) {
        throw new Error('Latitude must be between -90 and 90');
      }
      if (Number(data?.longitude)<-180 || Number(data?.longitude)>180) {
        throw new Error('Longitude must be between -180 and 180');
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
      if (Number(newData?.latitude)<-90 || Number(newData?.latitude)>90) {
        throw new Error('Latitude must be between -90 and 90');
      }
      if (Number(newData?.longitude)<-180 || Number(newData?.longitude)>180) {
        throw new Error('Longitude must be between -180 and 180');
      }
      // Update the equipment with new data
      await this._equipmentModel.findOneAndUpdate({ imei }, newData);

      // Optionally, you can fetch the updated equipment data and return it
      const updatedEquipment = await this._equipmentModel.findOne({ imei });
      return updatedEquipment;
    } catch (error) {
      console.error(error);
      // Depending on your requirement, you may want to throw a specific exception type
      throw new BadRequestException(error.message);
    }
  }

  async editInstantParams(imei: string, newData: EditInstantParams) {
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

  async editFixedParams(id: string, newData: FixedParamsDTO) {
    try {
      // Check if IMEI already exists in the database
      const existingEquipment = await this._equipmentModel.findOne({ _id: id });

      if (!existingEquipment) {
        throw new Error('Equipment not found');
      }
      // Update the equipment with new data
      await this._equipmentModel.findOneAndUpdate({ _id: id }, newData);

      // Optionally, you can fetch the updated equipment data and return it
      const updatedEquipment = await this._equipmentModel.findOne({ _id: id });
      return updatedEquipment;
    } catch (error) {
      console.error(error);
      // Depending on your requirement, you may want to throw a specific exception type
      throw new BadRequestException('Failed to update equipment');
    }
  }

  async editIMEI(id: string, newData: ImeiDTO) {
    try {
      // Check if IMEI already exists in the database
      const existingEquipment = await this._equipmentModel.findOne({ _id: id });

      if (!existingEquipment) {
        throw new Error('Equipment not found');
      }

      // Update the equipment with new data
      await this._equipmentModel.findOneAndUpdate({ _id: id }, newData);

      // Optionally, you can fetch the updated equipment data and return it
      const updatedEquipment = await this._equipmentModel.findOne({ _id: id });
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
  async getEquipmentById(id: string): Promise<Equipment | null> {
    try {
      const equipment = await this._equipmentModel.findById(id);
      return equipment;
    } catch (error) {
      throw new NotFoundException(`Equipment with id ${id} not found`);
    }
  }
}
