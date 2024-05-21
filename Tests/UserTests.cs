using System.Net;
using Back.Models;
using Back.Tests;
using FluentAssertions;

namespace Tests;

public class UserTests(IntegrationTestWebAppFactory factory) : IClassFixture<IntegrationTestWebAppFactory>
{
    [Fact]
    public void User_Initialization_Success()
    {
        // Arrange
        var user = new User("t", "t", "t");

        // Assert
        user.Should().NotBeNull();
    }

    [Fact]
    public void User_Properties_SetCorrectly()
    {
        // Arrange
        const string id = "test";
        const string userName = "TestUser";
        const string password = "TestPass";

        // Act
        var user = new User(id, userName, password);
        // Assert
        user.Id.Should().Be(id);
        user.Username.Should().Be(userName);
        user.Password.Should().Be(password);
    }
    
    [Fact]
    public async Task Get_Returns_OK()
    {
        var client = factory.CreateClient();

        var response = await client.GetAsync("api/User", CancellationToken.None);

        response.StatusCode.Should().Be(HttpStatusCode.OK);
    }
}