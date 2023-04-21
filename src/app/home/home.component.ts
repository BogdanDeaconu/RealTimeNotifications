import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  announcements: Announcement[];

  categoriesFromHome: Category[] = [
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

  filteredAnnouncements: Announcement[];

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.getAnnouncements();
  }

  getAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe((announcements) => {
      this.announcements = announcements;
      this.filteredAnnouncements = this.announcements;
    });
  }

  filterAnnouncements(category: Category): void {
    if (!category) {
      this.filteredAnnouncements = this.announcements;
      return;
    }

    this.filteredAnnouncements = this.announcements.filter(
      (announcement) => announcement.category.name === category.name
    );
  }
}
