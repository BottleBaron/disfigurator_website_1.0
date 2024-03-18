using Back.Model;
using EphemeralMongo;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using AutoFake;
using Xunit;

namespace Back_2._0.Tests
{
    public class IntegrationTestWebAppFactory : WebApplicationFactory<Program>, IAsyncLifetime
    {
        IMongoRunner runner;
        protected readonly IMongoClient mongoClient;

        protected IntegrationTestWebAppFactory()
        {
            var options = new MongoRunnerOptions
            {
                ConnectionTimeout = TimeSpan.FromSeconds(10), // Default: 30 seconds
                ReplicaSetSetupTimeout = TimeSpan.FromSeconds(5), // Default: 10 seconds
                AdditionalArguments = "--quiet", // Default: null,
            };

            runner = MongoRunner.Run(options);
            mongoClient = new MongoClient(runner.ConnectionString);
            Console.WriteLine(runner.ConnectionString);
        }

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureTestServices(services =>
            {

                services.AddSingleton(serviceProvider =>
                {
                    var settings = serviceProvider.GetRequiredService<IOptions<MongoDbSettings>>().Value;
                    return new T
                });

                services.Configure<TenantSettings>(opts =>
                {
                    opts.Tenants = new List<TenantOption>()
                {
                    new()
                    {
                        Tenant = "test_tenant",
                        TenantId = 1,
                        DefaultRmsConnectionString = _dbContainer.GetConnectionString()
                    }
                };
                });
            });
        }

        public async Task InitializeAsync()
        {
            await _dbContainer.StartAsync();

            ConnectionString = _dbContainer.GetConnectionString();
        }

        public new Task DisposeAsync()
        {
            runner.Dispose();
            return _dbContainer.StopAsync();
        }
    }
}

