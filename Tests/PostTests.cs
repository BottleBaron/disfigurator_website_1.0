namespace Back.Tests;

using Xunit;
using Back;
using FluentAssertions;

public class PostTests
{
    [Fact]
    public void PostModel_Initialization_Success()
    {
        // Arrange
        var postModel = new Post();

        // Assert
        postModel.Should().NotBeNull();
    }

    [Fact]
    public void PostModel_Properties_SetCorrectly()
    {
        // Arrange
        var id = "test";
        var content = "Test Content";
        var title = "Test Title";
        var imageUrls = new[] { "url1", "url2" };

        // Act
        var postModel = new Post
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
}