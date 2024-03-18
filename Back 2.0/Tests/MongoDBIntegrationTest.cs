using MongoDB.Driver;
using EphemeralMongo;


namespace Back_2._0.Tests
{
    public class MongoDbIntegrationTest : IDisposable
    {
        IMongoRunner runner;
        protected readonly IMongoClient mongoClient;

        protected MongoDbIntegrationTest()
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

        public void Dispose()
        {
            runner.Dispose();
        }
    }
}
