using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using Back.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace Back_2._0.Controllers
{
    [EnableCors("AllowAnyOrigin")]
    [Route("api/[controller]")]
    [ApiController]
    public class PostModelsController : ControllerBase
    {
        private readonly PostContext _context;

        public PostModelsController(PostContext context)
        {
            _context = context;
        }

        // GET: api/PostModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PostModel>>> GetPosts()
        {
            return await _context.Posts.Find(_ => true).ToListAsync();
        }

        // GET: api/PostModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PostModel>> GetPostModel(string id)
        {
            var postModel = await _context.Posts.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (postModel == null)
            {
                return NotFound();
            }

            return postModel;
        }

        // PUT: api/PostModels/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPostModel(string id, PostModel postIn)
        {
            var post = await _context.Posts.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (post == null)
            {
                return NotFound();
            }

            await _context.Posts.ReplaceOneAsync(p => p.Id == id, postIn);

            return NoContent();
        }

        // POST: api/PostModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PostModel>> PostPostModel(PostModelDto postModelDto)
        {
            var post = new PostModel(postModelDto.Content, postModelDto.Title, postModelDto.ImageUrls);

            await _context.Posts.InsertOneAsync(post);
            return CreatedAtRoute(new { id = post.Id }, post);
        }

        // DELETE: api/PostModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePostModel(string id)
        {
            var post = await _context.Posts.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (post == null)
            {
                return NotFound();
            }

            await _context.Posts.DeleteOneAsync(p => p.Id == id);

            return NoContent();
        }
    }
}
