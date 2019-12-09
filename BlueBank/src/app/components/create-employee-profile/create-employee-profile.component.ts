import { Component } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-create-employee-profile',
  templateUrl: './create-employee-profile.component.html',
  styleUrls: ['./create-employee-profile.component.scss']
})
export class CreateEmployeeProfileComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Profile("","","","","","","",[],"",[],[],[],);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
  }

}
