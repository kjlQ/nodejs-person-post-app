const db = require("../db");

class PostController {
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    const newPost = db.query("INSERT INTO post (title , content , user_id) values ($1,$2,$3) RETURNING *", [
      title,
      content,
      userId,
    ]);
    res.json(newPost);
  }

  async getPost(req, res) {
    const id = req.query.id;
    const posts = await db.query("SELECT * from post where user_id = $1", [id]);
    res.json(posts.rows);
  }
}

module.exports = new PostController();
