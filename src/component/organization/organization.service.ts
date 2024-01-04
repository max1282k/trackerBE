import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Organization } from '../schema/organization.schema';
import { CreateOrganizationDTO } from './dto/createOrganization.dto';
import { DeleteOrganizationDTO } from './dto/deleteOrganization.dto';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectModel(Organization.name)
    private readonly _organizationModel: Model<Organization>,
  ) {}

  async getAllOrganizations(limit, offset) {
    try {
      limit = limit ? Number(limit) : 10;
      offset = offset ? Number(offset) : 0;
      const organizations = await this._organizationModel
        .find()
        .skip(offset)
        .limit(limit);
      const totalCount = (await this._organizationModel.find()).length;
      return {results: organizations, totalCount: totalCount};
    } catch (error) {
      console.log(error?.message);
      throw new BadRequestException(error?.message);
    }
  }

  async createOrganization(data: CreateOrganizationDTO) {
    try {
      const newOrganization = await this._organizationModel.create(data);
      return newOrganization;
    } catch (error) {
      console.log(error?.message);
      throw new BadRequestException(error?.message);
    }
  }

  async deleteOrganization(data: DeleteOrganizationDTO) {
    try {
      const deletedOrganization =
        await this._organizationModel.findByIdAndDelete(data.id);

      if (!deletedOrganization) {
        throw new BadRequestException('Organization not found');
      }

      return deletedOrganization;
    } catch (error) {
      console.log(error?.message);
      throw new BadRequestException(error?.message);
    }
  }
}
