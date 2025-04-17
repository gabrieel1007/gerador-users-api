import { ContactsDto } from 'src/person/application/dtos/contacts.dto';

export type PersonDto = {
  firstName: string;
  surname: string;
  contacts: ContactsDto;
};
