using Back;
using EphemeralMongo;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

using Xunit;

namespace Back_2._0.Tests
{
    public class IntegrationTestWebAppFactory : WebApplicationFactory<Program>
    {
        IMongoRunner runner;

        protected IntegrationTestWebAppFactory()
        {
            var options = new MongoRunnerOptions
            {
                ConnectionTimeout = TimeSpan.FromSeconds(10), // Default: 30 seconds
                ReplicaSetSetupTimeout = TimeSpan.FromSeconds(5), // Default: 10 seconds
                AdditionalArguments = "--quiet", // Default: null,
            };

            runner = MongoRunner.Run(options);
            Console.WriteLine(runner.ConnectionString);
        }

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureTestServices(services =>
            {
                services.AddSingleton(provider => {
                    return new PostContext(runner.ConnectionString, "test");
                });

                services.AddEndpointsApiExplorer();
            });
        }

        

        public new void Dispose()
        {
            runner.Dispose();
        }
    }
}

