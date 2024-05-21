using System.Net;
using System.Net.Http.Json;
using Back.Tests;
using Back;
using FluentAssertions;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Tests
{
    public class PostE2ETests(IntegrationTestWebAppFactory factory) : IClassFixture<IntegrationTestWebAppFactory>
    {
        [Fact]
        public async Task Post_Returns_Created()
        {
            var client = factory.CreateClient();
            var request = new Post("PlaceholderId","Test", "test", "test");

            var response = await client.PostAsJsonAsync("api/Post", request, CancellationToken.None);

            response.StatusCode.Should().Be(HttpStatusCode.Created);
        }

        [Fact]
        public async Task Get_Returns_OK()
        {
            var client = factory.CreateClient();

            var response = await client.GetAsync("api/Post", CancellationToken.None);

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        [Fact]
        public async Task Post_Adds_Data_To_Context()
        {
            using (var scope = factory.Services.CreateScope())
            {
                // Arrange
                var scopedServices = scope.ServiceProvider;
                var context = scopedServices.GetRequiredService<PostContext>();
                var client = factory.CreateClient();

                var request = new Post("PlaceholderId","Test", "test", "test");
                var filter = Builders<Post>.Filter.Eq(p => p.Id, "PlaceholderId");
                // Act
                await client.PostAsJsonAsync("api/Post", request, CancellationToken.None);

                // Assert
                var result = context.Posts.Find<Post>(filter).FirstOrDefault();
                result.Id.Should().Be("PlaceholderId");
                result.Content.Should().Be("Test");
                result.Title.Should().Be("test");
                result.ImageUrl.Should().Be("test");
            }
        }
    }
}
