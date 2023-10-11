const user = require("../models/User");
const Post = require("../models/Post");
const router = require("express").Router();

// Create a Post 
router.post("/",async(req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200);
    } catch(err)
    {
        res.status(500).json(err);
    }
});
// Update a Post
router.put("/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                    $set : req.body,
                },{new:true});
                res.status(200).json(updatedPost);
            }catch(err)
            {
                res.status(401).json("Invalid credentials")
            }
        }else{
            res.status(401).json("You can Update only Your posts");
        }
    } catch (err)
    {
        res.status(500).json(err);
    }
});

// Delete a Post
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json({ message: "Post has been deleted" });
        } catch (err) {
          res.status(500).json({ message: "Internal server error" });
        }
      } else {
        res.status(401).json({ message: "You can only delete your post" });
      }
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
//Get a Post
router.get("/:id",async(req,res)=>{
  try{
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err)
  {
    res.status(500).json(err);
  }
});
//Get all posts
router.get("/",async(req,res)=>{
  const username = req.query.user;
  const catName = req.query.cat;
  try{
    let posts;
    if(username)
    {
      posts = await Post.find({username});
    } else if (catName)
    {
      posts = await Post.find({categories:{
        $in:[catName]
        // $in is mongoose provided operator to match values in arrays
      }})
    } else {
      posts = Post.find();
    }
      res.status(200).json(posts);
  } catch (err){
    res.status(500).json(err);
  }
});

module.exports = router;


