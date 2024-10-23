import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowDateComponent } from '../show-date/show-date.component';
import { CommonModule } from '@angular/common';
import { ManageInterestsComponent } from '../manage-interests/manage-interests.component';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [FormsModule,ShowDateComponent,CommonModule, ManageInterestsComponent],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})
export class BusinessCardComponent {
  name: string;
  surname: string;
  dateOfBirth: Date;
  interests: string[];
  selected:number=-1;
  itemSelected:string ="";

  constructor() { 
    this.name = 'Joanna';
    this.surname = 'Krupa';
    this.dateOfBirth = new Date('2000-03-18');
    this.interests = ['tennis', 'programming', 'photography'];
  }

  selectInterest(which:number):void {
      this.selected=which;
      this.itemSelected = this.interests[which];
  }

  cancelInput(interest:string) {
    this.interests[this.selected] = interest;
    this.selected = -1;
  }

  
}