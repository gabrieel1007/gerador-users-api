import { PersonCreateDto } from 'src/person/application/dtos/person-create.dto';
import { PersonDto } from 'src/person/application/dtos/person.dto';

export class Person {
  private constructor(readonly props: PersonDto) {}

  static create(input: PersonCreateDto): PersonDto {
    const person = new Person({
      firstName: input.firstname,
      surname: input.surname,
      contacts: {
        email: input.email,
        phone: input.phone,
      },
    });
    return person.props;
  }
}
