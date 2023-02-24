import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalcController } from '../calc/calc.controller';
import { CalcModule } from '../calc/calc.module';
import { CalcService } from '../calc/calc.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { News } from './database/entities/news.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([News]), CalcModule],
  controllers: [AppController, CalcController],
  providers: [AppService, CalcService],
  // imports: [CalcModule],
  // controllers: [CalcController],
  // providers: [CalcService],
})
export class AppModule {}
