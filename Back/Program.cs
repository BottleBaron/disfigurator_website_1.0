using Back.Model;
using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using Microsoft.OpenApi.Models;

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

// Sida för tutorial: https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-8.0&tabs=visual-studio

// Mongo DB: https://www.mongodb.com/docs/entity-framework/current/quick-reference/
// https://www.mongodb.com/docs/entity-framework/current/quick-start/#std-label-entity-framework-quickstart

// FIXME: Current issue: Swagger not loading controller endpoints.
// Continue looking into integration.Shopify to see how we utilized mongo previously


var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddDbContext<PostContext>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
