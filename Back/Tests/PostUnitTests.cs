namespace Back.Tests;

using Xunit;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Back.Model;
using FluentAssertions;

public class PostModelTests
{
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
}