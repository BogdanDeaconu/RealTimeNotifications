import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CategoriesComponent } from '../categories/categories.component';
import { Category } from '../category';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})
export class AddAnnouncementFormComponent {
   Title: string | undefined;
   Author: string | undefined;
   Message!: string;
   SelectedCategory: Category | undefined;

listOfCategories: Category[] = [
  {
    id:'1',
    name:'Course'
  },
  {
    id:'2',
    name:'General'
  },
  {
    id:'3',
    name:'Laboratory'
  }
]

printInput(){
  console.log(this.Title);
  console.log(this.Author);
  console.log(this.Message);
  console.log(this.SelectedCategory);
}
}

  

