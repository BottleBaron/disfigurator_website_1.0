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
        const string id = "test";
        const string content = "Test Content";
        const string title = "Test Title";
        const string imageUrl = "https://www.testurl.com";

        // Act
        var postModel = new Post
        {
            Id = id,
            Content = content,
            Title = title,
            ImageUrl = imageUrl
        };

        // Assert
        postModel.Id.Should().Be(id);
        postModel.Content.Should().Be(content);
        postModel.Title.Should().Be(title);
        postModel.ImageUrl.Should().Be(imageUrl);
    }
}