import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';
import { SequelizeOptionsFactory, SequelizeModuleOptions } from '@nestjs/sequelize';
import { EnumConfig } from './enumConfig/enumConfig';
import { Todo } from 'src/Todos/models/todo.model';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      pg: { dialect, logging, host, port, username, password, database },
    } = this.configService.get(EnumConfig.DATABASE);

    return {
      dialect,
      logging,
      host,
      port,
      username,
      password,
      database,
      models: [Todo],
      autoLoadModels: true,
      synchronize: true
    };
  }
}
