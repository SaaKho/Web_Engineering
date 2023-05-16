const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();

// Set up middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to the database
mongoose.connect('mongodb+srv://hira:HT1234@cluster0.pox2wdn.mongodb.net/Blog?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected!');
});

// Define the schema for a blog post
const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});

// Create a model for a blog post
const Post = mongoose.model('Post', postSchema);

// Routes for blog posts
app.post('/createposts', async (req, res) => {
  const post = new Post(req.body);
  try {
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/getposts', async (req, res) => {
  try {
    const posts = await Post.find().sort('-date');
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/delposts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Routes for comments on blog posts
app.post('/composts/:id/comments', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.comments.push(req.body);
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log('Server listening on port 5000!');
});
