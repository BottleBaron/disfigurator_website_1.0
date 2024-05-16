using Back_2._0.Models;
using Back.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace Back.Controllers;

[EnableCors("AllowAnyOrigin")]
[Route("api/[controller]")]
[ApiController]
public class UserController
{
    private readonly UserContext _context;

    public UserController(UserContext context)
    {
        _context = context;
    }

    // GET: api/PostModels
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        return await _context.Users.Find(_ => true).ToListAsync();
    }
}