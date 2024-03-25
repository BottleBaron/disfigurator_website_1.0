using Back.Model;
using System.Net;
using FluentAssertions;
using Xunit;
using System.Runtime.CompilerServices;
using MongoDB.Driver;
using MongoDB.Bson;

namespace Back_2._0.Tests
{
    public class PostE2ETests(IntegrationTestWebAppFactory factory) : IClassFixture<IntegrationTestWebAppFactory>
    {
        [Fact]
        public async Task Unauthorized_Request_Returns_Correct_Response()
        {
            var client = factory.CreateClient();
            var request = new PostModel { Title = "test" };

            var response = await client.PostAsJsonAsync("api/PostModels", request, CancellationToken.None);

            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }

        [Fact]
        public async Task Post_Returns_OK()
        {
            var client = factory.CreateClient();
            var request = new PostModel("Test", "test", ["test1", "test2"]);

            var response = await client.PostAsJsonAsync("api/PostModels", request, CancellationToken.None);

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        [Fact]
        public async Task Get_Returns_OK()
        {
            var client = factory.CreateClient();

            var response = await client.GetAsync("api/PostModels", CancellationToken.None);

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

                var request = new PostModel("Test", "test", ["test1", "test2"]);
                var filter = request.ToBsonDocument();

                // Act
                await client.PostAsJsonAsync("api/PostModels", request, CancellationToken.None);

                // Assert
                var cursor = context.Posts.Find(filter);
                cursor.Should().NotBeNull();
            }
        }
    }
}
