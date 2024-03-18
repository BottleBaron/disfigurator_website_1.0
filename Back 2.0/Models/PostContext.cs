using MongoDB.Driver.Core.Configuration;
using MongoDB.Driver;
using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using Microsoft.Extensions.Configuration;
using MongoDB.EntityFrameworkCore.Extensions;

namespace Back.Model;




public class PostContext
{


    private readonly IMongoDatabase db;

    public PostContext(string connectionString, string dataBaseName) { 
        var client = new MongoClient(connectionString);
        db = client.GetDatabase(dataBaseName);
    }

    public IMongoCollection<PostModel> Posts => db.GetCollection<PostModel>("posts");
}

