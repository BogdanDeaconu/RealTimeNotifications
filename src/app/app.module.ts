import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddAnnouncementFormComponent } from './add-announcement-form/add-announcement-form.component';
import { HomeComponent } from './home/home.component';
import { AuthorPipe } from './author.pipe';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AnnouncementService } from './services/announcement.service';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    CategoriesComponent,
    AuthorPipe,
    AddAnnouncementFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [AnnouncementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
