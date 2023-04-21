import { Injectable } from '@angular/core';
import { Announcement } from '../announcement';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  announcements: Announcement[] = [
    {
      id: 1,
      title: 'Viata lui Lazar',
      message: 'Romanul lui Lazar',
      author: 'Lazar',
      category: {
        id: 1,
        name: 'Laboratory',
      },
      imageUrl: 'https://picsum.photos/id/1/200/200',
    },
    {
      id: 2,
      title: 'Viata lui Adi',
      message: 'Romanul lui Adi',
      author: 'Adi',
      category: {
        id: 1,
        name: 'Course',
      },
      imageUrl: 'https://picsum.photos/id/2/200/200',
    },
  ];

  constructor() {}

  serviceCall() {
    console.log('Service was called');
  }

  getAnnouncements(): Observable<Announcement[]> {
    const announcements = of(this.announcements);
    return announcements;
  }

  addAnnouncement(announcement: Announcement) {
    this.announcements.push(announcement);
  }
}
