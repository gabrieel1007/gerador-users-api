import { PersonDto } from 'src/person/application/dtos/person.dto';
import { phones } from './../../infra/database/phones';
import { surname } from './../../infra/database/surnames';
import { firstname } from './../../infra/database/firstnames';
import { Injectable } from '@nestjs/common';
import { emails } from 'src/person/infra/database/emails';
import { Person } from 'src/person/domain/entities/person';
import { PersonCreateDto } from 'src/person/application/dtos/person-create.dto';

@Injectable()
export class PersonGetService {
  constructor() {}
  responseList: PersonDto[] = [];

  handle(quantity: number): PersonDto[] {
    const response = this.buildPerson(quantity);
    return response;
  }

  buildPerson(quantity: number): PersonDto[] {
    for (let i = 1; i <= quantity; i++) {
      const objParams: PersonCreateDto = {
        firstname: firstname[i].name,
        surname: surname[i].name,
        email: emails[i].email,
        phone: phones[i].phone,
      };

      const person = Person.create(objParams);

      this.responseList.push(person);
    }

    return this.responseList;
  }
}
