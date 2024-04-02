using Back;
using EphemeralMongo;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.AspNetCore.Hosting;
using MongoDB.Driver;
using Xunit;
using Microsoft.Extensions.DependencyInjection;
using Back.Model;

namespace Back_2._0.Tests
{
    public class IntegrationTestWebAppFactory : WebApplicationFactory<Program>
    {
        IMongoRunner? runner;

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            var options = new MongoRunnerOptions
            {
                ConnectionTimeout = TimeSpan.FromSeconds(10), // Default: 30 seconds
                ReplicaSetSetupTimeout = TimeSpan.FromSeconds(5), // Default: 10 seconds
                AdditionalArguments = "--quiet", // Default: null,
            };

            runner = MongoRunner.Run(options);
            Console.WriteLine(runner.ConnectionString);

            if(runner == null) throw new ArgumentNullException(nameof(runner));

            builder.ConfigureTestServices(services =>
            {
                services.AddSingleton(provider =>
                {
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

