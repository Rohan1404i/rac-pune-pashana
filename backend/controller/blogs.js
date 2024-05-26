const blog = require("../modals/blogs");
const avenue = require("../modals/avenue");
const events = require("../modals/events");
require("dotenv").config();

exports.blog_get = async (req, res) => {
  blog.find({}, (error, blogs) => {
    if (error) {
      console.error("Failed to retrieve blogs", error);
      res.status(500).json({ error: "Failed to retrieve blogs" });
    } else {
      res.json(blogs);
    }
  });
};

exports.getBlog = async(req, res) => {

  const blogId = req.body.blogId;

  blog.findOne({_id: blogId})
  .then(blog => {
    if(blog)
      return res.status(200).json({blog});
    return res.status(200).json({"message" : "No blog found"});
  })
  .catch(err => {
    console.log(err)
    return res.status(400).json(err);
  })
};

exports.addBlog = async (req, res) => {
  const { title, desc, mainImage, fullDesc,images, avenue } = req.body;
  const newBlog = new blog({
    title,
    desc,
    mainImage,
    fullDesc,
    images,
    avenue
  });

  newBlog.save((error, blogs) => {
    if (error) {
      console.error("Failed to add blog", error);
      res.status(500).json({ error: "Failed to add blog" });
    } else {
      res.json({
        blogId: blogs._id,
        title: blogs.title,
        desc: blogs.desc,
        mainImage: blogs.mainImage,
        fullDesc: blogs.fullDesc,
        images: blogs.images,
        avenue : blogs.avenue
      });
    }
  });
};

exports.updateBlog = async (req, res) => {
  const { title, desc, mainImage, fullDesc, blogId,images } = req.body;

  blog.findByIdAndUpdate(
    blogId,
    { title, desc, mainImage, fullDesc,images },
    { new: true },
    (error, updateBlog) => {
      if (error) {
        console.error("Failed to update blog", error);
        res.status(500).json({ error: "Failed to update blog" });
      } else {
        res.json({
          blogId: updateBlog._id,
          title: updateBlog.title,
          desc: updateBlog.desc,
          mainImage: updateBlog.mainImage,
          fullDesc:updateBlog.fullDesc,
          images:updateBlog.images,
          avenue: updateBlog.avenue
        });
      }
    }
  );
};

exports.deleteBlog = async (req, res) => {
  const { blogId } = req.body;

  blog.findByIdAndRemove(blogId, (error, deletedBlog) => {
    if (error) {
      console.error("Failed to delete blog", error);
      res.status(500).json({ error: "Failed to delete blog" });
    } else if (!deletedBlog) {
      res.status(404).json({ error: "blog not found" });
    } else {
      res.json({
        message: "blog deleted successfully",
        blogId: deletedBlog._id,
        title: deletedBlog.title,
      });
    }
  });
};

exports.searchBlog = async (req, res) => {

  const {searchInput} = req.body;

  blog.find({title : { $regex : searchInput , $options : 'i'}})
  .then(searchResult => {
    if(searchResult)
      return res.status(200).json({searchResult});
    return res.status(200).json({message : 'Thre seems to be some error'});
  })
  .catch(err => {
    console.log("Search error:", err.message);
  })
};