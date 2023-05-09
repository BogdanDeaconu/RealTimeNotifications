using Microsoft.AspNetCore.Mvc;
using NotificationsAPI.Models;
using NotificationsAPI.Services;

namespace NotificationsAPI.Controllers
{
	[Route("[controller]")]
	[ApiController]
	public class AnnouncementsController : ControllerBase
	{
        IAnnouncementCollectionService _announcementCollectionService;

        public AnnouncementsController(IAnnouncementCollectionService announcementCollectionService)
        {
            _announcementCollectionService = announcementCollectionService ?? throw new ArgumentNullException(nameof(AnnouncementCollectionService));
        }


        /// <summary>
        /// Gets all the announcements from the repository
        /// </summary>
        /// <returns></returns>
        /// 

    
        [HttpGet("byId")]
		public IActionResult GetAnnouncements(Guid id)
		{
            return Ok(_announcementCollectionService.Get(id));
        }

        [HttpGet("All")]
        public IActionResult GetAnnouncements()
        {
            List<Announcement> Announcements = _announcementCollectionService.GetAll();
            return Ok(Announcements);
        }

        [HttpGet("byCategory")]
        public IActionResult GetAnnouncementsByCategory(string categoryId)
        {
            if (categoryId == null)
            {
                return BadRequest("Category Id is null");
            }
            List<Announcement> Announcements = _announcementCollectionService.GetAnnouncementsByCategoryId(categoryId);
            return Ok(Announcements);
        }

        [HttpPost]
		public IActionResult CreateAnnouncement([FromBody] Announcement? announcement)
		{
            if (announcement == null)
            {
                return BadRequest("Announcement is null");
            }
            return Ok(_announcementCollectionService.Create(announcement));
        }

        [HttpPut("(id)")]
        public IActionResult UpdateAnnouncement([FromBody] Announcement? announcement, Guid id)
		{
            return Ok(_announcementCollectionService.Update(id, announcement));
        }

        


        [HttpDelete]
		public IActionResult DeleteAnnouncement([FromBody] Guid id)
		{
            return Ok(_announcementCollectionService.Delete(id));
        }
	}
}
