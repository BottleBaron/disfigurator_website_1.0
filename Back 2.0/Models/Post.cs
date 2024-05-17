using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Back;

public class Post
{
    [BsonId]
    public string Id { get; set; }

    [BsonElement("Title")]
    public string Title { get; set; }

    [BsonElement("Content")]
    public string Content { get; set; }

    [BsonElement("ImageUrls")]
    public string ImageUrl { get; set; }


    public Post() {
        Id = string.Empty;
        Content = string.Empty;
        Title = string.Empty;
        ImageUrl = string.Empty;
    }

    public Post(string id, string content, string title, string imageUrls)
    {
        Id = id;
        Content = content;
        Title = title;
        ImageUrl = imageUrls;
    }
}