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
            var request = new Post("PlaceholderId","Test", "test", ["test1", "test2"]);

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

                var request = new Post("PlaceholderId","Test", "test", ["test1", "test2"]);
                var filter = request.ToBsonDocument();

                // Act
                await client.PostAsJsonAsync("api/Post", request, CancellationToken.None);

                // Assert
                var cursor = context.Posts.Find(filter);
                cursor.CountDocuments().Should().Be(1);
            }
        }
    }
}
