import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from '../schema/log.schema';
import { CreateLogDTO } from './dto/createLog.dto';
import { Parser } from 'json2csv'; // Importing json2csv for CSV conversion

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
      const logs = await this._logModel
        .find()
        .sort({ createdAt: -1 }) // Sort by latest
        .skip(offset)
        .limit(limit);

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
        .sort({ createdAt: -1 }) // Sort by latest
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

  async getCsv() {
    try {
      const logs = await this._logModel.find().lean(); // Fetch all logs

      const json2csvParser = new Parser(); // Create json2csv parser
      const csv = json2csvParser.parse(logs); // Convert logs to CSV format

      return csv;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
