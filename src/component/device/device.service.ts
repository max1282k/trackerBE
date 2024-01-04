import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Device } from '../schema/device.schema';
import { CreateDeviceDTO } from './dto/createDevice.dto';
import { DeleteDeviceDTO } from './dto/deleteDevice.dto';

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel(Device.name)
    private readonly _deviceModel: Model<Device>,
  ) {}

  async getAllDevices(limit, offset) {
    try {
      limit = limit ? Number(limit) : 10;
      offset = offset ? Number(offset) : 0;
      const totalCount = (await this._deviceModel.find()).length;
      const devices = await this._deviceModel.find().skip(offset).limit(limit);
      return { results: devices, totalCount: totalCount };
    } catch (error) {
      console.log(error?.message);
      throw new BadRequestException(error?.message);
    }
  }
  async createDevice(data: CreateDeviceDTO) {
    try {
      const newDevice = await this._deviceModel.create(data);
      return newDevice;
    } catch (error) {
      console.log(error?.message);
      throw new BadRequestException(error?.message);
    }
  }
  async deleteDevice(data: DeleteDeviceDTO) {
    try {
      const deletedDevice = await this._deviceModel.findByIdAndDelete(data.id);

      if (!deletedDevice) {
        throw new BadRequestException('Device not found');
      }

      return deletedDevice;
    } catch (error) {
      console.log(error?.message);
      throw new BadRequestException(error?.message);
    }
  }
}
