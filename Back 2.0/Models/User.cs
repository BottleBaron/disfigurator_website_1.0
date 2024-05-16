using MongoDB.Bson.Serialization.Attributes;

namespace Back.Models;

public class User
{
    [BsonId]
    public string Id { get; set; }
    
    [BsonElement("UserName")]
    public string Username { get; set; }
    
    [BsonElement("PassWord")]
    public string Password { get; set; }

    public User(string id, string username, string password)
    {
        Id = id;
        Username = username;
        Password = password;
    }
}