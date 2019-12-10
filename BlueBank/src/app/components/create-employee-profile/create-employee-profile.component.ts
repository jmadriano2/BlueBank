import { Component } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { Identification } from 'src/app/models/identification';
import { ProfileService } from 'src/app/services/profile.service';
import { Account } from 'src/app/models/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee-profile',
  templateUrl: './create-employee-profile.component.html',
  styleUrls: ['./create-employee-profile.component.scss']
})
export class CreateEmployeeProfileComponent {

  genders = ['Male', 'Female'];

  type: string = "";
  id: string = "";
  identification = new Identification(this.type, this.id);
  
  account = new Account('001','Payroll Account');


  model = new Profile( "", "", "", "", "Male", "", "", "", [this.identification], [this.account]);

  ids1 = true;
  ids2 = true;

  constructor(private profileService: ProfileService, private router: Router) { }

  onSubmit() {
    this.profileService.addProfile(this.model).subscribe();
    this.router.navigate(['/dashboard']);
  }

  // onClick() {
  //   console.log(this.ids1)
  //   if (this.ids1) {
  //     this.ids1 = false;
  //   } else {
  //     if (this.id2) {
  //       this.ids2 = false;
  //     }
  //   }
  // }

  // onDelClick1() {
  //   this.ids1 = true;
  // }

  // onDelClick2() {
  //   this.ids2 = true;
  // }

}