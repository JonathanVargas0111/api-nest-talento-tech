import { Module } from '@nestjs/common';
import { HousesService } from './houses.service';

@Module({
  providers: [HousesService]
})
export class HousesModule {}
