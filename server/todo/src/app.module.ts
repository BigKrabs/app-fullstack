import { databaseConfig } from './../config/configuration';
import { SequelizeConfigService } from './../config/sequelize.Config.service';
import { SequelizeModule } from '@nestjs/sequelize/dist';
import { Module } from '@nestjs/common';
import { TodoModule } from './Todos/todo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService
    }),
    ConfigModule.forRoot({
      load: [databaseConfig]
    }), 
    TodoModule,
  ],
})
export class AppModule {}
