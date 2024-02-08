using MongoDB.Driver.Core.Configuration;
using MongoDB.Driver;

namespace Back.Model;
using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.EntityFrameworkCore.Extensions;





internal class PostContext : DbContext
{

    public static PostContext Create(IMongoDatabase database) =>
       new(new DbContextOptionsBuilder<PostContext>()
           .UseMongoDB(database.Client, database.DatabaseNamespace.DatabaseName)
           .Options);


    public PostContext(DbContextOptions<PostContext> options) : base(options)
    {
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<PostModel>().ToCollection("posts");
    }

    public DbSet<PostModel> Posts { get; set; } = null;
}

