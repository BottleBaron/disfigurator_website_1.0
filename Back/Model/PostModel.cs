namespace Back.Model;

public class PostModel
{
    public int Id { get; set; }
    public string Content { get; set; }
    public string Title { get; set; }
    public string[] ImageUrls { get; set; }


    public PostModel() {
        Content = string.Empty;
        Title = string.Empty;
        ImageUrls = [];
    }

    public PostModel(string content, string title, string[] imageUrls) {
        
        Content = content;
        Title = title;
        ImageUrls = imageUrls;
    }
}