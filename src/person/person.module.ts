import { Module } from '@nestjs/common';
import { PersonGetService } from 'src/person/application/services/person-get.service';
import { PersonGetController } from 'src/person/infra/controllers/person-get.controller';

@Module({
  imports: [],
  controllers: [PersonGetController],
  providers: [PersonGetService],
})
export class PersonModule {}
