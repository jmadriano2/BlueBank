import { Identifiaction } from './identification';
import { Address } from './address';
import { PhoneNumber } from './phone-number';
import { EmailAddress } from './email-address';

export class Profile {

    constructor(
      public branchCode: string,
      public title: string,
      public firstName: string,
      public lastName: string,
      public dateOfBirth: string,
      public gender: string,
      public countryOfResidency: string,
      public identification: Identifiaction[],
      public kycCheckRequired:string,
      public addresses: Address[],
      public phoneNumbers: PhoneNumber[],
      public emailAddresses: EmailAddress[],
    ) {  }
  
  }
  