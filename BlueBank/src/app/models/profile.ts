import { Identification } from './identification';
import { Account } from './account';

export class Profile {

    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string,
      public dateOfBirth: string,
      public gender: string,
      public email: string,
      public address: string,
      public mobileNumber: string,
      public identification: Identification[],
      public accounts: Account[]
    ) {  }
  
  }