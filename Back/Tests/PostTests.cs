namespace Back.Tests;

using Xunit;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Back.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.InMemory;
using FluentAssertions;

public class PostModelTests
{
    // ------------------------
    // Unit tests
    // ------------------------

    [Fact]
    public void PostModel_Initialization_Success()
    {
        // Arrange
        var postModel = new PostModel();

        // Assert
        postModel.Should().NotBeNull();
    }

    [Fact]
    public void PostModel_Properties_SetCorrectly()
    {
        // Arrange
        var id = 1;
        var content = "Test Content";
        var title = "Test Title";
        var imageUrls = new[] { "url1", "url2" };

        // Act
        var postModel = new PostModel
        {
            Id = id,
            Content = content,
            Title = title,
            ImageUrls = imageUrls
        };

        // Assert
        postModel.Id.Should().Be(id);
        postModel.Content.Should().Be(content);
        postModel.Title.Should().Be(title);
        postModel.ImageUrls.Should().Contain(imageUrls);
    }

    // ------------------------
    // E2E Tests
    // ------------------------


    [Fact]
    public void SavePostModel_SavesToDatabase()
    {
        // Arrange

        DbContextOptions<PostContext> _options =
        new DbContextOptionsBuilder<PostContext>()
                 .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                 .Options;

        using (var context = new PostContext(_options))
        {

            // Act
            var sut = new PostModel(content: "Test Content", title: "Test Title", imageUrls: ["Test1", "Test2"]);


            context.Add(sut);
            context.SaveChanges();
        }

        // Assert
        using (var context = new PostContext(_options))
        {

            var savedPost = context.Posts.First(); // Assuming Id is auto-incremented

            savedPost.Should().NotBeNull();
            savedPost.Content.Should().Be("Test content");
            savedPost.Title.Should().Be("Test title");
            savedPost.ImageUrls.Should().HaveCount(2)
                .And.BeEquivalentTo("url1", "url2");
        }
    }
}