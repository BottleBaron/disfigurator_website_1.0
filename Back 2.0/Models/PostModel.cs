using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Back.Model;

public class PostModel
{
    [BsonId]
    public string Id { get; set; }

    [BsonElement("Title")]
    public string Title { get; set; }

    [BsonElement("Content")]
    public string Content { get; set; }

    [BsonElement("ImageUrls")]
    public string[] ImageUrls { get; set; }


    public PostModel() {
        Id = string.Empty;
        Content = string.Empty;
        Title = string.Empty;
        ImageUrls = [];
    }

    public PostModel(string id, string content, string title, string[] imageUrls)
    {
        Id = id;
        Content = content;
        Title = title;
        ImageUrls = imageUrls;
    }
}

public class PostModelDto
{
    public string Title { get; set; }
    public string Content { get; set; }
    public string[] ImageUrls { get; set;}

    public PostModelDto(string title, string content, string[] imageUrls)
    {
        Title = title;
        Content = content;
        ImageUrls = imageUrls;
    }
}