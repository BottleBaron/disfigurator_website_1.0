using MongoDB.Driver.Core.Configuration;
using MongoDB.Driver;
using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using Microsoft.Extensions.Configuration;
using MongoDB.EntityFrameworkCore.Extensions;

namespace Back.Model;




internal class PostContext : DbContext
{
    public DbSet<PostModel> Posts { get; init; }

    private const string connectionString = "mongodb://localhost:27017";



    public PostContext(DbContextOptions<PostContext> options) : base(options)
    {
    }

    public static PostContext Create(IMongoDatabase database) =>
       new(new DbContextOptionsBuilder<PostContext>()
           .UseMongoDB(database.Client, database.DatabaseNamespace.DatabaseName)
           .Options);

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var client = new MongoClient(connectionString);

        optionsBuilder.UseMongoDB(client, "Disfigurator_Web");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<PostModel>().ToCollection("posts");
    }

}

