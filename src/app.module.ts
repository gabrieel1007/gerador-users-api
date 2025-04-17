import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { PersonModule } from 'src/person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [AppController],
})
export class AppModule {}
