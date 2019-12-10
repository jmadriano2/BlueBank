import { Identification } from './identification';

export class Profile {

    constructor(
      public title: string,
      public firstName: string,
      public middleName: string,
      public lastName: string,
      public dateOfBirth: string,
      public gender: string,
      public countryOfResidency: string,
      public identification: Identification[],
      public kycCheckRequired:string,
      public address: string,
      public phoneNumber: string,
      public emailAddress: string,
    ) {  }
  
  }