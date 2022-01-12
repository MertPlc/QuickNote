using System.ComponentModel.DataAnnotations;

namespace QuickNote.Api.Dtos
{
    public class PostNoteDto
    {
        [Required, MaxLength(100)]
        public string Title { get; set; }

        public string Content { get; set; }

        public int NoteBookId { get; set; }
    }
}
