import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnouncementFormComponent } from './add-announcement-form/add-announcement-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'add', component: AddAnnouncementFormComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
