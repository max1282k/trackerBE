import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Log } from '../schema/log.schema';
import { CreateLogDTO } from './dto/createLog.dto';

@Injectable()
export class LogService {
  constructor(
    @InjectModel(Log.name)
    private readonly _logModel: Model<Log>,
  ) {}

  async createLog(data: CreateLogDTO) {
    try {
      const newLog = await this._logModel.create(data);
      return newLog;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async getAllLogs(limit: number, offset: number) {
    try {
      const logs = await this._logModel.find().skip(offset).limit(limit);

      const totalLogs = await this._logModel.countDocuments();

      return {
        data: logs,
        totalCount: totalLogs,
      };
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async getLogsByImei(imei: string, limit: number, offset: number) {
    try {
      const logs = await this._logModel
        .find({ imei })
        .skip(offset)
        .limit(limit);

      const totalLogs = await this._logModel.countDocuments({ imei });

      return {
        data: logs,
        totalCount: totalLogs,
      };
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
