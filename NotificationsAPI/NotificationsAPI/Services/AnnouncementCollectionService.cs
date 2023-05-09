using NotificationsAPI.Models;

namespace NotificationsAPI.Services
{
    public class AnnouncementCollectionService : IAnnouncementCollectionService
    {

        List<Announcement> _announcements = new List<Announcement> { new Announcement { Id = Guid.NewGuid(), CategoryId = "1", Title = "First Announcement", Description = "First Announcement Description" , Author = "Author_1"},
        new Announcement { Id = Guid.NewGuid(), CategoryId = "1", Title = "Second Announcement", Description = "Second Announcement Description", Author = "Author_1" },
        new Announcement { Id = Guid.NewGuid(), CategoryId = "1", Title = "Third Announcement", Description = "Third Announcement Description", Author = "Author_2"  },
        new Announcement { Id = Guid.NewGuid(), CategoryId = "1", Title = "Fourth Announcement", Description = "Fourth Announcement Description", Author = "Author_3"  },
        new Announcement { Id = Guid.NewGuid(), CategoryId = "1", Title = "Fifth Announcement", Description = "Fifth Announcement Description", Author = "Author_4"  }
        };


        public bool Create(Announcement model)
        {
            model.Id = Guid.NewGuid();
            _announcements.Add(model);
            return true;
        }

        public bool Delete(Guid id)
        {
            var announcement = _announcements.Find(a => a.Id.Equals(id));

            if (announcement == null)
            {
                return false;
            }
            else
            {
                _announcements.Remove(announcement);
                return true;
            }
        }

        public Announcement Get(Guid id)
        {
            var annoucement = _announcements.FirstOrDefault(x => x.Id.Equals(id));
            return annoucement;
        }

        public List<Announcement> GetAll()
        {
            return _announcements;
        }

        public List<Announcement> GetAnnouncementsByCategoryId(string categoryId)
        {
            var announcementbycategory = _announcements.FindAll(a => a.CategoryId.Equals(categoryId));
            return announcementbycategory;
        }

        public bool Update(Guid id, Announcement model)
        {
            if (model == null)
            {
                return false;
            }

            var announcementInApp = _announcements.FirstOrDefault(a => a.Id.Equals(model.Id));

            if (announcementInApp == null)
            {
                _announcements.Add(model);
            }
            else
            {
                model.Id = id;
                _announcements[_announcements.IndexOf(announcementInApp)] = model;
            }
            return true;
        }

        
    }
}
