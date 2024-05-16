using Back;
using Back.Models;
using MongoDB.Driver;

namespace Back_2._0.Models;

public class UserContext
{
    private readonly IMongoDatabase db;

    public UserContext(string connectionString, string dataBaseName) { 
        var client = new MongoClient(connectionString);
        db = client.GetDatabase(dataBaseName);
    }

    public IMongoCollection<User> Users => db.GetCollection<User>("users");
}