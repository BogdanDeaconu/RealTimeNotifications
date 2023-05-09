using NotificationsAPI.Models;

namespace NotificationsAPI.Services
{
    public interface IAnnouncementCollectionService : ICollectionService<Announcement>
    {
        public List<Announcement> GetAnnouncementsByCategoryId(string categoryId);

    }

}
