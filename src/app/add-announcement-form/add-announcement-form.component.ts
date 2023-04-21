import { Component, Input } from '@angular/core';
import { Category } from '../category';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss'],
})
export class AddAnnouncementFormComponent {
  @Input()
  categories: Category[] = [
    {
      id: 1,
      name: 'Course',
    },
    {
      id: 2,
      name: 'General',
    },
    {
      id: 3,
      name: 'Laboratory',
    },
  ];

  constructor(
    private announcementService: AnnouncementService,
    private router: Router
  ) {}

  title: string;
  author: string;
  message: string;
  category: Category;

  onSubmit() {
    let announcement: Announcement = {
      id: 3,
      title: this.title,
      author: this.author,
      message: this.message,
      category: this.category,
      imageUrl: 'https://picsum.photos/200/200',
    };
    this.announcementService.addAnnouncement(announcement);
    this.router.navigate(['/']);
  }
}
