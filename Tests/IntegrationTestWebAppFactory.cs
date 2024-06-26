﻿using Back;
using EphemeralMongo;
using Microsoft.ApplicationInsights.Extensibility.Implementation;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.AspNetCore.Hosting;
using MongoDB.Driver;
using Xunit;
using Microsoft.Extensions.DependencyInjection;
using UserContext = Back_2._0.Models.UserContext;

namespace Back.Tests
{
    public class IntegrationTestWebAppFactory : WebApplicationFactory<Program>
    {
        public IMongoRunner? runner;
        public IMongoClient mongoClient;

        protected override void ConfigureWebHost(IWebHostBuilder builder)
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

            if(runner == null) throw new ArgumentNullException(nameof(runner));

            builder.ConfigureTestServices(services =>
            {
                services.AddSingleton(provider =>
                {
                    return new PostContext(runner.ConnectionString, "test");
                });

                services.AddSingleton(provider =>
                {
                    return new UserContext(runner.ConnectionString, "test");
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

