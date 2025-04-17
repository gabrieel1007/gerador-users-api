import { Controller, Get, Param } from '@nestjs/common';
import { PersonGetService } from 'src/person/application/services/person-get.service';

@Controller('/person')
export class PersonGetController {
  constructor() {}

  @Get('/:quantity')
  handle(@Param('quantity') quantity: number) {
    if (quantity > 50) {
      quantity = 50;
    }
    const service = new PersonGetService();
    const response = service.handle(quantity);
    return response;
  }
}
